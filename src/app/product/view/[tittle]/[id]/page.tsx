"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb } from "flowbite-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import {
  FaLocationArrow,
  FaMap,
  FaPhone,
  FaStore,
  FaUser,
  FaUserAlt,
  FaUserCircle,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const page = () => {
  const [destination, setDestination] = useState<DataDetail>();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}product/ ${id}`,
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
        <div className="flex gap-10 mt-10 mb-96">
          <div>
            <div>
              <img
                src={destination?.data.thumbnail}
                alt=""
                className="w-[405px] h-[400px] object-cover hover:border-2 border-[#1E8B43] cursor-pointer"
              />
            </div>
            <div className="grid grid-cols-3 ">
              <img
                src={destination?.data.image1}
                alt=""
                className="w-[135px] h-[135px] object-cover hover:border-2 border-[#1E8B43] cursor-pointer"
              />
              <img
                src={destination?.data.image2}
                alt=""
                className="w-[135px] h-[135px] object-cover hover:border-2 border-[#1E8B43] cursor-pointer "
              />
              <img
                src={destination?.data.image3}
                alt=""
                className="w-[135px] h-[135px] object-cover hover:border-2 border-[#1E8B43] cursor-pointer"
              />
            </div>
          </div>
          <div className="h-full flex flex-col gap-6">
            <div>
              <h1 className="font-bold text-4xl text-[#000000]">
                {destination?.data.title}
              </h1>
              <p className="font-bold text-3xl text-[#1E8B43] mt-2 mb-2">
                Rp. {destination?.data.price}
              </p>
              {destination?.data.price_promo && (
                <p className="flex text-gray-400 gap-2">
                  <p>
                    {(destination.data.price / destination.data.price_promo) *
                      100}
                    %
                  </p>
                  <del>Rp. {destination.data.price_promo}</del>{" "}
                </p>
              )}
            </div>
            <div className="flex items-center gap-20 justify-around">
              <div className="flex items-center gap-2">
                <div>
                  <FaUser className="text-[#1E8B43] w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm ">Penjual</p>
                  <p className=" text-lg flex items-center gap-1">
                    {destination?.data.owner}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaLocationDot className="text-[#1E8B43] w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm ">Lokasi</p>
                  <p className=" text-lg flex items-center gap-1">
                    {destination?.data.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaWhatsapp className="text-[#1E8B43] w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm ">Nomor Telepon</p>
                  <p className=" text-lg flex items-center gap-1">
                    {destination?.data.phone}
                  </p>
                </div>
              </div>

              
            </div>
            <div>
              <h1 className="font-bold text-xl text-[#000000] mt-5">
                Deskripsi
              </h1>
              <p>{destination?.data.content}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default page;