"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const values = [
  { number: 8, title: "UNESCO Sites", description: "World Heritage locations" },
  { number: 1330, title: "Kilometers", description: "of pristine coastline" },
  { number: 26, title: "National Parks", description: "Rich biodiversity" },
];

const ValuesSrilanka = () => {
  return (
    <section className="px-4 md:px-10 xl:px-20 py-20 flex flex-col gap-10">
      <motion.h1
        className="text-center text-3xl xl:text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Why Choose Sri Lanka
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-10">
        {values.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-4 my-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <p className="text-blue-700 text-4xl xl:text-5xl font-bold">
              <CountUp start={0} end={item.number} duration={4} />
            </p>
            <p className="font-semibold text-xl xl:text-2xl">{item.title}</p>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSrilanka;
