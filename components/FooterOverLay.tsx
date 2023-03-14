import React from 'react'

type Props = {}

export default function FooterOverLay({}: Props) {
  return (
    <div className='w-full h-full z-[-1] flex flex-col absolute'>
        <div   className='bg-black h-[25%]' />
        <div  className="app__bg h-[75%]"  />
    </div>
  )
}