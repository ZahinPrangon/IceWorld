/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable no-console */
/* eslint-disable func-names */
import prismadb from "lib/prismadb";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, mobile, selectedProducts } = await request.json();
  // const { userId } = auth();
  if (!name || !mobile || !selectedProducts) {
    return new NextResponse("Name, mobile and selected products are required", {
      status: 400,
    });
  }
  const productIds = selectedProducts.map((product: any) => product.id);

  if (!productIds || productIds.length === 0) {
    return new NextResponse("Product ids are required", { status: 400 });
  }

  const products = await prismadb.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });
  console.log(products);
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

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Order placed from ${name}`,
    text: `Order placed from ${name}, mobile number ${mobile} for the following products: \n\n${Object.keys(
      selectedProducts
    )
      .map((productId) => {
        const productData = selectedProducts[productId];
        const { id, quantity } = productData;
        return `${id} (${productData.name}): Quantity: ${quantity}`;
      })
      .join("\n")}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    // await prismadb.order.create({
    //   data: {
    //     address,
    //     phone: mobile,
    //     userId: userId || "",
    //     orderItems: {
    //       create: productIds.map((productId: string) => ({
    //         product: {
    //           connect: {
    //             id: productId,
    //           },
    //         },
    //       })),
    //     },
    //   },
    // });
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
