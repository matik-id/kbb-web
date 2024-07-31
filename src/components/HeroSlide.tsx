"use client";
import { Carousel } from "flowbite-react";
import NewSlider from "./NewSlider";

const HeroSlide = () => {
 
  return (
    <div className="w-full px-2 md:px-36 mt-5 md:flex gap-5 overflow-hidden">
      <div className="md:w-2/3 md:h-[500px] ">
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel pauseOnHover>
            <div>
              <img
                src="/image-1.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="hidden md:absolute bottom-0 left-0 md:flex items-center justify-start bg-[#1E8B43] mb-8 w-full ">
                <h1 className=" text-white px-4 py-2 ">
                  Gerakan Tanam Seribu Pohon yang di inisiasi oleh Komunitas
                  Kabubuhan Banjar Sadunia, yang di ikuti ...
                </h1>
              </div>
            </div>
            <div>
              <img
                src="/image-4.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="hidden md:absolute bottom-0 left-0 md:flex items-center justify-start bg-[#1E8B43] mb-8 w-full ">
                <h1 className=" text-white px-4 py-2 ">
                  Musyawarah Wilayah rutin serta pengankatan pengurus baru
                  kabubuhan banjar kalimantan utara dengan tema ...
                </h1>
              </div>
            </div>
            <div>
              <img
                src="/image-2.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
              <div className="hidden md:absolute bottom-0 left-0 md:flex items-center justify-start bg-[#1E8B43] mb-8 w-full ">
                <h1 className=" text-white px-4 py-2 ">
                  Kerajin Tas bubuhan banjar produksi UMKM binaan yang di
                  pamerkan di acara Gelar UMKM Bakti Kabubu..
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      
      <div className="bg-white h-full md:w-1/3 rounded-lg p-2 ">
        <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2">
          Kegiatan Rutin Bubuhan Banjar
        </h1>
        <div className="flex gap-5  rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 rounded-md " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>

        <div className="flex gap-5  rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 rounded-md" />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>

        <div className="flex gap-5  rounded-lg mt-5">
          <div>
            <img src="/kbb-articel.png" alt="" className="h-20 rounded-md " />
          </div>
          <div>
            <h1 className="font-bold">Pelatihan dan pelantikan Pengurus</h1>
            <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
          </div>
        </div>

        <div className="flex justify-end mt-10">
          <button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 ">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
