"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/utils/motion";
// import Facebook from "/facebook.svg";
// import Twitter from "/facebook.svg";
// import Youtube from "/facebook.svg";
// import Rss from "/facebook.svg";

const NotificationSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full h-full">
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200 my-8"
      >
        Stay Updated with
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}Our IT Community
        </span>
      </motion.div>

      <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-semibold mb-4">Get Notified</h1>
        <p className="text-gray-700 mb-6 text-center">
          Subscribe to our channels to stay updated on the latest podcasts, courses, and blogs. Enable notifications so you never miss out!
        </p>

        <div className="flex justify-around w-full mb-6">
          <a
            href="http://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.svg" alt="Facebook" height={38} width={38} />
          </a>
          <a
            href="http://twitter.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.svg" alt="Twitter" height={50} width={50} />
          </a>
          <a
            href="https://www.youtube.com/channel/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.svg" alt="YouTube" height={50} width={50} />
          </a>
          <a
            href="http://yourwebsite.com/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.svg" alt="RSS" height={30} width={30} />
          </a>
        </div>

        <p className="text-gray-700 text-center">
          Or subscribe to our{" "}
          <a
            href="https://yournewsletter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 underline"
          >
            Mailing List
          </a>{" "}
          to receive updates directly to your inbox.
        </p>
      </div>
    </div>
  );
};

export default NotificationSection;
