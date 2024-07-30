import React from 'react'
import Marquee from 'react-fast-marquee'

const Gallery = () => {
  return (
    <div className='px-4 md:px-36 mt-5 h-[300px] overflow-hidden  '>
        <h1 className="font-bold text-[#1E8B43] border-l-8 border-[#1E8B43] pl-2 mb-4">
                Galeri Foto dan Video 
        </h1>
        <div className='flex overflow-hidden'>
        <Marquee >
            <img src="/image-1.jpg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src="/image-2.jpg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src="/image-3.jpg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src="/image-4.jpg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src="/image-5.jpg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            <img src="/image-6.jpeg" alt="" className="h-[200px] w-[300px]  object-cover hover:scale-105 transition-all duration-500" />
            </Marquee>
        </div>
    </div>
  )
}

export default Gallery