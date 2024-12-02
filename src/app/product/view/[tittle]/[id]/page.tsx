"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb } from "flowbite-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
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
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import router from "next/router";
import { BsEye } from "react-icons/bs";
const page = () => {
  const [destination, setDestination] = useState<DataDetail>();
  const [data, setData] = useState<ApiResponseProducts>();

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const { id } = useParams();

  const router = useRouter();

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
    <div className="overflow-hidden">
      <nav className="sticky top-0 z-50 bg-[#FFFFFF]">
        <Navbar />
      </nav>
      <div className=" px-4 md:px-36 bg-white flex flex-col">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/product/list">Product</Breadcrumb.Item>
          <Breadcrumb.Item href="/product/list">
            {destination?.data.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="md:flex gap-10 mt-10 mb-96">
          <div className="md:w-[451px] md:h-[448px]">
            <Swiper
              loop={true}
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src={destination?.data.thumbnail} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image1} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image2} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image3} className="object-cover" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={destination?.data.thumbnail} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image1} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image2} className="object-cover" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={destination?.data.image3} className="object-cover"/>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="h-full flex flex-col gap-6">
            <div>
              <h1 className="font-bold text-2xl md:text-4xl text-[#000000]">
                {destination?.data.title}
              </h1>
              <p className="font-bold text-xl md:text-3xl text-[#1E8B43] mt-2 mb-2">
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
            <div className="flex flex-col gap-4 md:w-[500px] bg-[#F9F9F9] p-4 rounded-md">
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
            <div className="mb-10">
              <h1 className="font-bold text-xl text-[#000000] mt-5 ">
                Deskripsi
              </h1>
              <div
                className="text-justify content-wrapper"
                dangerouslySetInnerHTML={{
                  __html: destination?.data.content || ""
                }}
              />
            </div>
          </div>
          <div className="text-left md:w-1/4 md:ml-10 ">
            <div>
              <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
                Produk Lainnya
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
                  onClick={() => router.push(`/product/list`)}
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
                      {item.title.length > 15
                        ? `${item.title.slice(0, 15)}...`
                        : item.title}
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
                      onClick={() => router.push(`/product/list`)}
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
