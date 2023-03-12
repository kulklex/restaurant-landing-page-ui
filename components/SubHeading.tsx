import React from 'react'
import images from '../constants/images'
import Image from 'next/image'

type Props = {
  title: string,
}

export default function SubHeading({title}: Props) {
  return (
    <div className='mb-4 lg:mb-8'>
      <p className='text-white font-serif italic font-extrabold capitalize text-medium md:text-lg'>
        {title}
      </p>
      <Image src={images.spoon} alt="subheading-img" className='w-[45px]' />
    </div>
  )
}