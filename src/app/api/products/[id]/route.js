//app\api\products\[id]\route.js
import connectMongoDB from "@/lib/Mongodb";
import Product from "@/models/ProductModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newImage: image,
    newNum1: num1,
    newPrice: price,
    newNum2: num2,
    newSpec: spec,
    newDate1: date1,
    newDate2: date2,
    newBuilding: building,
    newMethod: method,
    newBudget: budget,
    newCategory: category,
    newGroup: group,
    newState: state,
    newRespondent: respondent,
    newQrcode: qrcode,
  } = await request.json();
  await connectMongoDB();
  await Product.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "Product updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const product = await Product.findOne({ _id: id });
  return NextResponse.json({ product }, { status: 200 });
}
