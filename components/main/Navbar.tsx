"use client";

import { useState, useEffect } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fullUrl = window.location.href;
    const lastSegment = fullUrl.substring(fullUrl.lastIndexOf('/') + 1);
    setActiveLink(lastSegment);
  }, []);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#00e701]/50 bg-[#24272c] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Image
            src="/ajincodew-logo-3.svg"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-2 hidden md:block text-[white]">
            Ajincodew
          </span>
        </a>

        {/* Dropdown Menu Button for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#00e701] focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-center md:justify-end absolute md:relative top-[65px] md:top-0 right-0 md:right-auto bg-[#24272c] md:bg-transparent w-full md:w-auto p-4 md:p-0 border-b-2 md:border-none border-[#474f54]`}
        >
          <a
            href="/"
            onClick={() => handleClick("")}
            className={`cursor-pointer py-2 md:py-0 px-4 md:px-2 ${
              activeLink === "" ? "text-[#00e701]" : "text-gray-300"
            }`}
          >
            Home
          </a>
          <a
            href="/podcasts"
            onClick={() => handleClick("podcasts")}
            className={`cursor-pointer py-2 md:py-0 px-4 md:px-2 ${
              activeLink === "podcasts" ? "text-[#00e701]" : "text-gray-300"
            }`}
          >
            Podcasts
          </a>
          <a
            href="/courses"
            onClick={() => handleClick("courses")}
            className={`cursor-pointer py-2 md:py-0 px-4 md:px-2 ${
              activeLink === "courses" ? "text-[#00e701]" : "text-gray-300"
            }`}
          >
            Courses
          </a>
          <a
            href="/blogs"
            onClick={() => handleClick("blogs")}
            className={`cursor-pointer py-2 md:py-0 px-4 md:px-2 ${
              activeLink === "blogs" ? "text-[#00e701]" : "text-gray-300"
            }`}
          >
            Blogs
          </a>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex flex-row gap-4 md:gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
