import React, {useRef, useState} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';


type Props = {}

export default function Intro({}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const [isPlaying, setIsPlaying] = useState<boolean>(false) 
  
  const handleVideo = () => {
    setIsPlaying((prev) => !prev)

    if (isPlaying) {
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
    }
  }

  return (
    <div className='h-[100vh] relative'>
      <video ref={videoRef} src="/meal.mp4" loop controls={false} muted className='w-full h-full object-cover'/>

      <div className='absolute inset-0 bg-[rgba(0,0,0,0.30)] flex justify-center items-center'>
        <div onClick={handleVideo} className='flex justify-center items-center w-full h-full rounded-[50%] border-solid border-[#DCCA87] cursor-pointer'>
          {isPlaying 
          ? (<BsPauseFill color="#fff" fontSize={30} />) 
          : (<BsFillPlayFill color="#fff" fontSize={30} />)
          }
        </div>
      </div>
    </div>
  )
}