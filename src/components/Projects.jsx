import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import AnimateOnScroll from "./AnimateOnScroll";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

// 1. Import all images here
// Adjust the relative path (../assets/ or ./assets/) based on where this component is located
import datingKeyImg from "../assets/datingkey.png";
import outdoorImg from "../assets/outdoor.png";
import blackImg from "../assets/black.png";
import riverValeImg from "../assets/rivervale.png";
import icgImg from "../assets/icg.png";
import raditImg from "../assets/radit.png";
import hondaImg from "../assets/honda.png";
import anandImg from "../assets/anand.png";
import hillImg from "../assets/hill.png";
import leImg from "../assets/le.png";
import leDetailsImg from "../assets/le-details.png";
import devImg from "../assets/dev.png";

// 2. Use the imported variables in your data array (no quotes)
const projects = [
  {
    title: "DatingKey",
    category: "Event · AI Matchmaking",
    image: datingKeyImg,
    link: "https://datingkey.co/",
    desc: "Full-stack event & matchmaking platform with Squarespace payments, quiz assessments, and Gemini LLM-powered profile summaries.",
  },
  {
    title: "Outdoor Trek India",
    category: "Travel",
    image: outdoorImg,
    link: "https://outdoortrekindia.com/",
    desc: "Adventure travel platform with responsive design, booking flows, and destination guides.",
  },
  {
    title: "Blackberry Technologies",
    category: "IT Company",
    image: blackImg,
    link: "https://www.blackberrytechnologies.net/",
    desc: "Corporate IT services platform showcasing enterprise software solutions, technical consulting, and digital transformation capabilities.",
  },
  {
    title: "Hotel River Vale",
    category: "Hotel",
    image: riverValeImg,
    link: "https://hotelrivervale.com/",
    desc: "Hospitality website with reservation system, property showcases, and clean landing pages.",
  },
  {
    title: "Innocreate Design",
    category: "Product Design Company",
    image: icgImg,
    link: "https://innocreate-design.netlify.app/",
    desc: "Creative agency portfolio featuring UX/UI case studies, branding services, and modern interactive web design.",
  },
  {
    title: "Raddit Software",
    category: "Software Company",
    image: raditImg,
    link: "https://radit-software.netlify.app/",
    desc: "B2B software solutions provider highlighting custom development services, technology stacks, and client success stories.",
  },
  {
    title: "Honda Showroom",
    category: "Automotive",
    image: hondaImg,
    link: "https://www.aashirwadhondashowroom.in/",
    desc: "Dealership website featuring a digital showroom, vehicle specifications, inquiry forms, and test-drive booking features.",
  },
  {
    title: "Anandam Homestay",
    category: "Travel",
    image: anandImg,
    link: "https://anandamwoodhomestay.in/",
    desc: "Homestay & trekking experience site with booking integration and destination visuals.",
  },
  {
    title: "Prakriti Hill Resort",
    category: "Hotel",
    image: hillImg,
    link: "https://www.prakritihillresort.in/",
    desc: "Resort landing page with property tours, amenities, and contact details.",
  },
  {
    title: "Hotel Le Meadows",
    category: "Hotel",
    image: leImg,
    link: "https://lee-meadows.vercel.app/",
    desc: "Luxury hotel website with detailed photo galleries, service listings, and immersive room showcases.",
  },
  {
    title: "Le Meadows Landing Page",
    category: "Hotel",
    image: leDetailsImg,
    link: "https://www.lemeadowsb2bdetails.in/",
    desc: "High-converting B2B hospitality landing page tailored for travel agents and corporate event bookings.",
  },
  {
    title: "Dev Palace",
    category: "Hotel",
    image: devImg,
    link: "https://devpalace.in/",
    desc: "Elegant hospitality platform highlighting premium accommodations, event banquet spaces, and direct guest reservation capabilities.",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll variant="fadeUp" className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
            Selected <span className="italic text-neutral-400">Projects</span>
          </h2>
        </AnimateOnScroll>

        <StaggerContainer stagger={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <StaggerItem key={i}>
              <a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="group block bg-[#faf9f7] border border-neutral-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hovered === i ? "scale-105" : "scale-100"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-7 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold tracking-wider uppercase text-neutral-400">{p.category}</span>
                    <FiExternalLink size={14} className="text-neutral-300 group-hover:text-neutral-900 transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">{p.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}