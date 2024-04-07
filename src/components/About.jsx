import React from 'react';
import { FaReact } from 'react-icons/fa';
import image from '../assets/img.jpg'
import { FaLaptop ,FaBook } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className="container mx-auto  lg:max-w-7xl lg:py-28 px-4 lg:px-0 ">

        <h2 className='text-700 font-poppins text-center'>Get to know more </h2>
        <p className='text-900 font-poppins text-center font-bold text-4xl'>About me</p>

      <div className="lg:mt-20 flex flex-col lg:flex-row lg:gap-8 items-start justify-between">

        {/* Left Section */}
        <div className="lg:w-1/3 ">
          <img src={image} alt="Profile" className="w-[300px] lg:w-[400px] h-[500px] object-cover rounded-lg mx-auto" />
        </div>

        {/* Right Section */}
        <div className="lg:w-2/3  ">

            <div className='flex justify-between'>

          
          {/* First Box */}
          <div className="bg-gray-100 rounded-2xl px-4 py-8 lg:w-[400px] h-[300px] mb-2 flex flex-col lg:flex-row items-center">

            <div className='flex flex-col justify-center mx-auto container'>
            <FaLaptop className=" lg:mx-auto" size={30} />
            <div className='flex flex-col mx-auto'>
              <h3 className="text-lg font-semibold font-poppins lg:text-center">Experience</h3>
              <p className="text-gray-500 font-poppins lg:text-center">2.5 + years</p>
              <p className="text-gray-700 font-poppins lg:text-center">Software Development</p>
            </div>

            </div>


          </div>

          {/* Second Box */}

          <div className="bg-gray-100 rounded-2xl px-4 py-8 lg:w-[400px] h-[300px] mb-2 flex flex-col lg:flex-row items-center">

<div className='flex flex-col justify-center mx-auto container'>



<FaBook className=" lg:mx-auto" size={30} />
<div className='flex flex-col mx-auto'>
  <h3 className="text-lg font-semibold font-poppins lg:text-center">Education</h3>
  <p className="text-gray-500 font-poppins lg:text-center">Btech in Computer Engineering</p>
  <p className="text-gray-700 font-poppins lg:text-center">Diploma in Computer Science & Engineering</p>
</div>

</div>


</div>







          </div>



          {/* Paragraph */}
          <p className="text-gray-700 font-poppins py-2 px-4 text-justify lg:text-left">
          As a seasoned MERN Stack developer with over 2.5 years of hands-on experience, coupled with proficiency in React Native, I bring a robust skill set and a passion for crafting innovative solutions. Through my journey, I've honed my abilities in creating scalable web applications and mobile experiences, leveraging MongoDB, Express.js, React, and Node.js. My expertise extends to developing cross-platform mobile applications, enriching user experiences across diverse platforms. With a keen eye for detail and a commitment to excellence, I thrive in collaborative environments, where I contribute my expertise to drive projects forward, delivering impactful solutions that meet and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
