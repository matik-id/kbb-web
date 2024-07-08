import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-36  bg-#FFFFFF border-b shadow-lg'>
        <div>
        <img src="/kbb-logo-2.png" alt="" className='h-20 ' />
        </div>
        <div className="hidden md:block">
                <ul className="text-black capitalize flex gap-8 font-semibold">
                    <li><a href="" className="hover:text-[#84CC16] hover:underline underline-offset-4 transition-all duration-500" >beranda</a></li>
                     <li><a href="" className="hover:text-[#84CC16]" >Berita</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >Kegiatan</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >event</a></li>
                    <li><a href="" className="hover:text-[#84CC16]" >Kontak</a></li>

                </ul>
            </div>
    </div>
  )
}

export default Navbar