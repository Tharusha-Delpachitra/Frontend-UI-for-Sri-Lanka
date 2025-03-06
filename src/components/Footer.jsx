import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineModeOfTravel } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-slate-900 px-8 md:px-30 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-20 text-center">
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-center sm:justify-start gap-2">
            <span className="text-white text-2xl font-bold">
                <MdOutlineModeOfTravel/>
            </span>
            <p className="text-white text-2xl font-bold">Ceylon Travels</p>
          </div>
          <p className="text-gray-300">
            Your gateway to authentic Sri Lankan experiences
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start gap-3 mt-10 md:mt-0">
          <h1 className="text-xl font-bold text-white">Quick Links</h1>
          <p className="text-gray-300">About us</p>
          <p className="text-gray-300">Destinations</p>
          <p className="text-gray-300">Tours</p>
          <p className="text-gray-300">Blog</p>
          <p className="text-gray-300">Contact</p>
        </div>

        {/* Support */}
        <div className="flex flex-col items-start gap-3 mt-10 md:mt-0">
          <h1 className="text-xl font-bold text-white">Support</h1>
          <p className="text-gray-300">Help Center</p>
          <p className="text-gray-300">Safety</p>
          <p className="text-gray-300">Cancellation</p>
          <p className="text-gray-300">Refund</p>
          <p className="text-gray-300">FAQ</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start gap-3 mt-10 md:mt-0">
          <h1 className="text-xl font-bold text-white">Follow Us</h1>
          <div className="text-white flex flex-row gap-14 text-2xl">
            <GrInstagram />
            <FaTwitter />
            <FaFacebook />
            <IoLogoYoutube />
          </div>
        </div>
      </div>
      <hr className="text-white my-8" />

      <div className="text-gray-300 text-md sm:text-lg text-center mt-6">
        &copy; {new Date().getFullYear()} Ceylon Travel. All Rights Reserved.
      </div>
    </section>
  );
};

export default Footer;
