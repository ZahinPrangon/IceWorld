/* eslint-disable import/order */
import prismadb from "lib/prismadb";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { phone } = await request.json();
  if (!phone) {
    return new NextResponse("Mobile number is required", { status: 400 });
  }
  try {
    const orders = await prismadb.order.findMany({
      where: {
        phone,
      },
      include: {
        orderItems: {
          include: {
            product: true, // Include product details
          },
        },
      },
    });
    return NextResponse.json({ orders });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
