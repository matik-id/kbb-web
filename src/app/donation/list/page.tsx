"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb, Progress } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiSolidMap } from "react-icons/bi";

const page = () => {
  const router = useRouter();
  const [data, setData] = useState<ApiResponseDonations>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}donation?page=1&limit=10&sort_by=-date_start`,
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
      <div className=" px-4 md:px-36 bg-white flex flex-col mb-10">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/destination/list">Donasi Kemanusiaan</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h1 className="font-bold text-3xl mt-5 text-[#000000] border-l-8 border-[#1E8B43] pl-2 mb-10 ">Donasi Kemanusiaan </h1>
        </div>

        <div className="mt-3 min-h-0 mb-48">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-center justify-between ">
        {/* donation card */}
        {data?.data.records.map((item, index) => (
          <div key={index} className="w-full md:w-[350px] h-[400px] shadow-xl rounded-lg overflow-hidden cursor-pointer" 
          onClick={() => router.push(`/donation/view/${decodeURI(item.title)}/${item.id}`)}>
            <img src={item.image} alt="" className="h-[200px] w-full  object-cover hover:scale-105 transition-all duration-500 " />
            <p className=" p-1 flex items-center bg-[#1E8B43] text-white font-bold rounded-b-lg"><BiSolidMap/> {item.location}</p>
            <div className="pt-2 px-4">
            <p className="font-bold hover:text-[#1E8B43]">{item.title}</p>
            <p className="mb-2">Dana terkumpul : Rp {item.balance_collected.toLocaleString('id-ID')}</p>
            <Progress progress={(item.balance_collected / item.target_balance) * 100} color="green" />
            </div>
          </div>
        ))}
      </div>
        </div>
      </div>

      <Footer  />
    </div>
  );
};

export default page;
