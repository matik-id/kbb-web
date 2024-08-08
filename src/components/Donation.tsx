"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Progress } from "flowbite-react";
import { BiSolidMap } from "react-icons/bi";
import { useRouter } from "next/navigation";

// Import Swiper styles




// import required modules

const Donation = () => {
  const [data, setData] = useState<ApiResponseDonations>();
  const [destination, setDestination] = useState<ApiResponseDestinations>();
  const router = useRouter();

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
    <div className="px-4 md:px-36 md:py-10 mt-5 mb-4 overflow-hidden ">
      <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-10">
        Donasi Kemanusiaan
      </h1>

     

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {data?.data.records.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="w-full md:w-[350px] h-[400px] shadow-xl rounded-lg overflow-hidden cursor-pointer "
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
        <div className="flex flex-col gap-5">
            <div className="flex justify-end mt-4">
              <button
                className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 
              "
                onClick={() => (window.location.href = "/donation/list")}
              >
                Selengkapnya
              </button>
            </div>
          </div>
      

      
    </div>
  );
};

export default Donation;
