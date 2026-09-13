import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import hero_img from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-[#faf9f7] overflow-hidden"
    >
      {/* Subtle decorative circle */}
      <div className="absolute top-[-10%] right-[-10%] w-[70vh] h-[70vh] rounded-full bg-[#f0eeeb] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vh] h-[40vh] rounded-full bg-[#ebeae6] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-16 items-center py-28">
        {/* Text */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-block">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400">
              GenAI Engineer · Full Stack Developer
            </span>
          </div>

          <h1 className="text-5xl lg:text-8xl font-serif font-medium text-neutral-900 leading-[0.92] tracking-tight">
            Jitendra{" "}
            <span className="italic text-neutral-500">Rawat</span>
          </h1>

          <p className="text-lg lg:text-xl text-neutral-500 max-w-xl leading-relaxed font-sans font-light">
            Building intelligent, scalable digital products by combining Generative AI,
            modern web technologies, and clean production-ready code.
          </p>

          <div className="flex gap-6 pt-4">
            <a href="#contact">
              <button className="bg-neutral-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-sm hover:shadow-md">
                Get in touch
              </button>
            </a>
            <a href="#experience">
              <button className="text-neutral-900 border border-neutral-200 bg-white text-sm font-medium px-8 py-4 rounded-full hover:border-neutral-400 transition-all duration-300">
                View experience
              </button>
            </a>
          </div>

          <div className="flex gap-5 pt-4">
            <a
              href="https://www.linkedin.com/in/jitendra-rawat-10b472121/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/jitendra-rawat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative">
            <img
              src={hero_img}
              alt="Jitendra Rawat"
              className="w-[320px] lg:w-[400px] rounded-[3rem] object-cover shadow-[0_32px_60px_-12px_rgba(0,0,0,0.12)] rotate-[1deg] hover:rotate-0 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 rounded-[3rem] border border-neutral-200/60 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-300">
        <span className="text-[10px] tracking-[0.25em] uppercase font-medium">Scroll</span>
        <a href="#about" aria-label="Scroll down">
          <FaArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
