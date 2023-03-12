import React from 'react'
import images from '../constants/images'
import Image from 'next/image'


type Props = {}

export default function AboutUs({}: Props) {
  return (
    <div id="about" className='app__bg relative flex justify-center items-center py-4 px-8 w-full'>
      <div className='absolute inset-0 flex justify-center items-center'>
        <Image src={images.G} alt="letter G" className='w-[80%] md:w-[400px] h-[320px]  z-0' />
      </div>

      <div className='flex flex-col md:flex-row justify-center items-center w-full z-[2]'>

        <div className='flex-[1] flex flex-col justify-end items-end text-right'>
          <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
            About Us
          </h1>
          <Image src={images.spoon} alt="about-spoon" className='w-[45px] my-2' />
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className='bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8'>
            Know More
          </button>
        </div>

        <div className='flex justify-center items-center my-2 md:my-4 mx-4 md:mx-8'>
          <Image src={images.knife} alt="about-knife" className="w-[90px] lg:w-[110px] h-[400px] lg:h-[450px]"/>
        </div>

        <div className='flex-[1] flex flex-col justify-start items-start text-left'>
          <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
            Our History
          </h1>
          <Image src={images.spoon} alt="spoon-image" className="w-[45px] my-2"/>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button type="button" className='bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8'>
            Know More
          </button>
        </div>
      </div>
    </div>
  )
}