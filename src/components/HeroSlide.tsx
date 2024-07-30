"use client";
import Carousel from "reactjs-nextjs-carousel";
import NewSlider from "./NewSlider";

const HeroSlide = () => {
  const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
  ];
  return (
    <div className="w-full px-2 md:px-36 mt-5  md:flex gap-5 overflow-hidden">
      <div className="md:w-2/3 h-[100px]">
        <NewSlider slides={slides} autoSlide />
      </div>
      <div className="bg-white h-full md:w-1/3 rounded-lg p-5 shadow-md">
        <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2">
          Kegiatan Rutin Bubuhan Banjar
        </h1>
        <div className="flex gap-5 border-2 rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>

        <div className="flex gap-5 border-2 rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>
        <div className="flex gap-5 border-2 rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>
        <div 
                className="flex justify-end mt-10"><button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 mb-10">
            Selengkapnya 
        </button></div>
      </div>
    </div>
  );
};

export default HeroSlide;
