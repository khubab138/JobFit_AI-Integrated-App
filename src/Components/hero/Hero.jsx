import React from "react";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { LuGitCompareArrows } from "react-icons/lu";
import { GoChecklist } from "react-icons/go";
import FlipCard from "./Flipcard";

import { FaGoogle } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
import { TiVendorMicrosoft } from "react-icons/ti";
import { FaApple } from "react-icons/fa";



const Hero = () => {
  return (
    <>
      <div className="lg:mb-20">
        <div className="flex flex-wrap lg:translate-x-10">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col sm:items-center lg:items-start translate-x-5">
              <h1 className="pb-7 text-3xl lg:text-6xl font-bold  tracking-tight ">
                <span className="lg:text-8xl text-green-800 ">JobFit </span>
                Helps You To Get
                <span className="lg:text-7xl text-green-800"> Hired</span>
              </h1>
              <h1 className=" flex gap-3 sm:text-2xl lg:text-3xl bg-gradient-to-r from-sky-500 via-amber-300 to-green-500 bg-clip-text tracking-tight text-transparent ">
                <MdOutlineDocumentScanner className="text-sky-500" />
                Scan <LuGitCompareArrows className="text-amber-300" />
                Match <GoChecklist className="text-green-500" />
                Hired
              </h1>
            </div>
            <div className=" p-2 my-9 flex items-center">
             <a href="http://localhost:5173/f1"> <button className="lg:p-2 mx-3  cursor-pointer  rounded bg-green-400 text-bold text-slate-900 transition-colors duration-300 hover:bg-green-200 hover:text-black ">
                Build Your Resume
              </button> </a>
              <button className="lg:p-2 mx-3 cursor-pointer rounded border-2 text-bold text-green-800 hover:text-green-200  transition-colors duration-300 ">
                Get Your Resume Score
              </button>
            </div>
            <p className="px-5 m-3 text-xl font-semibold sm:font-thin">
              Liked by interviewers at :
            </p>
            <div className="px-5  m-3 text-xl gap-8 lg:text-3xl flex">
              <FaGoogle/>
              <SiTesla/>
              <FaAmazon/>
              <TiVendorMicrosoft/>
              <FaApple/>
            </div>
          </div>

          <div className="FlipCard lg:translate-x-30 translate-x-20  ">
            <FlipCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
