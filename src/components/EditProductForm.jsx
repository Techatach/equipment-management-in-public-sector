"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  id,
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
}) {
  const [newImage, setNewImage] = useState(image);
  const [newName, setNewTitle] = useState(name);
  const [newNum1, setNewNum1] = useState(num1);
  const [newPrice, setNewPrice] = useState(price);
  const [newNum2, setNewNum2] = useState(num2);
  const [newSpec, setNewSpec] = useState(spec);
  const [newDate1, setNewDate1] = useState(date1);
  const [newDate2, setNewDate2] = useState(date2);
  const [newBuilding, setNewBuilding] = useState(building);
  const [newMethod, setNewMethod] = useState(method);
  const [newBudget, setNewBudget] = useState(budget);
  const [newCategory, setNewCategory] = useState(category);
  const [newGroup, setNewGroup] = useState(group);
  const [newState, setNewState] = useState(state);
  const [newRespondent, setNewRespondent] = useState(respondent);
  const [newQrcode, setNewQrcode] = useState(qrcode);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newImage,
          newName,
          newNum1,
          newPrice,
          newNum2,
          newSpec,
          newDate1,
          newDate2,
          newBuilding,
          newMethod,
          newBudget,
          newCategory,
          newGroup,
          newState,
          newRespondent,
          newQrcode,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg py-10 mb-8 bg-body rounded mx-16">
      <div className="flex justify-center items-center">
        <h1 className="font-bold py-10 text-xl">การแก้ไขครุภัณฑ์</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center">
          <div className=" grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-12">
            {/* <form onSubmit={handleSubmit} className="flex flex-col gap-3"> */}
            <div className="sm:col-span-3">
              <label>Images</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewImage(e.target.value)}
                  value={newImage}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>รายการครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewTitle(e.target.value)}
                  value={newName}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>หมายเลขครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewNum1(e.target.value)}
                  value={newNum1}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ราคา</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewPrice(e.target.value)}
                  value={newPrice}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>จำนวน</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewNum2(e.target.value)}
                  value={newNum2}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label>คุณลักษณะครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewSpec(e.target.value)}
                  value={newSpec}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>วันที่ได้มา</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewDate1(e.target.value)}
                  value={newDate1}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="Date"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>ปีที่จัดซื้อ</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewDate2(e.target.value)}
                  value={newDate2}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="Date"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>สถานที่ใช้งาน</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewBuilding(e.target.value)}
                  value={newBuilding}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>วิธีการจัดหา</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setNewMethod(e.target.value)}
                  value={newMethod}
                  type="text"
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
              <div className="mt-2"></div>

              <select
                className="select select-info w-full max-w-xs"
                onChange={(e) => setNewBudget(e.target.value)}
                value={newBudget}
                type="text"
              >
                <option disabled selected>
                  เลือกรายการ
                </option>
                <option>งบประมาณแผ่นดิน</option>
                <option>งบประมาณเงินรายได้</option>
                <option>งบประมาณอื่นๆ</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label>ประเภทครุภัณฑ์</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewCategory(e.target.value)}
                  value={newCategory}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>กลุ่มครุภัณฑ์</label>
              <div className="mt-2">
                <select
                  className="select select-info w-full max-w-xs"
                  onChange={(e) => setNewGroup(e.target.value)}
                  value={newGroup}
                  type="text"
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
                  onChange={(e) => setNewState(e.target.value)}
                  value={newState}
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
                  onChange={(e) => setNewRespondent(e.target.value)}
                  value={newRespondent}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label>QR Code</label>
              <div className="mt-2">
                <input
                  onChange={(e) => setNewQrcode(e.target.value)}
                  value={newQrcode}
                  className="input input-bordered input-accent w-full max-w-xs"
                  type="text"
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
            บันทึกการแก้ไขครุภัณฑ์
          </Button>
        </div>
      </form>
    </div>
  );
}
