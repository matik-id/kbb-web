import Marquee from "react-fast-marquee";

const RunningText = () => {
  return (
    <div className="px-36 pt-2 ">
      <div className="flex justify-between items-center border-2 shadow-lg h-12 rounded-lg">
        <div className=" w-40 bg-[#1E8B43]  h-12  text-white font-bold flex justify-center items-center
         hover:w-60 transition-all duration-500  ">Berita Terupdate  </div>
        <Marquee >
          <p className= "text-black cursor-pointer hover:text-[#84CC16]">Berita Banjar Terbaru bisa di klik   </p>  
          <span>🔥</span>
          <p className= "text-black cursor-pointer hover:text-[#84CC16]">Berita Banjar nomor tiga bikin tercenngan </p>  
          <span>🔥</span>
          <p className= "text-black cursor-pointer hover:text-[#84CC16]">Berita Banjar Terfavorit </p>  
          <span>🔥</span>
        </Marquee>
      </div>
    </div>
  );
};

export default RunningText;
