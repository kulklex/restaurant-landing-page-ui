import React, {useRef} from 'react'
import images from '../constants/images'
import Image from 'next/image'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from '../components/SubHeading';


type Props = {}

export default function Gallery({}: Props) {
  const imagesContainer = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: string) => {
    if (direction === 'left' && scrollRef.current) {
      scrollRef.current.scrollLeft -= 300
    } else {
      scrollRef.current && scrollRef.current.scrollLeft + 300
      // It could easily have been scrollRef.current.scrollLeft += 300
      // But we did it the other way to avoid any typescript warnings
   }
  }

  return (
    <div className='flex justify-center items-center flex-col md:flex-row bg-black py-4 pb-4 px-4'>
      <div className='flex-[1] flex flex-col justify-center items-start min-h-full'>
        <SubHeading title="Instagram" />
        <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
          Photo Gallery
        </h1>
        <p className='font-sans capitalize font-normal text-base lg:text-lg text-[#AAAAAA] cursor-pointer my-4 hover:text-[#DCCA87]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer py-2 px-6 lg:px-8 flex items-center justify-center">
          View More
        </button>
      </div>

      <div className='flex-[1] flex max-w-full md:max-w-[50%] relative items-center justify-center py-8 px-2'>
        <div ref={scrollRef} className='scrollBar flex flex-row w-max overflow-x-scroll '>
          {imagesContainer.map((image, index) => (
            <div key={index} className='flex items-center justify-center relative min-w-[300px] h-[450px] mr-4'>
              <Image src={image} alt='gallery-image' className='w-full h-full object-cover transition duration-500 ease-in opacity-[1] hover:opacity-[0.35]'/>
              <BsInstagram className='absolute text-white text-sm transition duration-500 ease-in cursor-pointer hover:opacity-[1]' />
            </div>
          ))}
        </div>
        {/* <div className='w-full flex justify-between items-center absolute px-2'>
          <BsArrowLeftShort className='hover:text-white bg-black text-xl cursor-pointer rounded-[5px] text-[#DCCA87]' onClick={() => scroll('left')} />
          <BsArrowRightShort className='hover:text-white bg-black text-xl cursor-pointer rounded-[5px] text-[#DCCA87]' onClick={() => scroll('right')} />
        </div> */}
      </div>

    </div>
  )
}