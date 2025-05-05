import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
import Navigation from "./Navigation";
import { HiH1 } from "react-icons/hi2";
import logo from "../../assets/Logo/L.svg"

const Navbar = () => {
  const logoImage = logo ;
  const [isMenu, setIsMenu] = useState(false);
  return (
    <nav className="">
      <div className="flex flex-wrap flex-row justify-between items-center p-3 ">
        <a
          className="flex flex-wrap flex-row justify-between place-items-center "
          href="http://localhost:5173/"
        >
          <img className="h-18" src={logoImage} alt="img od" />
          <span className="text-2xl font-semibold text-white ">jobfit</span>
        </a>

        <button
          className="xl:hidden block hover:cursor-pointer "
          onClick={() => {
            setIsMenu(!isMenu);
          }}
        >
          {isMenu ? (
            <ImCancelCircle size={30} />
          ) : (
            <>
              <IoMdMenu size={30} />
            </>
          )}
        </button>

        <div
          className={`absolute z-50 xl:hidden top-24 left-0 w-full h-50 bg-green-400 text-black  flex flex-col font-semibold gap-0 transform transition-transform ${
            isMenu ? "opacity-100" : "opacity-0"
          }  `}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">Home</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">Upload Resume</li>
          <li className="list-none w-full text-center p-4 transition-all cursor-pointer">About</li>
          
        </div>

        <Navigation />
        <div className=" lg:flex gap-3 translate-x-18 hidden md:block ">
          <button className="h-10 w-20 bg-green-400 text-sm text-black border rounded-3xl cursor-pointer hover:bg-green-200 hover:text-black ">
            Sign In
          </button>
          <button className="h-10 w-20 text-black bg-green-400 border-2 rounded-3xl text-sm animate-bounce  hover:bg-green-200 hover:animate-none">
            Get Start
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
