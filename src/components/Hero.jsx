import React from 'react'
import Image from 'next/image'
import Background from '@/assets/background.png'
import FilterBox from './FilterBox'

const Hero = () => {
  return (
    <section className="px-4 md:px-20 relative min-h-screen flex flex-col items-center justify-center py-20 sm:py-0">
      {/* Background Image */}
      <Image 
        src={Background} 
        alt="Hero Background" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="center"
        className="z-0"
        priority
      />

      {/* Content on top of the image */}
      <div className="relative flex flex-col gap-6 items-center justify-center z-10 px-4">
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-white text-center">Discover the Pearl of Indian Ocean</h1>
        <p className='text-xl xl:text-2xl text-white text-center'>Experience ancient culture, pristine beaches, and untamed wilderness</p>
        <FilterBox className="w-full md:w-auto" />
      </div>
    </section>
  )
}

export default Hero
