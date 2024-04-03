import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import travel from '../assets/travel.png'
import toy from '../assets/toys.png'
import coaching from '../assets/coaching.png'
import busy from '../assets/busy.png'
import sea from '../assets/sea.png'
import chat from '../assets/chatbot.png'
import ajar from '../assets/ngo.png'
import schoolfees from '../assets/doon.png'
import football from '../assets/football.png'

import blackberry from '../assets/black.png'
import radit from '../assets/radit.png'
import dash from '../assets/dash.png'




const projectsData = [


  {
    title: 'Tour and Travel Web App',
    image:travel,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://busybootstravel.netlify.app/'
  },
  {
    title: 'Toys Based Eccomerce Web App',
    image: toy,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://anshitoys.com/'
  },
  {
    title: 'Radit Software ',
    image: radit,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://radit-software.netlify.app/'
  },
  {
    title: 'Advisory and Consulting Agency ',
    image: coaching,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://www.suigeneriscca.com/'
  },

  {
    title: 'Busy Boots Travel',
    image:busy,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://www.busybootstravel.com/'
  },
  {
    title: 'SeaYo',
    image: sea,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://seay-webapp.netlify.app/'
  },

  {
    title: 'Blackberry Technologies',
    image: blackberry,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://www.blackberrytechnologies.net/'
  },


  {
    title: 'Eccomerce Dashboard ',
    image: dash,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://backend-dashboard-app.netlify.app/'
  },

 


  {
    title: 'ChatBot',
    image: chat,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://main--papermoon-chatbot.netlify.app/'
  },

  {
    title: 'Ajar Blind School Online Fund Management',
    image: ajar,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://ajar-blind-school.netlify.app/'
  },

  {
    title: 'Online School Fees Management Web App',
    image: schoolfees,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://doon-schoolars.netlify.app/'
  },

  {
    title: 'Football Ecommerce Web App',
    image: football,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    link: 'https://football-beast.netlify.app/'
  },

];

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 3;
  const pagesVisited = pageNumber * projectsPerPage;
  const pageCount = Math.ceil(projectsData.length / projectsPerPage);

  const displayProjects = projectsData
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project, index) => (
      <a target='_blank' href={project.link}>   <div key={index} className='shadow-2xl  p-4 rounded-xl w-[400px] h-[400px] mb-8 cursor-pointer'>
        <img className='w-[350px] h-[250px] object-cover rounded-xl' src={project.image} alt={project.title} />
        <div>
          <h2 className='font-poppins font-bold text-lg my-2'>{project.title}</h2>
          {/* <p className='font-poppins mb-2'>{project.description}</p> */}
          <p className='font-poppins font-bold text-base'> <a target='_blank' href={project.link}>{project.link}</a></p>
        </div>
      </div>

      </a>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section id='projects' className='max-w-7xl mx-auto container mt-20'>
      <p className='font-poppins text-gray-700 text-center mb-2'>Explore my Excellent</p>
      <h2 className='font-poppins text-4xl text-center font-bold'>Projects</h2>

      <div className='flex flex-wrap justify-between items-center mt-20'>
        {displayProjects}
      </div>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previous"}
        nextLinkClassName={"next"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
      />
    </section>
  );
};

export default Projects;
