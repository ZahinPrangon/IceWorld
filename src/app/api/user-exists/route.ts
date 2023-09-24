/* eslint-disable no-console */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable object-shorthand */
/* eslint-disable prettier/prettier */
import { type NextRequest, NextResponse } from "next/server";
import prismadb from "lib/prismadb";

export async function POST(request: NextRequest) {
  try {
    const { email, phone } = await request.json();

    // check if this user exists in the database.
    const existingUser = await prismadb.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            phone: phone,
          },
        ],
      },
    });
    // const user = await prismadb.user.create({
    //   data: {
    //     name,
    //     email,
    //     phone,
    //     password: hashedPassword,
    //   },
    // });
    if (existingUser) {
      // Determine which field (email or phone) caused the duplication.
      let duplicateField = "";
      if (existingUser.email === email) {
        duplicateField = "email";
      } else if (existingUser.phone === phone) {
        duplicateField = "phone";
      }

      // Return an error response with information about the duplicate field.
      return NextResponse.json(
        { user: existingUser, duplicateField },
        { status: 409 }
      );
    }
    console.log(existingUser);

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    return new NextResponse(`${error}`, { status: 500 });
  }
}
