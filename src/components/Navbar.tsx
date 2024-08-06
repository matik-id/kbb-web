import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-2 md:px-36   bg-#FFFFFF border-b shadow-lg">
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
            <a href="/post/list" className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500">
              Berita
            </a>
          </li>
          <li>
            <a href="/destination/list" className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500">
              Wisata
            </a>
          </li>
          <li>
            <a href="/product/list" className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500">
              Produk
            </a>
          </li>
          <li>
            <a href="/donation/list" className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500">
              Donasi
            </a>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
