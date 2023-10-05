import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../public/assets/logo.jpg";
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#4391DA]">
      <div className="flex justify-between items-center w-full h-full pr-2 2xl:pl-0 md:pr-16 text-[#ff0303] text-xl font-bold m-0">
        <div>
          <Image src={logo} alt="/" width="295" height={100} />
        </div>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b border-[#ff0404]">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b border-[#ff0404]">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b border-[#ff0404]">
                Services
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:border-b border-[#ff0404]">
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;