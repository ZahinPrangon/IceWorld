/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable func-names */
import prismadb from "lib/prismadb";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const {
    name,
    mobile,
    selectedProducts,
    address,
    district,
    totalPrice,
    email,
  } = await request.json();
  if (!name || !mobile || !selectedProducts) {
    return new NextResponse("Name, mobile and selected products are required", {
      status: 400,
    });
  }
  const productIds = selectedProducts.map((product: any) => product.id);

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }
  function generateOrderNumber() {
    const timestamp = Date.now().toString(); // Get current timestamp as a string
    const randomString = Math.random().toString(36).substr(2, 5); // Generate a random string
    const orderNumber = `ICE-${timestamp}-${randomString}`; // Combine timestamp and random string
    return orderNumber;
  }
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const sendMailPromise = (mailOpt: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOpt, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  const sendMailPromiseForCustomer = (mailOpt: Mail.Options) =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOpt, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    const orderNumber = generateOrderNumber();
    const order = await prismadb.order.create({
      data: {
        totalAmount: totalPrice,
        address,
        email,
        customerName: name,
        phone: mobile,
        district,
        orderNumber,
        orderItems: {
          create: selectedProducts.map((p: any) => ({
            product: {
              connect: {
                id: p.id,
              },
            },
            quantity: p.quantity,
          })),
        },
      },
    });

    const mailOptionsForCustomer: Mail.Options = {
      from: "icelagbe@gmail.com", // Set the 'from' address to icelagbe@gmail.com
      to: email, // Use the email address coming from response.json as 'to' address
      // cc: process.env.MY_EMAIL, (uncomment this line if you want to send a copy to your email)
      subject: `Order placed from ${name}`,
      html: `
      <img src="https://www.icelagbe.com/_next/static/media/logo.60229123.png" style="width:120px; height:102px;" alt="Order Confirmation Image">
      <p>Dear ${name},</p>
      <p>Thank you for placing an order with us. Your order details are as follows:</p>
      <ul>
        ${selectedProducts
          .map((product: any) => {
            return `
              <li>
                ${product.name}: Quantity - ${product.quantity}
              </li>
            `;
          })
          .join("")}
      </ul>
      <p>Total Price: ৳ ${totalPrice}</p>
      <p>We appreciate your business and look forward to serving you again.</p>
      <p>Your order confirmation number is: <strong>${orderNumber}</strong></p>
      <p>Best regards,<br>Ice Lagbe Team</p>
    `,
    };

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Order placed from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>Order Confirmation</title>
        </head>
        <body>
          <h1>Order Confirmation</h1>
          <p>Order Number: <strong>${order.orderNumber}</strong></p>
          <p>Name: ${name}</p>
          <p>Mobile: ${mobile}</p>
          <p>Address: ${address}</p>
          <p>District: ${district}</p>
          <p>Email: ${email}</p>
          <h2>Products Ordered:</h2>
          <ul>
            ${selectedProducts
              .map((product: any) => {
                return `
                  <li>
                    ${product.name} (ID: ${product.id}) - Quantity: ${product.quantity}
                  </li>
                `;
              })
              .join("")}
          </ul>
        </body>
        </html>
      `,
    };

    await sendMailPromise(mailOptions);
    await sendMailPromiseForCustomer(mailOptionsForCustomer);

    return NextResponse.json({ message: "Email sent", order });
  } catch (err) {
    console.error("Error creating order:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
