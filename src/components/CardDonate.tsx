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
      <div className="grid grid-cols-1 gap-24 ">
        
        <div className="md:w-full ">
          <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-8">
            Donasi Kemanusiaan
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            {data?.data.records.slice(0, 6).map((item, index) => (
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
            ))}
            </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-end mt-4">
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


      </div>
    </div>
  );
}
