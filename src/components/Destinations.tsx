"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


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
        <div className="md:w-full">
          <h1 className="font-bold text-xl text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-10">
            Destinasi Wisata
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 place-items-center">
            {destination?.data.records.slice(0, 4).map((item, index) => (
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
                    {item.name.length > 20 ? "..." : ""}
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
              my-6"
                onClick={() => (window.location.href = "/destination/list")}
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
