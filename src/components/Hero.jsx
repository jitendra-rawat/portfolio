import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";



const Hero = () => {
  return (
    <section className=" lg:px-0 lg:max-w-7xl mx-auto container lg:h-screen lg:py-24 py-12">

    
    <div className=" lg:py-16   flex flex-col-reverse lg:flex-row items-center justify-between">

      {/* Left Section */}
      <div className="text-center sm:text-left mb-8 sm:mb-0 lg:w-1/2">
        <p className="font-poppins text-base font-bold text-center mb-2">Hello I'm</p>
        <h1 className="text-3xl sm:text-6xl font-bold font-poppins text-center mb-4">Jitendra Rawat</h1>
        <p className="text-lg sm:text-4xl font-semibold font-poppins text-center text-gray-700">Software Developer</p>
      
        <div className="mt-6 flex justify-center gap-2 lg:gap-8 lg:flex-row  mx-auto">
  <a href="#contact">
      <button className="bg-gray-200 text-xs font-poppins rounded-xl text-black font-semibold py-2 px-4 lg:px-8  ">
            Contact Me
          </button></a> 
          <a href="#projects"> <button className="bg-gray-700 text-xs font-poppins rounded-xl text-white font-semibold py-2 lg:px-8 px-4  ">
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
      <div className="lg:w-1/2 ">
        <img
        src='https://avatars.githubusercontent.com/u/120551529?v=4'
          alt="Profile"
          className="rounded-full w-[250px] lg:w-[500px] lg:h-full object-cover animate-bounce"
        />
      </div>
    </div>

    </section>
  );
};

export default Hero;
