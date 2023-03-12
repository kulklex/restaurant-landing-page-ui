import React from 'react'
import images from '../constants/images'
import Image from 'next/image'
import SubHeading from '../components/SubHeading'


type Props = {}

export default function Chef({}: Props) {
  return (
    <div className="app__bg py-4 px-8 flex flex-col md:flex-row justify-between items-center min-h-[100vh]">
      <div className='flex-[1] w-full justify-start items-center my-4 ml-4'>
        <Image src={images.chef} alt="chef" className="w-[80%]" />
      </div>

      <div className='flex-[1] w-full flex justify-center items-start flex-col my-4'>
        <SubHeading title="Chef's word"/>
        <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
          What we believe in
        </h1>
        <div className='flex flex-col w-full mt-8'>
          <div className='flex justify-start items-end'>
            <Image src={images.quote} alt="quote" className='w-[50px] h-[40px] mr-2 mb-2' />
            <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
            </p>
          </div>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
          </p>
        </div>
        <div className='w-full mt-8'>
          <p className='capitalize font-normal text-sm lg:text-lg text-[#DCCA87]'>Kevin Luo</p>
          <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-2 lg:my-4 hover:text-[#DCCA87]'>
            Chef & Founder
          </p>
          <Image src={images.sign} alt="sign-image" className='w-[80%] md:w-[250px] mt-8' />
        </div>
      </div>
    </div>
  )
}