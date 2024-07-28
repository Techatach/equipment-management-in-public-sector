import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    num1: { type: Number, required: true },
    price: { type: Number, required: true },
    num2: { type: Number, required: true },
    spec: { type: String, required: true },
    date1: { type: Date, required: true },
    date2: { type: Date, required: true },
    building: { type: String, required: true },
    method: { type: String, required: true },
    budget: { type: String, required: true },
    category: { type: String, required: true },
    group: { type: String, required: true },
    state: { type: String, required: true },
    respondent: { type: String, required: true },
    qrcode: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", topicSchema);

export default ProductModel;
