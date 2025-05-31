import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { FiExternalLink } from 'react-icons/fi';
import travel from '../assets/travel.png';
import toy from '../assets/toys.png';
import coaching from '../assets/coaching.png';
import busy from '../assets/busy.png';
import ajar from '../assets/ngo.png';
import blackberry from '../assets/black.png';
import radit from '../assets/radit.png';
import garhwal from '../assets/garhwal.png';
import bhavishya from '../assets/bhavishya.png';
import le from "../assets/le.png"
import rajput from "../assets/rajput.png"
import romaz from "../assets/romaz.png"
import rud from "../assets/rud.png"
import drona from '../assets/drona.png'
import tour from '../assets/touruttrakhandtravels.png'
import pashupati from '../assets/pashupati.png'
import icg from '../assets/icg.png'
import asi from '../assets/asi.png'


const projectsData = [

  { 
    title: 'Tour Uttrakhand Travels', 
    image:tour, 
    link: 'https://tour-uttrakhand.vercel.app/',
    category: 'Travels'
  },
 
  { 
    title: 'Hotel Le Meadows', 
    image: le, 
    link: 'https://hotel-lemeadows.vercel.app/',
    category: 'Hotel'
  },
  { 
    title: 'Innocreate Design', 
    image: icg, 
    link: 'https://www.hoteldronahills.in/',
    category: 'Product Design Company'
  },
  { 
    title: 'Hotel Pashupati Palace', 
    image: pashupati, 
    link: 'https://www.pashupatipalace.in/',
    category: 'Hotel'
  },
  { 
    title: 'Hotel Drona Hills', 
    image: drona, 
    link: 'https://www.hoteldronahills.in/',
    category: 'Hotel'
  },
  { 
    title: 'Anshit Toys', 
    image: toy, 
    link: 'https://anshitoys.com/',
    category: 'E-commerce'
  },
  { 
    title: 'ASI Network', 
    image: asi, 
    link: 'https://asinetwork.in/',
    category: 'Technology'
  },
  { 
    title: 'Blackberry Technologies', 
    image: blackberry, 
    link: 'https://www.blackberrytechnologies.net/',
    category: 'Technology'
  },

  { 
    title: 'Hotel Rajput', 
    image: rajput, 
    link: 'https://hotelrajput.in/',
    category: 'Hotel'
  },
  { 
    title: 'Busy Boots Travel', 
    image: busy, 
    link: 'https://busybootstravel.vercel.app/',
    category: 'Travel'
  },
  { 
    title: 'Hotel Romaz', 
    image: romaz, 
    link: 'https://hotelromaz.in/',
    category: 'Hotel'
  },
  { 
    title: 'Rudransh Guest House', 
    image: rud, 
    link: 'https://www.rudranshguesthouse.in/',
    category: 'Hotel'
  },
  { 
    title: 'Garhwal Himalayan Homestay', 
    image: garhwal, 
    link: 'https://www.garhwalhimalayanhomestay.in/',
    category: 'Travel & Hospitality'
  },
  { 
    title: 'Bhavishya Badri Homestay', 
    image: bhavishya, 
    link: 'https://www.newbhavisyabadrihomestay.in/',
    category: 'Travel & Hospitality'
  },
  { 
    title: 'Tour and Travel Web App', 
    image: travel, 
    link: 'https://busybootstravel.netlify.app/',
    category: 'Travel'
  },
 
  { 
    title: 'Radit Software', 
    image: radit, 
    link: 'https://radit-software.netlify.app/',
    category: 'Corporate Website'
  },
  { 
    title: 'Advisory and Consulting Agency', 
    image: coaching, 
    link: 'https://www.suigeneriscca.com/',
    category: 'Professional Services'
  },
 

  { 
    title: 'Ajar Blind School', 
    image: ajar, 
    link: 'https://ajar-blind-school.netlify.app/',
    category: 'Non-Profit'
  },
];

const Projects = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 6;
  const pagesVisited = pageNumber * projectsPerPage;
  const pageCount = Math.ceil(projectsData.length / projectsPerPage);

  const displayProjects = projectsData
    .slice(pagesVisited, pagesVisited + projectsPerPage)
    .map((project, index) => (
      <div
        key={`${project.title}-${index}`}
        className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-2">
                  {project.category}
                </span>
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiExternalLink className="text-gray-800" />
            </div>
          </div>
        </a>
      </div>
    ));

  const changePage = ({ selected }) => setPageNumber(selected);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 lg:px-8 py-20 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 rounded-full bg-purple-400 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-lg font-poppins text-gray-500 mb-2">Explore My</p>
        <h2 className="text-4xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Featured Projects
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          A collection of my recent work showcasing diverse solutions across different industries
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {displayProjects}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex justify-center mt-16">
          <ReactPaginate
            previousLabel={
              <span className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors">
                Previous
              </span>
            }
            nextLabel={
              <span className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition-colors">
                Next
              </span>
            }
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName="flex gap-2 items-center"
            pageLinkClassName="w-10 h-10 flex items-center justify-center rounded-lg border hover:bg-gray-100 transition-colors font-medium"
            previousLinkClassName="font-poppins"
            nextLinkClassName="font-poppins"
            activeLinkClassName="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-transparent"
            disabledLinkClassName="opacity-50 cursor-not-allowed hover:bg-transparent"
          />
        </div>
      )}
    </section>
  );
};

export default Projects;