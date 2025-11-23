import React from "react";
import TitleHeader from "../components/TitleHeader";
import TechIcon from "../components/TechIcon";
import { iconsListSe } from "../constants";
import { iconsListDevOps } from "../constants";

const TechStack = () => {
  return (
    <div className="w-full h-full md:my-60 my-20 scroll-mt-[70px]" id='techStack'>
      <div className="w-full ">
        <div className="container px-10 md:mb-10 mb-0">
          <TitleHeader
            title="SOFTWARE ENGINEERING"
            number="02"
            text="My Go-To Tools for Software Development"
          />
        </div>

       
        <div className="relative">
          {/* Watermark embedded INTO the paper */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
           
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="font-black text-white-50 select-none text-center md:text-8xl text-4xl opacity-12"
                >
                  SE
                </div>
              ))}
      
          </div>

          {/* Your marquee content */}
          <div className="marquee h-52 relative z-20">
            <div className="marquee-box md:gap-12 gap-5">
              {iconsListSe.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsListSe.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>

         <div className="container px-10 md:mb-10 mb-0">
          <TitleHeader
            title="DevOps ENGINEERING"
            number="03"
            text="My Go-To Tools for Cloud & Automation"
          />
        </div>

        <div className="relative">
          {/* Watermark embedded INTO the paper */}
          <div className="absolute inset-0 flex items-center justify-between pointer-events-none z-10">
           
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="font-black text-white-50 select-none text-center md:text-8xl text-4xl opacity-12"
                >
                  DevOps
                </div>
              ))}
      
          </div>

          {/* Your marquee content */}
          <div className="marquee h-52 relative z-20">
            <div className="marquee-box-reverse md:gap-12 gap-5">
              {iconsListDevOps.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
              {iconsListDevOps.map((icon, index) => (
                <TechIcon key={index} icon={icon} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TechStack;
