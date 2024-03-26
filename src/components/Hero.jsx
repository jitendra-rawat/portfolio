import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto container h-screen py-24">

    
    <div className=" py-16   flex flex-col sm:flex-row items-center justify-between">

      {/* Left Section */}
      <div className="text-center sm:text-left mb-8 sm:mb-0 w-1/2">
        <p className="font-poppins text-base font-bold text-center mb-2">Hello I'm</p>
        <h1 className="text-3xl sm:text-6xl font-bold font-poppins text-center mb-4">Jitendra Rawat</h1>
        <p className="text-lg sm:text-4xl font-semibold font-poppins text-center text-gray-700">Software Developer</p>
      
        <div className="mt-6 flex justify-center gap-8 sm:flex-row  mx-auto">
  <a href="#contact">
      <button className="bg-gray-200 font-poppins rounded-xl text-black font-semibold py-2 px-8  ">
            Contact Me
          </button></a> 
          <a href="#projects"> <button className="bg-gray-700 font-poppins rounded-xl text-white font-semibold py-2 px-8  ">
            Projects
          </button>
          </a> 
        </div>


        <div className="flex justify-center gap-4 mt-4">

          <Link to={'https://www.linkedin.com/in/jitendra-rawat-10b472121/'}><FaLinkedin  size={40}/></Link>
          <Link to={'https://github.com/jitendra-rawat'}><FaGithub  size={40}/></Link>

        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2">
        <img
        src='https://avatars.githubusercontent.com/u/120551529?v=4'
          alt="Profile"
          className="rounded-full w-[500px] h-full object-cover"
        />
      </div>
    </div>

    </section>
  );
};

export default Hero;
