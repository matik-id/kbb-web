import NewSlider from "./NewSlider";

export default function ImageCarousel() {
  const slides: string[] = [
    "https://cf.shopee.co.id/file/9c1328fd8eea5734e7a6efc99b289080",
    "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/radartarakan/2018/10/unik-rasanya-sambal-banjar-bikin-ketagihan.JPG",
  ];

  return (
    <div className="px-36 overflow-hidden ">
      <div className="flex items-center justify-between">
        <div className="w-2/3">
          <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-10">
            Berita Banjar
          </h1>
          <div className="flex flex-col gap-5 ">
            <div className="grid grid-cols-3 ">
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-1.jpg"
                    alt=""
                    className="h-[200px] w-[200px] object-cover hover:scale-105 transition-all duration-500 grayscale-0 "
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Gerakan Tanam Seribu Pohon ...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-2.jpg"
                    alt=""
                    className="h-[200px] w-[200px]  object-cover hover:scale-105 transition-all duration-500 grayscale-0"
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Produk UMKM unggulan di tampilkan ...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-3.jpg"
                    alt=""
                    className="h-[200px] w-[200px]  object-cover hover:scale-105 transition-all duration-500  grayscale-0"
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Lomba tari banjar di ikuti oleh berba...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-4.jpg"
                    alt=""
                    className="h-[200px] w-[200px]  object-cover hover:scale-105 transition-all duration-500 grayscale-0"
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Musyawarah dan Pelantikan Pengu...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-5.jpg"
                    alt=""
                    className="h-[200px] w-[200px]  object-cover hover:scale-105 transition-all duration-500 grayscale-0"
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Family Gathering Banjar diikuti oleh ...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
              <div>
                <div className="overflow-hidden">
                  <img
                    src="/image-6.jpeg"
                    alt=""
                    className="h-[200px] w-[200px]  object-cover hover:scale-105 transition-all duration-500 grayscale-0"
                  />
                </div>
                <p className="font-bold hover:text-[#1E8B43]">
                  Pelatihan dan pelantikan Pengurus ...
                </p>
                <p className="text-gray-500 text-sm">Jum'at, 10 Agustus 2022</p>
              </div>
            </div>
            <div className="flex justify-end pr-10">
              <button className="bg-[#84CC16] text-white px-5 py-2 rounded-lg hover:bg-[#84CC16]/90 transition-all duration-500 mb-10">
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
        {/* <div>
          <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
            Produk UMKM Banjar
          </h1>
          <div className="w-[500px] mt-5">
            <div className="max-w-lg">
              <NewSlider slides={slides} />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
