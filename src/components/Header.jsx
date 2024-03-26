import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (

    <section className="shadow-xl">

 
    <header className="  py-4  max-w-7xl mx-auto container flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
     
        <h1 className="text-2xl font-bold font-poppins">Jitendra Rawat</h1>
      </div>

      {/* Navigation Links (Mobile Toggle Button) */}
      <button className="block sm:hidden focus:outline-none">
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links (Hidden on Mobile) */}
      <nav className="hidden sm:block ">
        <ul className="flex space-x-8">
          <li>
          <a href="#about"
              className=" transition duration-300 ease-in-out font-poppins font-semibold text-lg"
            >
              About
            </a>
          </li>
          <li>
          <a href="#projects"
              className=" transition duration-300 ease-in-out  font-poppins font-semibold text-lg"
            >
            Projects
            </a>
          </li>
          <li>
          <a href="#experience"
              className=" transition duration-300 ease-in-out  font-poppins font-semibold text-lg"
            >
         Experience
            </a>
          </li>
          <li>
          <a href="#contact"
              className=" transition duration-300 ease-in-out  font-poppins font-semibold text-lg"
            >
           Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>

    </section>
  );
};

export default Header;
