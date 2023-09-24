/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-console */
import bcrypt from "bcryptjs";
import { type NextRequest, NextResponse } from "next/server";
import prismadb from "lib/prismadb";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, password } = await request.json();

    // const { phone } = await request.json();
    // if (!phone) {
    //   return new NextResponse("Mobile number is required", { status: 400 });
    // }
    // try {
    //   const orders = await prismadb.order.findMany({
    //     where: {
    //       phone,
    //     },
    //     include: {
    //       orderItems: {
    //         include: {
    //           product: true, // Include product details
    //         },
    //       },
    //     },
    //   });
    // if (email === null && phone === null) {
    //   throw new Error("Either email or phone must be provided.");
    // }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prismadb.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
      },
    });
    console.log(user);
    console.log(name, email, phone, password);
    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
