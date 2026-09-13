import image from "../assets/img.jpg";
import { FaLaptop, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-[#faf9f7] py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={image}
                alt="Profile"
                className="w-full rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-neutral-200 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">About</p>
              <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
                GenAI Engineer with{" "}
                <span className="italic text-neutral-500">4+ years</span> of experience.
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-neutral-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <FaLaptop className="text-neutral-700" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">Experience</h3>
                <p className="text-2xl font-light text-neutral-400 mb-2">4+ Years</p>
                <p className="text-sm text-neutral-500">Software Development</p>
              </div>
              <div className="bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-neutral-100 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                  <FaBook className="text-neutral-700" size={18} />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-1">Education</h3>
                <p className="text-lg font-medium text-neutral-900 leading-snug">B.Tech in Computer Engineering</p>
                <p className="text-sm text-neutral-500 mt-1">GBPUAT Pantnagar · 2015–2018</p>
              </div>
            </div>

            <div className="text-neutral-600 leading-relaxed text-lg space-y-4">
              <p>
                I am a GenAI Engineer with 4+ years of experience building scalable web applications
                and AI-powered solutions. My expertise spans Generative AI, RAG pipelines, LangChain,
                LangGraph, Python, FastAPI, Next.js, React, Node.js, Express.js, and PostgreSQL.
              </p>
              <p>
                I focus on building production-ready applications with clean architecture, high
                performance, and intelligent AI-driven experiences that solve real business problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
