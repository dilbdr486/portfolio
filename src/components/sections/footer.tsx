"use-client";

import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex justify-center mt-4 items-center flex-col w-full border-t border-gray-300 px-6 py-4 text-center text-gray-500 sm:px-10 lg:px-20">
      &copy; {new Date().getFullYear()} Dil Bahadur Tharu. All rights reserved.
      {/* logo */}
      <Link href="/" className="relative group inline-block">
        <span
          className="absolute top-1/2 left-full -translate-y-1/2 
                   opacity-0 group-hover:opacity-100 
                   transition-all duration-300 
                   text-base bg-[#1f7a8c] text-white px-5 py-2 rounded shadow-lg z-10"
          style={{ minWidth: "90px", textAlign: "center" }}
        >
          To Top
          {/* Arrow */}
          <span
            className="absolute top-1/2 -left-2 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-[#1f7a8c]"
            aria-hidden="true"
          />
        </span>

        {/* Logo */}
        <img
          src="/logo11.svg"
          alt="center star logo"
          className="h-24 w-24 object-contain"
        />
      </Link>
      {/* social icons */}
      <div className="flex justify-center items-center gap-4">
        <FaLinkedinIn className="text-[#1f7a8c] text-2xl ransition-transform duration-500 ease-out hover:scale-[1.23] cursor-pointer" />
        <FaGithub className="text-[#1f7a8c] text-2xl ransition-transform duration-500 ease-out hover:scale-[1.23] cursor-pointer" />
        <MdOutlineMail className="text-[#1f7a8c] text-2xl ransition-transform duration-500 ease-out hover:scale-[1.23] cursor-pointer" />
      </div>
    </footer>
  );
}
