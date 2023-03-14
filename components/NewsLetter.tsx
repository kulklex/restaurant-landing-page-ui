import React from 'react'
import SubHeading from './SubHeading'

type Props = {}

export default function NewsLetter({}: Props) {
  return (<div className='w-full'>
    <div className='py-2 border-solid border-[1px] border-[#DCCA87] bg-black'>
        <div className='text-center flex flex-col items-center'>
            <SubHeading title="Newsletter" />
            <h1 className='text-[#DCCA87] capitalize text-3xl md:text-4xl lg:text-6xl'>
                Subscribe To Our Newsletter
            </h1>
            <p className='font-sans capitalize font-normal text-base lg:text-lg text-white cursor-pointer my-4 lg:my-8 hover:text-[#DCCA87]'>
                And never miss latest Updates!
            </p>
        </div>

        <div className='flex flex-col mt-8 justify-center items-center my-4'>
            <input type="email" placeholder="Enter your email address" className='border-[1px] border-solid border-[#DCCA87] text-white rounded-[5px] w-[70%] lg:w-[620px] my-4 p-2'/>
            <button type="button" className="bg-[#F5EFDB] hover:bg-[#DCCA87] text-black font-extrabold rounded outline-none cursor-pointer lg:mt-2 py-2 lg:py-4 px-7 lg:px-8">
                Subscribe
            </button>
        </div>
    </div>
  </div>)
}