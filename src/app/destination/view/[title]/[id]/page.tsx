"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb } from "flowbite-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BsEye } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
const page = () => {
  const [destination, setDestination] = useState<DestinationData>();
  const router = useRouter();
  const [data, setData] = useState<ApiResponseProducts>();



  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}destination/ ${id}`,
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
      <div className=" px-4 md:px-36 bg-white flex flex-col">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/destination/list">Wisata</Breadcrumb.Item>
          <Breadcrumb.Item href="/destination/list">
            {destination?.data.name}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex gap-5 mt-10 mb-96">
          <div className="text-center flex flex-col items-center w-3/4 ">
            <h1 className="font-bold md:text-4xl mt-5 text-[#000000] mb-2 ">
              {destination?.data.name}
            </h1>
            <p className="mt-2 mb-10 text-[#1E8B43] ">
              {destination?.data.created_at &&
                new Intl.DateTimeFormat("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(destination?.data.created_at))}
            </p>
            <img
              src={destination?.data.thumbnail}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg  mb-3"
            />
            <div className="text-justify mt-10">
              <p className="text-justify">{destination?.data.content}</p>
            </div>

        <div className='mt-24 h-[300px] overflow-hidden '>
        <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4 text-left">
        Galeri Foto dan Video 
        </h1>
        <div className='flex overflow-hidden'>
        <Marquee >
            <img src={destination?.data.image1} alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src={destination?.data.image2} alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src={destination?.data.image3} alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <div>
                <video src={destination?.data.video}></video>
            </div>
            </Marquee>
        </div>
        
    </div>
          </div>
          <div className="text-left w-1/4 ml-10 ">
          <div>
            <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
              Produk UMKM Pilihan
            </h1>
            </div>
            {data?.data.records
              .sort(() => Math.random() - 0.5)
              .slice(0, 2)
              .map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500  gap-3 w-[188px] h-[352px] mb-6
                cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/product/list`
                    )
                  }
                >
                  <div className="overflow-hidden rounded-lg object-cover h-[189px] ">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="h-[189px] w-[188px] object-cover hover:scale-105 transition-all duration-500 "
                    />
                  </div>
                  <div className="p-2">
                    <h1 className=" text-[#1E8B43] mb-2 font-bold">
                      {item.title.length > 15 ? `${item.title.slice(0, 15)}...` : item.title }
                    </h1>
                    <p className=" text-sm font-bold mb-1">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
                      <FaUserAlt />
                      {item.owner.slice(0, 10)}
                      {item.owner.length > 10 ? "..." : ""}
                    </p>
                    
                  </div>
                  <div className="flex justify-between p-2 items-center">
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                      <BsEye />
                      {item.viewer}
                    </p>
                    <button
                      className="bg-[#84CC16] text-white px-2 py-1 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 "
                      onClick={() =>
                        router.push(
                          `/product/list`
                        )
                      }
                    >
                      Lihat
                    </button>
                  </div>
                </div>
              ))}
          </div>
          
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
