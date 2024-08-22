import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.youtube.com/@aji_ncodew">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://github.com/Aji-ncodew">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://discord.gg/4FP9Ek4F">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.instagram.com/ajincodew_/">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://web.facebook.com/Ajincodew">
                        <FaFacebook />
                        <span className="text-[15px] ml-[6px]">Facebook</span>    
                    </a>
                    <a className="flex flex-row items-center my-[15px] cursor-pointer" href="https://www.linkedin.com/company/ajincodew2024/?viewAsMember=true">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">ajincodew@gmail.com</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Ajincodew 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer