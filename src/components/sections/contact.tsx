"use client";

import { FiMessageSquare } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <div>
      <div className="mb-12 flex justify-center">
        <div className="relative inline-flex items-center justify-center border-[3px] border-[#1f7a8c] bg-white px-10 py-3 shadow-sm whitespace-nowrap">
          <h2 className="font-bold tracking-tight text-[#1f7a8c] text-2xl sm:text-3xl md:text-4xl">
            Let's Connect
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 gap-10">
        {/* LEFT: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/contact-me.svg"
            alt="contact"
            className="mx-auto w-3/4 md:w-full"
          />
        </div>

        {/* RIGHT: Form */}
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-4">
            <div className="flex justify-start items-center gap-1">
              <GoPerson className="text-gray-500 text-2xl" />
              <span className="text-gray-500">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="border p-3 rounded w-full border-gray-300 -mt-4 hover:outline-[#1f7a8c] outline-[#1f7a8c]"
            />
            <div className="flex justify-start items-center gap-1">
              <MdAlternateEmail className="text-gray-500 text-2xl" />
              <span className="text-gray-500">Email</span>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="border p-3 rounded w-full border-gray-300 -mt-4 outline-[#1f7a8c]"
            />
            <div className="flex justify-start items-center gap-1">
              <FiMessageSquare className="text-gray-500 text-2xl" />
              <span className="text-gray-500">Message</span>
            </div>
            <input
              type="text"
              placeholder="Message"
              className="border p-3 rounded w-full h-48 border-gray-300 -mt-4 outline-[#1f7a8c]"
            />

            <div>
              <button className="bg-[#1f7a8c] text-white mt-4 rounded-lg w-full p-3 border border-[#1f7a8c] flex justify-center items-center gap-2 ransition-transform duration-500 ease-out hover:scale-[1.03] cursor-pointer">
                <IoIosSend className="text-white text-2xl" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
