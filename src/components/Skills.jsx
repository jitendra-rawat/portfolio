import React from 'react'
import {FaReact} from 'react-icons/fa'
import { MdBrightness1 } from "react-icons/md";

const Skills = () => {
  return (
    <section id='skills' className='max-w-7xl mx-auto  container my-16'>

      <p className='text-gray-700 font-poppins text-center mb-4'>Explore my Skills</p>
        <h2 className='font-poppins text-4xl font-bold text-black text-center'>Skills</h2>


        <div className='flex flex-col lg:flex-row justify-between gap-8 items-center mt-16'>


            {/* first box */}


            <div className='lg:w-1/2 border-2 border-black rounded-xl p-4 lg:py-12 lg:px-12'>
                <p className='font-poppins text-2xl text-center'>Front end Development</p>


<div className='flex justify-between'>

               {/* first points */}

                     <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Reactjs</p>


                </div>
                <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>React-Native</p>


                </div>
                </div>


                 {/* second points */}


                 <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Javascript</p>


                </div>
                <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Tailwind CSS</p>


                </div>
                </div>


                 {/* third points */}

                 <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Tailwind CSS</p>


                </div>
                <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>HTML</p>


                </div>
                </div>


                </div>
           
                

            </div>





            {/* second box */}

            <div className='lg:w-1/2 border-2 border-black rounded-xl lg:py-12 p-4 lg:px-12'>
                <p className='font-poppins text-2xl text-center'>Back-end Development</p>


<div className='flex justify-between'>

               {/* first points */}

                     <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Nodejs</p>


                </div>


                {/* <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Expressjs</p>


                </div> */}


                </div>


                 {/* second points */}


                 <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>ExpressJS</p>


                </div>
                <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Firebase</p>


                </div>
                </div>


                 {/* third points */}

                 <div>
                  <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>MongoDB</p>


                </div>
                {/* <div className='flex items-center gap-2 mt-10'>
                <MdBrightness1 />
                <p className='text-xl font-poppins'>Reactjs</p>


                </div> */}
                </div>


                </div>
           
                

            </div>





        </div>

    </section>
  )
}

export default Skills