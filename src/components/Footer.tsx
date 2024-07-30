import React from 'react'
import { BiLogoWhatsapp, BiMailSend, BiSolidMap } from 'react-icons/bi'

const Footer = () => {
  return (
    <div className="bg-[#1E8B43] md:h-[250px] md:px-36 py-5 px-8 text-white">
      <div className="md:flex justify-around items-center mb-5">
        <div >
          <img src="/kbb-logo-white.png" alt="" className="h-28 md:h-30 drop-shadow-white drop-shadow-lg " />
          <p className="text-center">Website Resmi Kabubuhan Banjar Sadunia</p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="font-bold">Contact</h1>
          <p className='flex gap-2 items-center'>
            <BiSolidMap /> Jln. Kabubuhan Banjar Sadunia
          </p>
          <p className='flex gap-2 items-center'>
            <BiLogoWhatsapp /> 0822 1234 5678
          </p>
          <p className='flex gap-2 items-center'>
            <BiMailSend /> kbb@kbb.com
          </p>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h1 className="font-bold">Social Media</h1>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
      </div>
      <hr />
      <div className="text-center mt-1">
        <p> Copyright 2024 | KBB Banjar</p>
      </div>
    </div>
  )
}

export default Footer