import React from "react";
import Image from 'next/image'
import News from '@/assets/image.png'

const Newsletter = () => {
  return (
    <section className="px-4 md:px-20 relative h-80 flex flex-col items-center justify-center py-20 sm:py-0">
      {/* Background Image */}
      <Image 
        src={News} 
        alt="Image" 
        layout="fill" 
        objectFit="cover" 
        objectPosition="center"
        className="z-0"
        priority
      />

      {/* Content on top of the image */}
      <div className="relative flex flex-col gap-6 items-center justify-center z-10 px-4">
        <h1 className="text-center text-white text-2xl sm:text-3xl xl:text-4xl font-bold">Subscribe for our Newsletter</h1>
        <p className="text-white text-sm md:text-lg">Get exclusive travel tips and stories from Sri Lanka</p>
        <div className="flex flex-row gap-5">
             <input type="text" placeholder="Enter yout email" className="bg-white w-48 md:w-96 p-4 rounded-lg"/>
            <div className="bg-blue-600 text-md md:text-lg text-white flex items-center px-4 md:px-10 rounded-lg"> 
                Subscribe
            </div>
        </div>
       
      </div>
    </section>
  );
};

export default Newsletter;
