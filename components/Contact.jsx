"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrResume } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import contact from '../public/assets/contact.jpg'
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:jkilpatrick@dr-bugs.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} and my phone number is ${formData.phone} and ${formData.message}`;
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 text-black bg-white">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={contact}
                  alt="/"
                  width="500"
                  height="60"
                />
              </div>
              <div>
                <h2 className="py-2">Dr. Bugs Pest Control</h2>
                <p className="py-4">
                Ready to reclaim your space from unwanted pests? Reach out to us via call, text, or email @ (830) 955-6625 or jkilpatrick@dr-bugs.com to schedule your consultation. Experience the Dr. Bugs difference and let us bring back the comfort and peace you deserve. Welcome to a bug-free world, courtesy of Dr. Bugs!
                </p>
              </div>
              <div>
                <p className="pt-8"> Connect with me via phone call, text or Facebook</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="https://www.linkedin.com/in/adam-wagh/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="https://github.com/adamwagh512"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <Link
                      href="../assets/resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <BsFillPersonLinesFill /> 
                    </Link>
                  </div>
                  {/* <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <Link 
              href='/#contact'
              >
              <BsFillPersonLinesFill />
              </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 bg-[#0093B9]">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      {...register("name")}
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      {...register("phone")}
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    {...register("email")}
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    {...register("subject")}
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    {...register("message")}
                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-gray-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;