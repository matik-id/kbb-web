"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { BsEye } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BiSolidMap } from "react-icons/bi";
import { Progress } from "flowbite-react";


export default function CardDonate() {
  const router = useRouter();

  const [data, setData] = useState<ApiResponseProducts>();

  const [destination, setDestination] = useState<ApiResponseDonations>();

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
          `${process.env.NEXT_PUBLIC_API_URL}donation?page=1&limit=10&sort_by=-date_start`,
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
      <div className="grid grid-cols-1 gap-8 ">       
        <div className="md:w-full ">
          <h1 className="font-bold text-xl text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 ">
            Donasi Kemanusiaan
          </h1>         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {destination?.data.records.slice(0, 3).map((item, index) => (
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
            <div className="flex justify-end ">
              <button
                className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 
              "
                onClick={() => (window.location.href = "/product/list")}
              >
                Selengkapnya
              </button>
            </div>
          </div>


      </div>
    </div>
  );
}
