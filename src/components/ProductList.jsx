import * as React from "react";
import Link from "next/link";
import RemoveBtn from "@/components/RemoveBtn";
import Image from "next/image";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
  }
};

export default async function ProductsList() {
  const { products } = await getProducts();

  return (
    <div className="shadow-lg p-3 mb-24 bg-body rounded mx-6">
      <div className="overflow-x-auto">
        <div className="flex justify-center items-center">
          <h1 className="font-bold py-10 text-2xl">
            ครุภัณฑ์คณะมนุษยศาสตร์และสังคมศาสตร์
          </h1>
        </div>
        <div className="mx-4 mb-6">
          <Button
            variant="contained"
            href={"/AddProduct"}
            size="large"
            color="success"
          >
            กรอกรายการครุภัณฑ์
          </Button>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th className="font-bold">Images</th>
              <th className="font-bold">รายการครุภัณฑ์</th>
              <th className="font-bold">หมายเลขครุภัณฑ์</th>
              <th className="font-bold">ราคา</th>
              <th className="font-bold">จำนวน</th>
              <th className="font-bold">คุณลักษณะครุภัณฑ์</th>
              <th className="font-bold">วันที่ได้มา</th>
              <th className="font-bold"> ปีที่จัดซื้อ</th>
              <th className="font-bold">สถานที่ใช้งาน</th>
              <th className="font-bold">วิธีการจัดหา</th>
              <th className="font-bold">งบประมาณ</th>
              <th className="font-bold">ประเภทครุภัณฑ์</th>
              <th className="font-bold">กลุ่มครุภัณฑ์</th>
              <th className="font-bold">สถานะ</th>
              <th className="font-bold">ผู้รับผิดชอบ</th>
              <th className="font-bold">QR Code</th>
              <th>
                <div className="flex justify-center items-center font-bold">
                  แก้ไข || ลบ
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((element) => (
              <tr className="hover" key={element._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={element.image}
                          alt={element.name}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{element.name}</td>
                <td>{element.num1}</td>
                <td>{element.price}</td>
                <td>{element.num2}</td>
                <td>{element.spec}</td>
                <td>{element.date1}</td>
                <td>{element.date2}</td>
                <td>{element.building}</td>
                <td>{element.method}</td>
                <td>{element.budget}</td>
                <td>{element.category}</td>
                <td>{element.group}</td>
                <td>{element.state}</td>
                <td>{element.respondent}</td>
                <td>{element.qrcode}</td>
                <div>
                  <th>
                    <Link href={`/editProduct/${element._id}`}>
                      <Button variant="contained" color="success">
                        <EditIcon />
                      </Button>
                    </Link>
                  </th>
                  <th>
                    <RemoveBtn id={element._id} />
                  </th>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
