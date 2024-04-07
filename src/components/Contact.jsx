import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
   <section id='contact' className='lg:max-w-7xl mx-auto container lg:my-20'>

    <p className='text-center font-poppins mb-2'>Get in Touch</p>
    <h2 className='font-bold font-poppins text-4xl text-center'>Contact me </h2>

    <div className='mx-auto border-2 border-black py-4 px-8 rounded-full lg:max-w-lg mt-8 flex justify-between items-center'>

<div className='flex flex-col lg:flex-row gap-2 items-center'>

<SiGmail  size={30} />
<p className='font-poppins'>jtendrasingh101010@gmail.com</p>

</div>


<div className='flex flex-col lg:flex-row gap-2 items-center'>

<FaLinkedin size={30} />
<p className='font-poppins'>linkedin</p>

</div>



    </div>


    

   </section>
  )
}

export default Contact