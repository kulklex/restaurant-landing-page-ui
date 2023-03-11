import React, {useState} from 'react'
import images from '../constants/images'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import Link from 'next/link';

type Props = {}

export default function Navbar({}: Props) {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false)

  return (
    <div className='w-full flex justify-between items-center px-4 py-2 bg-black'>
      <div className='flex justify-start items-center cursor-pointer'>
        <Image src={images.gericht} alt='Logo' className='w-[110px] md:w-[150px]'/>
      </div>

      <ul className='hidden lg:flex-[1] lg:flex justify-center items-center'>
        <li className='font-sans capitalize font-normal text-base text-white cursor-pointer my-0  mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          <Link href='#home'>Home</Link>
        </li>
        <li className='font-sans capitalize font-normal text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          <Link href='#about'>About</Link>
        </li>
        <li className='font-sans capitalize font-normal text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          <Link href='#menu'>Menu</Link>
        </li>
        <li className='font-sans capitalize font-normal text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          <Link href='#awards'>Awards</Link>
        </li>
        <li className='font-sans capitalize font-normal text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          <Link href='#contact'>Contact</Link>
        </li>
      </ul>
 
      <div className='flex justify-end items-center transition duration-500 ease-in'>
        <Link href='#login' className='font-sans capitalize md:font-normal text-xs md:text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          Log In / Register
        </Link>
        <div className='w-[1px] h-[30px] bg-gray-500'/>
        <Link href='#login' className='font-sans capitalize md:font-normal text-xs md:text-base text-white cursor-pointer my-0 mx-2 md:mx-4 lg:mx-8 hover:text-[#DCCA87]'>
          Book Table
        </Link>
      </div>

      <div className='lg:hidden'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='slide-bottom flex flex-col justify-center items-center fixed top-0 left-0 w-full h-[100vh] bg-black transition duration-500 ease-in z-[5]'>
            <MdOutlineRestaurantMenu fontSize={27} className="absolute text-2xl text-[#DCCA87] top-[20px] right-[20px] cursor-pointer hover:text-white" onClick={() => setToggleMenu(false)} />
            <ul className=''>
              <li className='font-sans capitalize font-normal text-base m-4 text-[#DCCA87] cursor-pointer hover:text-white '>
                <Link href='#home' onClick={() => setToggleMenu(false)}>Home</Link>
              </li>
              <li className='font-sans capitalize font-normal text-base m-4 text-[#DCCA87] cursor-pointer hover:text-white'>
                <Link href='#about' onClick={() => setToggleMenu(false)}>About</Link>
              </li>
              <li className='font-sans capitalize font-normal text-base m-4 text-[#DCCA87] cursor-pointer hover:text-white'>
                <Link href='#menu' onClick={() => setToggleMenu(false)}>Menu</Link>
              </li>
              <li className='font-sans capitalize font-normal text-base m-4 text-[#DCCA87] cursor-pointer hover:text-white'>
                <Link href='#awards' onClick={() => setToggleMenu(false)}>Awards</Link>
              </li>
              <li className='font-sans capitalize font-normal text-base m-4 text-[#DCCA87] cursor-pointer hover:text-white'>
                <Link href='#contact' onClick={() => setToggleMenu(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}