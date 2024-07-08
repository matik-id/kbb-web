"use client";
import Carousel from "reactjs-nextjs-carousel";

const HeroSlide = () => {
  const slides = [
    "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
    "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s",
    "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
  ];
  return (
    <div className="w-full px-36 mt-5 flex gap-5">
      <div>
        <Carousel
          slides={slides}
          autoSlide={true}
          carouselWidth={"50rem"}
          effect="fade"
          autoSlideInterval={5000}
        />
      </div>
      <div className="bg-white h-full w-1/3 rounded-lg p-5 shadow-md">
        <h1 className="font-bold text-[#1E8B43]">
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
      </div>
    </div>
  );
};

export default HeroSlide;
