"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 py-2 md:px-36 bg-white border-b shadow-lg">
      <div>
        <img src="/kbb-logo-2.png" alt="" className="h-16 md:h-20 " />
      </div>
      <div className="hidden md:block">
        <ul className="text-black capitalize flex gap-8 font-semibold">
          <li>
            <a
              href="/"
              className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/post/list"
              className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
            >
              Berita
            </a>
          </li>
          <li>
            <a
              href="/destination/list"
              className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
            >
              Wisata
            </a>
          </li>
          <li>
            <a
              href="/product/list"
              className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
            >
              Produk
            </a>
          </li>
          <li>
            <a
              href="/donation/list"
              className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
            >
              Donasi
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={() => setOpen(!open)}>
          <FaBars />
        </button>
        {open && (
          <div className="fixed top-0 left-0 w-full h-[300px] bg-white  flex flex-col justify-center items-center ">
            <div className="w-full flex justify-between items-center px-6 ">
              <img src="/kbb-logo-2.png" alt="" className="h-16 md:h-20 " />
              <button
                onClick={() => setOpen(false)}
                className=" text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="text-black capitalize flex flex-col gap-4 font-semibold text-center text-lg">
              <li>
                <a
                  href="/"
                  className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
                  onClick={() => setOpen(false)}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/post/list"
                  className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
                  onClick={() => setOpen(false)}
                >
                  Berita
                </a>
              </li>
              <li>
                <a
                  href="/destination/list"
                  className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
                  onClick={() => setOpen(false)}
                >
                  Wisata
                </a>
              </li>
              <li>
                <a
                  href="/product/list"
                  className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
                  onClick={() => setOpen(false)}
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="/donation/list"
                  className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500"
                  onClick={() => setOpen(false)}
                >
                  Donasi
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
