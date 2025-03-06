import React from 'react'
import { MdOutlineModeOfTravel } from "react-icons/md";

const Logo = () => {
  return (
    <div className='flex flex-row gap-2'>
        <span className='text-3xl xl:text-4xl font-extrabold text-blue-700'>
         <MdOutlineModeOfTravel />
        </span>
        <span className='text-2xl xl:text-3xl font-extrabold'>
            Ceylon <span className='text-blue-700'>Travel</span>
        </span>
    </div>
   
  )
}

export default Logo