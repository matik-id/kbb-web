"use client";

import img1 from "https://i.ibb.co/ncrXc2V/1.png";
import img2 from "https://i.ibb.co/B3s7v4h/2.png";
import img3 from "https://i.ibb.co/ncrXc2V/1.png";
import { Button, Carousel, Progress } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { BsEye, BsFilePerson } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

export default function Destinations() {
  const router = useRouter();

  const [data, setData] = useState<ApiResponseProducts>();

  const [destination, setDestination] = useState<ApiResponseDestinations>();

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}destination?sort_by=-created_at`,
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
    <div className="px-4 md:px-36 md:py-10 overflow-hidden bg-white ">
      <div className="grid grid-cols-1 gap-24 md:flex items-center justify-between">
        <div className="md:w-3/4">
          <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-10">
            Destinasi Wisata
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {destination?.data.records.slice(0, 3).map((item, index) => (
              <>
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/destination/view/${decodeURI(item.name)}/${item.id}`
                    )
                  }
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="h-[200px] w-[300px] object-cover rounded-lg hover:scale-105 transition-all duration-500 grayscale-0 mb-3"
                    />
                  </div>
                  <p className="font-bold hover:text-[#1E8B43]">
                    {item.name.slice(0, 10)}
                    {item.name.length > 10 ? "..." : ""}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {new Intl.DateTimeFormat("id-ID", {
                      weekday: "short",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(item.created_at))}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 
              "
                onClick={() => (window.location.href = "/destination/list")}
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/4 ">
          <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
            Produk UMKM
          </h1>
          <Swiper
            slidesPerView={2}
            spaceBetween={150}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination,  Autoplay]}
            className="mySwiper"
            style={{ paddingLeft: "44px", paddingBottom: "36px" }}
          >
            {data?.data.records.slice(0, 5).map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500  gap-3 w-[188px] h-[352px] 
                cursor-pointer"
                  onClick={() =>
                    router.push(
                      `/product/list`
                    )
                  }
                >
                  <div className="overflow-hidden rounded-lg object-cover h-[189px]">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
