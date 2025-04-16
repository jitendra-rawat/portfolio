import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative lg:min-h-screen flex items-center justify-center py-16 lg:py-0 px-4 lg:px-0 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-400 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-purple-400 blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24 relative z-10">
        {/* Left Section */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <p className="font-poppins text-lg lg:text-xl font-semibold text-gray-600 mb-2 animate-fadeIn">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-2 animate-fadeIn">
            Jitendra Rawat
          </h1>
          <p className="text-xl lg:text-2xl font-semibold font-poppins text-gray-600 mb-6 animate-fadeIn">
            Full Stack Developer
          </p>
          
          <p className="text-gray-600 font-poppins max-w-lg mx-auto lg:mx-0 mb-8 animate-fadeIn">
            Crafting digital experiences with clean code and modern technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8 animate-fadeIn">
            <a href="#contact" className="group">
              <button className="bg-gray-800 hover:bg-gray-700 text-white font-poppins rounded-full text-sm lg:text-base font-medium py-3 px-6 lg:px-8 transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl">
                Contact Me
              </button>
            </a>
            <a href="#projects" className="group">
              <button className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-300 font-poppins rounded-full text-sm lg:text-base font-medium py-3 px-6 lg:px-8 transition-all duration-300 transform group-hover:-translate-y-1 shadow-lg group-hover:shadow-xl">
                View Projects
              </button>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-6 animate-fadeIn">
            <Link 
              to={'https://www.linkedin.com/in/jitendra-rawat-10b472121/'} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link 
              to={'https://github.com/jitendra-rawat'} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 flex justify-center animate-float">
          <div className="relative">
            <img
              src='https://avatars.githubusercontent.com/u/120551529?v=4'
              alt="Jitendra Rawat"
              className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-4 border-white shadow-2xl"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping-slow pointer-events-none"></div>
            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full shadow-lg">
              Available
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <FaArrowDown className="text-gray-600" size={24} />
      </div>

      {/* Add these to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 6s ease-in-out 1s infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </section>
  );
};

export default Hero;