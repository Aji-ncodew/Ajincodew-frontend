"use client"

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";


const Navbar = () => {
  
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("home");

  // Function to handle link click
  const handleClick = (link:any) => {
    setActiveLink(link);
  };

  useEffect(() => {
    // Get the full URL
    const fullUrl = window.location.href;

    // Extract the last segment after the final '/'
    const lastSegment = fullUrl.substring(fullUrl.lastIndexOf('/') + 1);

    // Log the last segment
    console.log(lastSegment);
    setActiveLink(lastSegment);
  }, []); 

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/ajincodew.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Ajincodew
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="/"
              className={`cursor-pointer ${activeLink === "" ? "text-blue-500" : ""}`}
            >
              Home
            </a>
            <a
              href="/podcasts"
              className={`cursor-pointer ${activeLink === "podcasts" ? "text-blue-500" : ""}`}
            >
              Podcasts
            </a>
            <a
              href="/lives"
              className={`cursor-pointer ${activeLink === "lives" ? "text-blue-500" : ""}`}
            >
              Lives
            </a>
            <a
              href="/courses"
              className={`cursor-pointer ${activeLink === "courses" ? "text-blue-500" : ""}`}
            >
              Courses
            </a>
            <a
              href="/blogs"
              className={`cursor-pointer ${activeLink === "blogs" ? "text-blue-500" : ""}`}
            >
              Blogs
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
