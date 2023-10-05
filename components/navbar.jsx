import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../public/assets/logo.jpg";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#4391DA]">
      <div className="flex justify-between items-center w-full h-full pr-2 2xl:pl-0 md:pr-16 text-[#ff0303] text-xl font-bold m-0">
        <div>
          <Image src={logo} alt="/" width="295" height={100} />
        </div>
        <div>
          {/* This is the desktop version. It will only display above 768 px screen width */}
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
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* This is the mobile navbar, it will only dislay on mobile devices below a certain width. */}
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[75%] h-screen bg-[#4391DA] pr-3 ease-in-out duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={logo} alt="/" width={200} height={35} />
              <div>
                <AiOutlineCloseCircle color="red" size={25} />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Your Pests Are Our Priority
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <ul className="uppercase">
              <Link href="/" alt="/">
                <li className="py-4 text-[#ff0404] px-4">Home</li>
              </Link>
              <Link href="/" alt="/">
                <li className="py-4 text-[#ff0404] px-4">About</li>
              </Link>
              <Link href="/" alt="/">
                <li className="py-4 text-[#ff0404] px-4">Services</li>
              </Link>
              <Link href="/" alt="/">
                <li className="py-4 text-[#ff0404] px-4">Contact Us</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest pl-3">Consult Dr. Bugs</p>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
