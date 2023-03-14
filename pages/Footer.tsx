import React from 'react'
import FooterOverLay from '../components/FooterOverLay'
import NewsLetter from '../components/NewsLetter'
import Image from 'next/image'
import images from '../constants/images'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'


type Props = {}

export default function Footer({}: Props) {
  return (
    <div id="login" className='px-8 py-8 w-full relative z-[1] flex flex-col bg-black justify-start items-center pt-0'>
      <FooterOverLay />

      <NewsLetter />

      <div className='w-full flex flex-col md:flex-row justify-between items-center md:items-start mt-10 p-0 md:px-2'>
        <div className='flex-[1] m-2 text-center'>
          <h1 className='text-white font-normal text-2xl capitalize mb-2'>
            Contact Us
          </h1>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            +1 212-344-1230
          </p>
        </div>

        <div className='flex-[1] m-2 flex flex-col lg:justify-center items-center text-center'>
          <Image src={images.gericht} alt='footer-logo' className='w-[80%] flex items-center justify-center' />
          <Image src={images.spoon} className='w-[45px] lg:hidden' alt='spoon-image' />
          <br/>
          <p className='mt-6 font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            &quot;The best way to find yourself is to lose yourself in the service of others.&quot;
          </p>
          <div>
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className='flex-[1] m-2 text-center'>
          <h1 className='text-white font-normal text-2xl capitalize mb-2'>
            Working Hours
          </h1>
          <p className='font-sans capitalize font-bold text-base lg:text-lg text-white cursor-pointer mt-4 lg:mt-8 hover:text-[#DCCA87]'>
            Monday-Friday:
          </p>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-1 hover:text-[#DCCA87]'>
            08:00 am - 12:00 am
          </p>
          <p className='font-sans capitalize font-bold text-base lg:text-lg text-white cursor-pointer mt-6 hover:text-[#DCCA87]'>
            Saturday-Sunday:
          </p>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-1 hover:text-[#DCCA87]'>
            07:00 am - 11:00 pm
          </p>
        </div>

      </div>
        
      <div className='mt-2'>
        <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
          2023 Gericht. All Rights reserved
        </p>
      </div>
      
    </div>
  )
}