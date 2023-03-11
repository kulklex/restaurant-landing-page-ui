import React from 'react'
import Image from 'next/image'
import SubHeading from './SubHeading'
import images from '../constants/images'


type Props = {}

export default function Header({}: Props) {
  return (
    <div id="home" className='py-4 px-8 flex flex-col md:flex-row justify-between items-center md:min-h-[100vh] bg-black'>
      <div className='flex-[1] w-full flex flex-col justify-center items-start'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='lg-font-style text-[#DCCA87] font-extrabold capitalize text-5xl lg:text-8xl leading-[70px] lg:leading-[117px]'>The Key To Fine Dining</h1>
        <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button type="button" className='bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8'>
          Explore Menu
        </button>
      </div>

      <div className='flex-[1] w-full flex justify-center items-center my-4 md:ml-4 lg:ml-8'>
        <Image src={images.welcome} alt="header-img" className='w-[80%]'/>
      </div>
    </div>
  )
}