"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MdTempleBuddhist } from "react-icons/md";
import { MdWidgets } from "react-icons/md";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiPineTree } from "react-icons/gi";
import Dance from "@/assets/Dancing.png";
import Elephant from "@/assets/Elephant.png";
import Beach from "@/assets/Beach.png";
import Parachute from "@/assets/Parachute.png";

const UnforgettableExperience = () => {
  return (
    <section className="px-8 md:px-20 xl:px-40 py-10 md:py-20 flex flex-col items-center justify-center gap-10 md:gap-20">
      <motion.h1
        className="text-center text-2xl sm:text-3xl xl:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Unforgettable Experiences
      </motion.h1>

      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 md:gap-20">
        {/* Image grid with simple animations */}
        <motion.div 
          className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-xs sm:max-w-md lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <motion.div 
            className="aspect-square overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Dance}
              alt="Traditional Sri Lankan Dance"
              className="object-cover w-full h-full"
              width={240}
              height={240}
              priority
            />
          </motion.div>
          <motion.div 
            className="aspect-square overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Beach}
              alt="Sri Lankan Beach"
              className="object-cover w-full h-full"
              width={240}
              height={240}
              priority
            />
          </motion.div>
          <motion.div 
            className="aspect-square overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Elephant}
              alt="Sri Lankan Elephant"
              className="object-cover w-full h-full"
              width={240}
              height={240}
              priority
            />
          </motion.div>
          <motion.div 
            className="aspect-square overflow-hidden rounded-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={Parachute}
              alt="Parachute Adventure"
              className="object-cover w-full h-full"
              width={240}
              height={240}
              priority
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col gap-6 md:gap-8 w-full lg:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h1 className="text-gray-800 text-xl lg:text-2xl xl:text-3xl font-bold">
            Immerse in Rich Culture
          </h1>
          
          <div className="text-sm sm:text-md lg:text-lg text-gray-500">
            <p className="mb-4">
              Discover the vibrant traditions, ancient temples, and warm hospitality of Sri Lanka.
            </p>
            <p>
              From traditional dance performances to authentic cuisine, every moment is an opportunity to experience the island's rich heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row gap-3 items-center">
                <MdTempleBuddhist color="green" size={24} className="sm:text-3xl" />
                <h1 className="font-bold text-base sm:text-lg">Cultural Heritage</h1>
              </div>
              <p className="text-sm sm:text-base">Ancient temples and traditions</p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row gap-3 items-center">
                <MdWidgets color="green" size={24} className="sm:text-3xl" />
                <h1 className="font-bold text-base sm:text-lg">Wildlife Safari</h1>
              </div>
              <p className="text-sm sm:text-base">Exotic animals in nature habitats</p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row gap-3 items-center">
                <FaUmbrellaBeach color="green" size={24} className="sm:text-3xl" />
                <h1 className="font-bold text-base sm:text-lg">Beach Paradise</h1>
              </div>
              <p className="text-sm sm:text-base">Pristine coastal experiences</p>
            </motion.div>
            <motion.div 
              className="flex flex-col gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-row gap-3 items-center">
                <GiPineTree color="green" size={24} className="sm:text-3xl" />
                <h1 className="font-bold text-base sm:text-lg">Nature Trails</h1>
              </div>
              <p className="text-sm sm:text-base">Scenic hiking adventures</p>
            </motion.div>
          </div>

          <motion.button 
            className="bg-blue-600 p-2 sm:p-3 px-6 sm:px-10 rounded-lg text-white text-sm sm:text-base self-start mt-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Experiences
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UnforgettableExperience;