"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [num1, setNum1] = useState("");
  const [price, setPrice] = useState("");
  const [num2, setNum2] = useState("");
  const [spec, setSpec] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [building, setBuilding] = useState("");
  const [method, setMethod] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("");
  const [group, setGroup] = useState("");
  const [state, setState] = useState("");
  const [respondent, setRespondent] = useState("");
  const [qrcode, setQrcode] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          image,
          name,
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
        }),
      });

      if (res.ok) {
        router.push("/products");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg py-10 mb-8 bg-body rounded">
      <div className="flex justify-center items-center">
        <h1 className="font-bold py-10 text-xl">กรอกรายการครุภัณฑ์</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center mx-14">
          <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-12">
            <div className="sm:col-span-3">
              <label>Images</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="/images/1.jpg"
                  defaultValue="/images/1.jpg"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>รายการครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="รายการครุภัณฑ์"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label>หมายเลขครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNum1(e.target.value)}
                  value={num1}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="number"
                  placeholder="หมายเลขครุภัณฑ์"
                  defaultValue="หมายเลขครุภัณฑ์"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ราคา</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="number"
                  placeholder="ราคา"
                  defaultValue="ราคา"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>จำนวน</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNum2(e.target.value)}
                  value={num2}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="number"
                  placeholder="จำนวน"
                  defaultValue="จำนวน"
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label>คุณลักษณะครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setSpec(e.target.value)}
                  value={spec}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="คุณลักษณะครุภัณฑ์"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>วันที่ได้มา</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setDate1(e.target.value)}
                  value={date1}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="Date"
                  placeholder="วันที่ได้มา"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ปีที่จัดซื้อ</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setDate2(e.target.value)}
                  value={date2}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="Date"
                  placeholder="ปีที่จัดซื้อ"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>สถานที่ใช้งาน</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setBuilding(e.target.value)}
                  value={building}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="สถานที่ใช้งาน"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>วิธีการจัดหา</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setMethod(e.target.value)}
                  value={method}
                  type="text"
                  placeholder="วิธีการจัดหา"
                >
                  <option disabled selected>
                    เลือกรายการ
                  </option>
                  <option>สอบราคา</option>
                  <option>เฉพาะเจาะจง</option>
                  <option>e-bidding</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>งบประมาณ</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setBudget(e.target.value)}
                  value={budget}
                  type="text"
                  placeholder="งบประมาณ"
                >
                  <option disabled selected>
                    เลือกรายการ
                  </option>
                  <option>งบประมาณแผ่นดิน</option>
                  <option>งบประมาณเงินรายได้</option>
                  <option>งบประมาณอื่นๆ</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ประเภทครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="ประเภทครุภัณฑ์"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>กลุ่มครุภัณฑ์</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setGroup(e.target.value)}
                  value={group}
                  type="text"
                  placeholder="กลุ่มครุภัณฑ์"
                >
                  <option disabled selected>
                    เลือกรายการ
                  </option>
                  <option>ครุภัณฑ์ต่ำกว่าเกณฑ์</option>
                  <option>ครุภัณฑ์สูงกว่าเกณฑ์</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>สถานะ</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setState(e.target.value)}
                  value={state}
                  type="text"
                  placeholder="สถานะ"
                >
                  <option disabled selected>
                    เลือกรายการ
                  </option>
                  <option>ปกติ</option>
                  <option>ชำรุด</option>
                  <option>จำหน่าย</option>
                  <option>สูญหาย</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ผู้รับผิดชอบ</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setRespondent(e.target.value)}
                  value={respondent}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="ผู้รับผิดชอบ"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>QR Code</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setQrcode(e.target.value)}
                  value={qrcode}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                  placeholder="QR Code"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 mb-10">
          <Button
            variant="contained"
            type="submit"
            className="w-full max-w-xs font-semibold text-2sm"
            size="large"
            color="success"
          >
            บันทึกรายการครุภัณฑ์
          </Button>
        </div>
      </form>
    </div>
  );
}
