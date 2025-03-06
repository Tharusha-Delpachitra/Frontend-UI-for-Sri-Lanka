"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Sigiriya from "@/assets/sigiriya.png";
import Mirissa from "@/assets/mirissa.png";
import Ninearch from "@/assets/ninearch.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const values = [
  {
    image: Sigiriya,
    title: "Sigiriya Rock Fortress",
    location: "Central Province",
    rating: 4.9,
    price: "$45",
  },
  {
    image: Mirissa,
    title: "Mirissa Beach",
    location: "Southern Province",
    rating: 4.8,
    price: "$30",
  },
  {
    image: Ninearch,
    title: "Ella Nine Arch Bridge",
    location: "Uva Province",
    rating: 4.7,
    price: "$25",
  },
];

const PopularDestinations = () => {
  return (
    <section className="px-4 md:px-10 xl:px-20 py-20 flex flex-col gap-10 bg-gray-100">
      <motion.h1
        className="text-center text-3xl xl:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Popular Destinations
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-10">
        {values.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={item.image}
              alt={item.title}
              objectPosition="center"
              layout="responsive" 
              width={500}         
              height={300}       
              objectFit="cover" 
              className="rounded-t-xl"
              priority
            />
            <div className="p-4 flex flex-col gap-4">
              <h1 className="text-lg xl:text-2xl font-bold">{item.title}</h1>
              <div className="flex flex-row items-center gap-2 text-md xl:text-lg">
                <span className="text-blue-700">
                  <FaLocationDot />
                </span>
                <span className="text-gray-600">{item.location}</span>
              </div>
              <div className="flex flex-row justify-between items-center text-md xl:text-lg">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-yellow-400">
                    <FaStar />
                  </span>
                  {item.rating}
                </div>
                <div className="flex flex-row justify-between items-center text-md xl:text-lg">
                  <span className="text-blue-700 font-bold">{item.price}</span>
                  <p>/person</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
