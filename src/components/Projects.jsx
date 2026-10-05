import { FiExternalLink } from "react-icons/fi";
import AnimateOnScroll from "./AnimateOnScroll";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";
import { projects } from "../utils";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll variant="fadeUp" className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">Portfolio</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
            Selected <span className="italic text-neutral-400">Projects</span>
          </h2>
        </AnimateOnScroll>

        {/* ✅ FIX 1: Added grid-cols-1 so mobile explicitly renders in a single column */}
        <StaggerContainer stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <StaggerItem key={i}>
              <a
                href={p.link}
                target={p.link.startsWith("http") ? "_blank" : undefined}
                rel={p.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group block bg-[#faf9f7] border border-neutral-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* ✅ FIX 2: Replaced JS state with group-hover:scale-105 */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105"
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