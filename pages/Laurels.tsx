import React from 'react'
import images from '../constants/images'
import data from '../constants/data'
import SubHeading from '../components/SubHeading'
import Image from 'next/image'


type Props = {
  award: any,
}



export function Awards  ({award}: Props) {
  return (
    <div className='flex-[1] flex justify-start items-start min-w-full lg:min-w-[230px] m-4'>
      <Image src={award?.imgUrl} alt="awards" className=''  />
      <div className='flex flex-col ml-2 lg:ml-4 my-2 '>
        <p className='text-[#DCCA87] capitalize font-serif font-extrabold text-base'>
          {award?.title}
        </p>
        <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 hover:text-[#DCCA87]'>
          {award?.subtitle}
        </p>
      </div>
    </div>
  )
}



export default function Laurels() {
  return (
    <div className='app__bg py-4 px-8 flex flex-col md:flex-row justify-between items-center min-h-[100vh]'>
      <div className='flex-[1] w-full flex items-center justify-center flex-col'>
        <SubHeading title="Awards & recognition" />
        <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>Our Laurels</h1>
        <div className='flex justify-start items-center flex-wrap mt-4'>
          {data.awards.map((award, index) => <Awards key={index} award={award} />)}
        </div>
      </div>

      <div className='flex-[1] w-full flex justify-center items-center my-4'>
        <Image src={images.laurels} alt="laurels-image" className='w-[80%]'/>
      </div>
    </div>
  )
}