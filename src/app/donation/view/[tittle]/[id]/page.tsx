"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const page = () => {
  const [destination, setDestination] = useState<PostDetail>();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}donation/ ${id}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
            },
          }
        );
        setDestination(res.data);
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
      <div className=" px-4 md:px-36 bg-white flex flex-col">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/destination/list">Wisata</Breadcrumb.Item>
          <Breadcrumb.Item href="/destination/list">
            {destination?.data.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex gap-5 mt-10 mb-96">
          <div className="text-center flex flex-col items-center w-3/4 ">
            <h1 className="font-bold md:text-4xl mt-5 text-[#000000] mb-2 ">
              {destination?.data.title}
            </h1>
            <p className="mt-2 mb-10 text-[#1E8B43] ">
              {destination?.data.created_at &&
                new Intl.DateTimeFormat("id-ID", {
                  weekday: "short",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(destination?.data.created_at))}
            </p>
            <img
              src={destination?.data.image}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg  mb-3"
            />
            <div className="text-justify mt-10">
              <p className="text-justify">{destination?.data.content}</p>
            </div>
          </div>
          <div className="text-center w-1/4 mx-auto bg-black">
            <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
              Produk UMKM
            </h1>
          </div>
        </div>
      </div>
      <div >
        <Footer />
      </div>
    </div>
  );
};

export default page;
