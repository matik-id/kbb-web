"use client";
import axios from "axios";
import { Carousel } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [post, setPosts] = useState<ApiResponsePosts>();

  const router = useRouter();


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
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching donations:", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full px-2 md:px-36 mt-5 md:flex gap-5 overflow-hidden">
      <div className="md:w-2/3 md:h-[500px] ">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">   
          <Carousel pauseOnHover leftControl={<></>} indicators={false}>
            {post?.data.records.map((item, index) => (
              <>
                <div key={index}>
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                  <div className="hidden md:absolute bottom-0 left-0 md:flex items-center justify-start bg-[#1E8B43] mb-8 w-full ">
                    <h1 className=" text-white px-4 py-2 ">{item.title}</h1>
                  </div>
                </div>
              </>
            ))}
          </Carousel>
        </div>
      </div>
      
      <div className=" h-full md:w-1/3 rounded-lg p-2  md:p-5  ">
        <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2">
          Berita Bubuhan Banjar
        </h1>
        {post?.data.records.slice(0, 3).map((item, index) => (
          <>
            <div key={index} className="flex gap-5  rounded-lg mt-5 cursor-pointer hover:scale-105 transition-all duration-500 hover:bg-gray-200 hover:shadow-lg hover:p-2"
            onClick={() => router.push(`/post/view/${decodeURI(item.title)}/${item.id}`)}>
              <div className="w-[200px] h-[80px] bg-white">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md "
                />
              </div>
              <div className="p-2 w-full">
                <h1 className="font-bold">{item.title.length > 34 ? `${item.title.slice(0, 20)}...` : item.title}</h1>
                <p className="text-gray-500 text-sm">
                  {new Intl.DateTimeFormat('id-ID', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  }).format(new Date(item.created_at))}
                </p>
              </div>
            </div>
          </>
        ))}
        <div className="flex justify-end mt-10">
          <button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/70 transition-all duration-500 "
          onClick={() => window.location.href = "/post/list"}>
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
