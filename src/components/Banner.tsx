import React from "react";

const Banner = () => {
  return (
    <div
      className=" px-3 mx-3 md:mx-36 md:px-36 py-5 bg-cover bg-center bg-no-repeat h-[300px] mb-5 text-white rounded-2xl overflow-hidden"
      style={{ backgroundImage: `url(kbb-donasi.jpeg)` }}
    >
      <div className="text-center md:text-left">
        <p className="text-xl mt-5 ">Donasi</p>
        <div className="md:flex justify-between mt-2">
          <div className="md:flex flex-col gap-5">
            <h1 className="font-bold text-2xl md:text-4xl space-y-4 w-[320px] md:w-[500px]  drop-shadow-xl">
              Ingin Berdonasi untuk Perkembangan Kabubuhan Banjar Sa-Dunia?
            </h1>
            <div className="md:mt-4 mt-8 ">
              <button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 mb-10">
                Klik disini
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/kbb-logo-white.png"
              alt=""
              className="drop-shadow-white drop-shadow-lg "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
