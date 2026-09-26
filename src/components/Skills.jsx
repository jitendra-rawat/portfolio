import { BrainCircuit, Server, Database, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";
import react from "../assets/react.png";
import next from "../assets/nextjs.png";
import js from "../assets/javascript.png";
import ts from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import express from "../assets/express.png";
import ai from "../assets/ai.webp";
import sql from "../assets/sql.webp";

const Skills = () => {
  const categories = [
    {
      title: "Generative AI",
      description: "Building intelligent AI-powered applications",
      icon: BrainCircuit,
      skills: [
        { name: "GenAI", img: ai },
        { name: "RAG", img: ai },
        { name: "LangChain", img: ai },
        { name: "LangGraph", img: ai },
        { name: "LLM", img: ai },
        { name: "Ollama", img: ai },
      ],
    },
    {
      title: "Frontend",
      description: "Modern, responsive user interfaces",
      icon: Sparkles,
      skills: [
        { name: "React.js", img: react },
        { name: "Next.js", img: next },
        { name: "TypeScript", img: ts },
        { name: "JavaScript", img: js },
        { name: "Tailwind CSS", img: tailwind },
      ],
    },
    {
      title: "Backend",
      description: "Scalable APIs and backend systems",
      icon: Server,
      skills: [
        { name: "Python", img: ai },
        { name: "FastAPI", img: ai },
        { name: "Node.js", img: node },
        { name: "Express.js", img: express },
      ],
    },
    {
      title: "Database",
      description: "Reliable data and vector storage",
      icon: Database,
      skills: [
        { name: "PostgreSQL", img: sql },
        { name: "SQL", img: sql },
        { name: "pgvector", img: sql },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-white py-28 lg:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll variant="fadeUp" className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">Capabilities</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
            Technical <span className="italic text-neutral-400">Skills</span>
          </h2>
          <p className="text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed">
            A modern technology stack focused on Generative AI, scalable applications,
            and high-performance web development.
          </p>
        </AnimateOnScroll>

        <StaggerContainer stagger={0.12} className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <StaggerItem key={cat.title}>
                <div className="bg-[#faf9f7] border border-neutral-200/60 rounded-3xl p-8 hover:border-neutral-300 transition-colors duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-900 flex items-center justify-center text-white shadow-lg shadow-neutral-200">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900">{cat.title}</h3>
                      <p className="text-sm text-neutral-500">{cat.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((sk) => (
                      <div
                        key={sk.name}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-neutral-200/60 text-sm font-medium text-neutral-700 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <img src={sk.img} alt={sk.name} className="w-5 h-5 object-contain" />
                        {sk.name}
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Skills;
