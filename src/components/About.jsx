import image from "../assets/img.jpg";
import { FaLaptop, FaBook } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="container mx-auto lg:max-w-7xl py-16 lg:py-28 px-4 lg:px-8"
    >
      <div className="text-center mb-16">
        <p className="text-gray-600 font-poppins text-lg mb-2">
          Get to know more
        </p>
        <h2 className="text-gray-900 font-poppins font-bold text-3xl lg:text-4xl">
          About Me
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* Left Section - Image */}
        <div className="lg:w-2/5 flex justify-center">
          <div className="relative group">
            <img
              src={image}
              alt="Profile"
              className="w-[280px] lg:w-[500px] h-[420px] lg:h-[600px] object-cover rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 border-2 border-gray-200 rounded-xl pointer-events-none transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-300"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="lg:w-3/5 space-y-8">
          {/* Experience & Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="bg-blue-100 p-4 rounded-full">
                  <FaLaptop className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-gray-800">
                    Experience
                  </h3>
                  <p className="text-blue-600 font-medium mt-1">4+ Years</p>
                  <p className="text-gray-600 mt-2">Software Development</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center space-y-4 h-full">
                <div className="bg-purple-100 p-4 rounded-full">
                  <FaBook className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-poppins text-gray-800">
                    Education
                  </h3>
                  <p className="text-purple-600 font-medium mt-1">
                    B.Tech in Computer Engineering (2014)
                  </p>
          
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-700 font-poppins leading-relaxed">
              I am a dedicated Full Stack Developer with 4 years of hands-on
              experience in designing and delivering modern, scalable digital
              solutions. My technical expertise includes React, Next.js,
              Node.js, Express.js, SQL, PostreSQL <br />
              I develop robust web applications and cross-platform mobile solutions 
               with a strong focus on clean architecture,
              performance optimization, and intuitive user experience. 
              <br />I also
              work with Generative AI technologies, integrating AI-driven
              features to enhance product capabilities, automate workflows, and
              create smarter user interactions. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
