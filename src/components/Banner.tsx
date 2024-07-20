import React from "react";

const Banner = () => {
  return (
    <div
      className="mx-36 px-36 py-5 bg-cover bg-center bg-no-repeat h-[300px] mb-5 text-white rounded-2xl"
      style={{ backgroundImage: `url(kbb-donasi.jpeg)` }}
    >
      <div>
        <p className="text-xl mt-5 ">Donasi</p>
        <div className="flex justify-between mt-2">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-4xl space-y-4 w-[500px]  drop-shadow-xl">
              Ingin Berdonasi untuk Perkembangan Kabubuhan Banjar Sa-Dunia?
            </h1>
            <div className="mt-4">
              <button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 mb-10">
                Klik disini
              </button>
            </div>
          </div>
          <div>
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
