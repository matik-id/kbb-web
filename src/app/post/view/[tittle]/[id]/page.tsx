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
  const [destination, setDestination] = useState<PostDetail>();
  const [data, setData] = useState<ApiResponsePosts>();
  const router = useRouter();

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}post/ ${id}`,
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
          `${process.env.NEXT_PUBLIC_API_URL}post?sort_by=-created_at&type=activity`,
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
        <Breadcrumb className="mt-5 font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/post/list">Berita</Breadcrumb.Item>
          <Breadcrumb.Item href="/post/list" className="hidden">
            {destination?.data.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="flex flex-col md:flex-row gap-5 mt-10 mb-96 ">
          <div className="text-center flex flex-col items-center md:w-3/4  ">
            <h1 className="font-bold md:text-4xl mt-5 text-[#000000] mb-2 ">
              {destination?.data.title}
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
              src={destination?.data.image}
              alt=""
              className="h-[200px] md:h-[400px] w-full object-cover rounded-lg  mb-3 shadow-lg"
            />
            <div className="text-justify mt-10">
              <p className="text-justify">{destination?.data.content}</p>
            </div>
          </div>
          <div className="text-left mb-10 md:w-1/4 md:ml-10 ">
            <div>
              <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
                Berita Lainnya
              </h1>
            </div>
            {data?.data.records
              .sort(() => Math.random() - 0.5)
              .slice(0, 2)
              .map((item, index) => (
                <div
                  key={index}
                  className=" place-items-center hover:shadow-2xl hover:scale-105 transition-all duration-500  gap-10 w-[188px]  mb-6
                cursor-pointer"
                  onClick={() => router.push(`/product/list`)}
                >
                  <div
                    key={index}
                    className="gap-5 items-center mb-5  transition-all duration-500 cursor-pointer  
              hover:text-[#1E8B43] hover:bg-gray-200"
                    onClick={() =>
                      router.push(
                        `/post/view/${decodeURI(item.title)}/${item.id}`
                      )
                    }
                  >
                    <div className="overflow-hidden ">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[157px] w-[212px] object-cover rounded-lg hover:scale-105 transition-all duration-500 grayscale-0 mb-3"
                      />
                    </div>
                    <div>
                      <p className="font-bold hover:text-[#1E8B43] text-sm mb-2">
                        {item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}
                      </p>

                      <p className="text-gray-500 text-sm">
                        {new Intl.DateTimeFormat("id-ID", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }).format(new Date(item.created_at))}
                      </p>
                    </div>
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
