import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "DatingKey",
    category: "Event · AI Matchmaking",
    image: "/src/assets/datingkey.png",
    link: "https://datingkey.co/",
    desc: "Full-stack event & matchmaking platform with Squarespace payments, quiz assessments, and Gemini LLM-powered profile summaries.",
  },
  {
    title: "Outdoor Trek India",
    category: "Travel",
    image: "/src/assets/outdoor.png",
    link: "https://outdoortrekindia.com/",
    desc: "Adventure travel platform with responsive design, booking flows, and destination guides.",
  },
  {
    title: "Hotel River Vale",
    category: "Hotel",
    image: "/src/assets/rivervale.png",
    link: "https://hotelrivervale.com/",
    desc: "Hospitality website with reservation system, property showcases, and clean landing pages.",
  },
  {
    title: "Anandam Homestay",
    category: "Travel",
    image: "/src/assets/anand.png",
    link: "https://anandamwoodhomestay.in/",
    desc: "Homestay & trekking experience site with booking integration and destination visuals.",
  },
  {
    title: "Prakriti Hill Resort",
    category: "Hotel",
    image: "/src/assets/hill.png",
    link: "#",
    desc: "Resort landing page with property tours, amenities, and contact details.",
  },
  {
    title: "Dev Palace",
    category: "Hotel",
    image: "/src/assets/dev.png",
    link: "#",
    desc: "Luxury hotel website with gallery, services, and room showcases.",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
            Selected <span className="italic text-neutral-400">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
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
          ))}
        </div>
      </div>
    </section>
  );
}
