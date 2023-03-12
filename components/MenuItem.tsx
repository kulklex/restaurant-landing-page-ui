import React from 'react'

type Props = {
  title: string,
  price: string,
  tags: string,
}

export default function MenuItem({title, price, tags}: Props) {
  return (
    <div className='w-full my-2 flex flex-col'>
      <div className='flex justify-between items-center'>
        <div className='flex-[1]'>
          <p className='text-[#DCCA87] capitalize font-serif font-extrabold text-base'>
            {title}
          </p>
        </div>
        <  div className='w-[90%] h-[1px] bg-[#DCCA87]  mx-2' />
        <div className='flex justify-end items-end'>
          <p className='text-[#DCCA87] capitalize font-serif font-extrabold text-base'>
            {price}
          </p>
        </div>
      </div>

      <div className=''>
        <p className='font-sans capitalize font-normal text-base lg:text-lg text-[#AAAAAA] cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
          {tags}
        </p>
      </div>
    </div>
  )
}