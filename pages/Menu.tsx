import React from 'react'
import SubHeading from '../components/SubHeading'
import data from '../constants/data'
import images from '../constants/images'
import MenuItem from '../components/MenuItem'
import Image from 'next/image'



type Props = {}

export default function Menu({}: Props) {
  return (
    <div className='py-4 px-8 flex flex-col bg-black justify-center items-center '>
      <div className='flex flex-col text-center items-center justify-center mb-2 md:mb-4'>
        <SubHeading title="Menu that fits your palatte" />
        <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
          Today&apos;s Special
        </h1>
      </div>

      <div className='w-full my-4 flex flex-col md:flex-row justify-center items-start'>

        <div className='flex justify-center items-center w-full flex-[1] flex-col mt-2 md:mt-4'>
          <p className='font-bold text-white font-mono italic text-lg lg:text-xl'>
            Wine & Beer
          </p>
          <div className='flex flex-col w-full my-4 mx-auto'>
            {data.wines.map((wine, index) => (
              <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <div className='w-full md:w-[410px] mx-2 md:mx-8'>
          <Image src={images.menu} alt="menu-image" className='w-full h-auto' />
        </div>

        <div className='flex justify-center items-center w-full flex-[1] flex-col mt-4'>
          <p className='font-bold text-white font-mono italic text-lg lg:text-xl'>
            Cocktails
          </p>
          <div className='flex flex-col w-full my-4 mx-auto'>
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <button type="button" className="bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8">
          View More
        </button>
      </div>
    </div>
  )
}