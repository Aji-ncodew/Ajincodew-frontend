"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-4 px-6 border border-[#474f54] opacity-90"
        >
          <SparklesIcon className="text-[#00e701] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-2xl font-bold">
            The latest tech trends, in Darija!
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-[#00e701] max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e701] via-[#00e701] to-[#474f54]">
              Moroccan
            </span>
            {" "} IT community.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px]"
        >
          Ajincodew is an organization dedicated to empowering young Moroccans in the tech industry.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] text-lg font-semibold"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
