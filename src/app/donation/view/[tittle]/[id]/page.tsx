"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { Breadcrumb, Progress } from "flowbite-react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { BiSolidMap } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaMap, FaUserAlt } from "react-icons/fa";
import { FaMapLocation, FaMapLocationDot } from "react-icons/fa6";
const page = () => {
  const [destination, setDestination] = useState<donationdetail>();

  const router = useRouter();

  const { id } = useParams();
  const [data, setData] = useState<ApiResponseDonations>();

  const calculateRemainingDays = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
  };
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
      <div className=" px-4 md:px-36 bg-white  md:flex flex-col">
        <Breadcrumb className="mt-5  font-bold text-[#1E8B43]">
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/donation/list">Donasi</Breadcrumb.Item>
          <Breadcrumb.Item href="/donation/list">
            {destination?.data.title}
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="md:flex gap-5 mt-10 mb-96">
          <div className="text-center flex flex-col items-center w-3/4 ">
            <h1 className="font-bold md:text-4xl mt-5 text-[#000000] mb-2 ">
              {destination?.data.title}
            </h1>
            <p className="mt-2  text-[#1E8B43] ">
              {destination?.data.created_at &&
                new Intl.DateTimeFormat("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(destination?.data.created_at))}
            </p>
            <p className="mb-10 text-gray-500 flex items-center gap-2"><BiSolidMap />{destination?.data.location}</p>
            <img
              src={destination?.data.image}
              alt=""
              className="h-[400px] w-full object-cover rounded-lg  mb-3"
            />
            <div className="text-justify mt-10">
              <p className="text-justify">{destination?.data.content}</p>
            </div>
            <div className="mt-10 text-left w-[400px] flex flex-col gap-2 bg-gray-200 p-5 rounded">
            {destination?.data &&(
              <>
             <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
                Info Donasi 
              </h1>
              <p><p>Sisa Hari : <b>{destination ? calculateRemainingDays(destination.data.date_start, destination.data.date_end) + " hari tersisa" : null}</b>  </p></p>
              <p>Target Donasi : <b>Rp {destination?.data.target_balance.toLocaleString('id-ID')}</b></p>
              <p>Saldo Terkumpul : <b>Rp {destination?.data.balance_collected.toLocaleString('id-ID')}</b></p>
              <Progress
                progress={
                  (destination?.data.balance_collected  /
                    destination?.data.target_balance) *
                  100
                }
                color="green"
                size="xl"
                progressLabelPosition="inside"
                textLabelPosition="outside"
              />
              </>
              )}
            </div>
          </div>
          <div className="text-left w-1/4 ml-10 ">
            <div>
              <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
                Donasi Lainnya
              </h1>
            </div>
            {data?.data.records
              .sort(() => Math.random() - 0.5)
              .slice(0, 2)
              .map((item, index) => (

                <div
            key={index}
            className="w-full md:w-[350px] h-[400px] shadow-xl rounded-lg overflow-hidden cursor-pointer mb-10"
            onClick={() =>
              router.push(`/donation/view/${decodeURI(item.title)}/${item.id}`)
            }
          >
            <img
              src={item.image}
              alt=""
              className="h-[200px] w-full  object-cover hover:scale-105 transition-all duration-500 "
            />
            <p className=" p-1 flex items-center bg-[#1E8B43] text-white font-bold rounded-b-lg">
              <BiSolidMap /> {item.location}
            </p>
            <div className="pt-2 px-4">
              <p className="font-bold hover:text-[#1E8B43]">{item.title}</p>
              <p className="text-sm text-gray-500 mb-2">{item.content.length > 29 ? item.content.slice(0, 29) + "..." : item.content}</p>
              <p className="mb-2">
                Dana terkumpul : Rp{" "}
                {item.balance_collected.toLocaleString("id-ID")}
              </p>
              <Progress
                progress={(item.balance_collected / item.target_balance) * 100}
                color="green"
              />
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
