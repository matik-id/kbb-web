"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidMap } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const page = () => {
  const router = useRouter();
  const [data,setData] = useState<ApiResponseProducts>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}product?sort_by=-created_at`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            },
          }
        );
        setData(res.data);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };
    fetchData();
  }, []);



  return (
    <div>
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]">
        <Navbar />
      </nav>
      <div className=" px-4 md:px-36 bg-white flex flex-col mb-10 ">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/product/list">Produk</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h1 className="font-bold text-3xl mt-5 text-[#000000] border-l-8 border-[#1E8B43] pl-2 mb-10 ">Produk UMKM </h1>
        </div>

        <div className="mt-3 min-h-0 mb-48">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 md:gap-10">
            {data?.data.records.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500  gap-3 w-[188px] h-[352px] 
                hover:cursor-pointer" onClick={() => router.push(`/product/view/${decodeURI(item.title)}/${item.id}`)}
              >
                <div className="overflow-hidden rounded-lg object-cover h-[189px]">
                <img src={item.thumbnail} alt="" className="h-[189px] w-[188px] object-cover hover:scale-105 transition-all duration-500 " />
                </div>
                <div className="p-2">
                <h1 className=" text-[#1E8B43] mb-2 font-bold">{item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title }</h1>
                <p className=" text-sm font-bold mb-1">Rp {item.price.toLocaleString('id-ID')}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                  <FaUserAlt  />
                  {item.owner.slice(0, 10)}
                  {item.owner.length > 10 ? '...' : ''}
                </p>
                {/* <p className="text-gray-500 text-sm flex items-center gap-1 "><FiPhone />{item.phone.slice(0, 5) + 'xxx'}</p> */}
                </div>
                <div className="flex justify-between p-2 items-center">
                  <p className="text-gray-500 text-sm flex items-center gap-1"><BsEye />{item.viewer}</p>
                <button className="bg-[#84CC16] text-white px-2 py-1 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 ">
                  Lihat
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
          
      <Footer />
    </div>
  );
};

export default page;
