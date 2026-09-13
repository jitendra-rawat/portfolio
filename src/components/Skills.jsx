import { BrainCircuit, Server, Database, Sparkles } from "lucide-react";
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
  const skillCategories = [
    {
      title: "Generative AI",
      description: "Building intelligent AI-powered applications",
      icon: BrainCircuit,
      gradient: "from-violet-500 to-fuchsia-500",
      skills: [
        { name: "GenAI", image: ai },
        { name: "RAG", image: ai },
        { name: "LangChain", image: ai },
        { name: "LangGraph", image: ai },
        { name: "LLM", image: ai },
        { name: "Ollama", image: ai },
      ],
    },
    {
      title: "Frontend",
      description: "Modern, responsive user interfaces",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", image: react },
        { name: "Next.js", image: next },
        { name: "TypeScript", image: ts },
        { name: "JavaScript", image: js },
        { name: "Tailwind CSS", image: tailwind },
      ],
    },
    {
      title: "Backend",
      description: "Scalable APIs and backend systems",
      icon: Server,
      gradient: "from-emerald-500 to-teal-500",
      skills: [
        { name: "Python", image: ai },
        { name: "FastAPI", image: ai },
        { name: "Node.js", image: node },
        { name: "Express.js", image: express },
      ],
    },
    {
      title: "Database",
      description: "Reliable data and vector storage",
      icon: Database,
      gradient: "from-orange-500 to-amber-500",
      skills: [
        { name: "PostgreSQL", image: sql },
        { name: "SQL", image: sql },
        { name: "pgvector", image: sql },
      ],
    },
  ];
  return (
    <section
      id="skills"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 overflow-hidden"
    >
      {" "}
      {/* Background */}{" "}
      <div className="absolute inset-0 -z-10">
        {" "}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />{" "}
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />{" "}
      </div>{" "}
      {/* Header */}{" "}
      <div className="text-center mb-16">
        {" "}
     
        <h2 className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900">
          {" "}
          Technical{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            {" "}
            Skills{" "}
          </span>{" "}
        </h2>{" "}
        <p className="max-w-2xl mx-auto mt-5 text-gray-500 font-poppins">
          {" "}
          A modern technology stack focused on Generative AI, scalable
          applications, and high-performance web development.{" "}
        </p>{" "}
      </div>{" "}
      {/* Skill Categories */}{" "}
      <div className="grid md:grid-cols-2 gap-6">
        {" "}
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="group relative bg-white/70 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {" "}
              {/* Gradient border glow */}{" "}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />{" "}
              {/* Category Header */}{" "}
              <div className="relative flex items-center gap-4 mb-7">
                {" "}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-lg`}
                >
                  {" "}
                  <Icon size={22} />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <h3 className="text-xl font-bold font-poppins text-gray-900">
                    {" "}
                    {category.title}{" "}
                  </h3>{" "}
                  <p className="text-sm text-gray-500 font-poppins mt-1">
                    {" "}
                    {category.description}{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              {/* Skills */}{" "}
              <div className="relative flex flex-wrap gap-3">
                {" "}
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gray-50/80 border border-gray-200 hover:bg-white hover:border-gray-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    {" "}
                    <div className="w-7 h-7 flex items-center justify-center">
                      {" "}
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                      />{" "}
                    </div>{" "}
                    <span className="text-sm font-semibold text-gray-700 font-poppins">
                      {" "}
                      {skill.name}{" "}
                    </span>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
     
    </section>
  );
};
export default Skills;
