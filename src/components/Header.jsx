import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="shadow-xl">
      <header className="py-2 lg:py-4 max-w-xs lg:max-w-7xl mx-auto container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-xl lg:text-2xl font-bold font-poppins">Jitendra Rawat</h1>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="block sm:hidden focus:outline-none  p-2"
          onClick={toggleMenu}
        >
        <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg>


        </button>

        {/* Navigation Links */}
        <nav className="hidden sm:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Navigation Links (Hidden on Desktop) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute max-w-xs mx-auto container top-16 right-0 bg-white z-10 p-4 rounded-md shadow-md"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  href="#about"
                  className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition duration-300 ease-in-out font-poppins font-semibold text-lg"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Header;
