import React from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <section className="top-0 fixed left-0 right-0 px-8 md:px-10 xl:px-20 h-20 flex flex-row items-center justify-between bg-white shadow-md z-20">
      <Logo />
      <div className="hidden lg:flex flex-row gap-8 text-md xl:text-xl text-gray-700">
        <Link href="#">Home</Link>
        <Link href="#">Destination</Link>
        <Link href="#">Experiences</Link>
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
      </div>
      <div className="hidden lg:block bg-blue-700 p-1 px-6 text-white rounded-xl text-md xl:text-lg">
        Book Now
      </div>
      <div className="block lg:hidden text-2xl">
        <GiHamburgerMenu />
      </div>
    </section>
  );
};

export default NavBar;
