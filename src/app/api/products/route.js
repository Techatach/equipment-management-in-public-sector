import connectMongoDB from "@/lib/Mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function POST(request) {
  const {
    name,
    image,
    num1,
    price,
    num2,
    spec,
    date1,
    date2,
    building,
    method,
    budget,
    category,
    group,
    state,
    respondent,
    qrcode,
  } = await request.json();
  await connectMongoDB();
  await Product.create({
    name,
    image,
    num1,
    price,
    num2,
    spec,
    date1,
    date2,
    building,
    method,
    budget,
    category,
    group,
    state,
    respondent,
    qrcode,
  });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deleted" }, { status: 200 });
}
