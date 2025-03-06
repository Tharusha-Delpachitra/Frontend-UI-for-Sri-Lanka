import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

const FiterBox = () => {
  return (
    <section className="bg-[rgba(255,255,255,0.8)] p-6 px-10 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-md text-gray-800">Destination</p>
        <div>
          <div className="flex flex-row items-center gap-4 bg-white p-2 rounded-lg text-gray-500 w-44">
            <span>
              <FaLocationDot size={16} />
            </span>
            <input
              type="text"
              placeholder="Location"
              className="border-none outline-none text-md xl:text-lg"
            />
          </div>
         
        </div> 
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-md text-gray-800">Check-in</p>
        <div>
          <div className="flex flex-row items-center gap-4 bg-white p-2 rounded-lg text-gray-500  w-44">
          <span>
              <FaRegCalendarAlt size={16} />
            </span>
            <input
              type="text"
              placeholder="Add date"
              className="border-none outline-none text-md xl:text-lg"
            />
          </div>
         
        </div> 
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-md text-gray-800">Check-out</p>
        <div>
          <div className="flex flex-row items-center gap-4 bg-white p-2 rounded-lg text-gray-500  w-44">
            <span>
              <FaRegCalendarAlt size={16} />
            </span>
            <input
              type="text"
              placeholder="Add date"
              className="border-none outline-none text-md xl:text-lg"
            />
          </div>
         
        </div> 
      </div>
      <div className='bg-blue-800 px-8 xl:px-12 h-12 my-auto text-white rounded-xl flex flex-row gap-2 items-center'>
        <span className="text-lg xl:text-xl">
          <IoSearch/> 
        </span>
        <span className="text-lg xl:text-xl">
          Search
        </span>
      </div>
    </section>
  );
};

export default FiterBox;
