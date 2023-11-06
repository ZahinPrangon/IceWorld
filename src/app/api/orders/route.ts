/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";

// Function to convert JSON data to CSV format
function convertJSONToCSV(data: any) {
  const header = Object.keys(data[0]).join(",");
  const rows = data.map((order: any) =>
    Object.values(order)
      .map((value) => (typeof value === "string" ? `"${value}"` : value))
      .join(",")
  );
  return [header, ...rows].join("\n");
}

export async function GET() {
  try {
    const orders = await prismadb.order.findMany({
      include: {
        orderItems: {
          include: {
            product: true, // Include product details
          },
        },
      },
    });

    // Convert the JSON data to CSV format
    const csvData = convertJSONToCSV(orders);

    // Set the response headers for downloading the CSV file
    const headers = {
      "Content-Type": "text/csv",
      "Content-Disposition": "attachment; filename=orders.csv",
    };

    return new NextResponse(csvData, { status: 200, headers });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
