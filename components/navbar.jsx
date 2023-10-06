"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import logo from "../public/assets/logo.jpg";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { PiChatCircleTextFill } from "react-icons/pi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#4391DA]">
      <div className="flex justify-between items-center w-full h-full pr-2 2xl:pl-0 md:pr-16 text-[#ff0303] text-xl font-bold m-0">
        <div>
          <Image src={logo} alt="/" width="295" height={100} />
        </div>
        <div>
          {/* This is the desktop version. It will only display above 768 px screen width */}
          <ul className="hidden md:flex">
            <Link href="#home">
              <li className="ml-10 text-lg uppercase hover:border-b border-[#ff0404]">
                Home
              </li>
            </Link>
            <Link href="#about">
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
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* This is the mobile navbar, it will only dislay on mobile devices below a certain width. */}
      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[75%] h-screen bg-[#4391DA] pr-3 ease-in-out duration-500"
              : 'fixed left-[-100%] top-0  pr-3 ease-in-out duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src={logo} alt="/" width={200} height={35} />
              <div onClick={handleNav}>
                <AiOutlineCloseCircle size={25} />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="w-[85%] md:w-[90%] py-4 uppercase">
                Bugs Beware, The Doctor Is In
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
              <p className="uppercase tracking-widest pl-3 text-center text-lg">
                Consult Dr. Bugs
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%] px-3">
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaFacebook size={35} />
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <FaPhone size={30} />
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <AiOutlineMail size={35} />
                </div>
                <div className="rounded-full p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                  <PiChatCircleTextFill size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
