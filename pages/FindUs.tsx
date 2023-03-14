import React from 'react'
import SubHeading from '../components/SubHeading'
import Image from 'next/image'
import images from '../constants/images'

type Props = {}

export default function FindUs({}: Props) {
  return (
    <div className='app__bg px-8 py-4 flex flex-col md:flex-row justify-between items-center min-h-[100vh]' id="contact">
      <div className='flex-[1] w-full flex justify-center items-start flex-col my-4'>
        <SubHeading title="Contact" />
        <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
          Find Us
        </h1>
        <div className=''>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </p>
          <p className="text-[#DCCA87] font-sans capitalize font-normal text-base lg:text-lg cursor-pointer my-4 lg:my-8 hover:text-white">
            Opening Hours
          </p>
          <p className="font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]">
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p className="font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]">
            Sat - Sun: 10:00 am - 03:00 am
          </p>
        </div>
        <button type="button" className="bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8">
          Visit Us
        </button>
      </div>

      <div className='flex-[1] w-full flex justify-center items-center my-4'>
        <Image src={images.findus} alt="findus-image" className='w-[80%]'/>
      </div>
    </div>
  )
}