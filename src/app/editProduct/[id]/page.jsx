import EditProductForm from "@/components/EditProductForm";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditProduct({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
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
  } = product;

  return (
    <EditProductForm
      id={id}
      name={name}
      image={image}
      num1={num1}
      price={price}
      num2={num2}
      spec={spec}
      date1={date1}
      date2={date2}
      building={building}
      method={method}
      budget={budget}
      category={category}
      group={group}
      state={state}
      respondent={respondent}
      qrcode={qrcode}
    />
  );
}
