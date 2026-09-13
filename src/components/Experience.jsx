import { useState } from "react";
import { Briefcase, GraduationCap, Building2, ChevronDown, ChevronRight } from "lucide-react";

const jobs = [
  {
    company: "Savior",
    role: "Frontend Developer",
    period: "May 2024 – present",
    location: "New York, USA · Remote",
    bullets: [
      "Real Estate Platform — Next.js: Agent, Customer, Builder dashboards with role-based routing/auth. Custom Kanban pipeline with drag-and-drop. Multi-step Agent Registration with Stripe checkout, subscriptions, promo codes. Calendly/Google Calendar scheduling.",
      "Commodities E-Commerce — Next.js: SSR for performance. Secure Stripe API with PCI DSS compliance. Virtual vault for digital assets. RBAC with multiple dashboards. Affiliate tracking, commission calculation.",
      "Real-Time Bidding — Next.js: Resolved critical UI/functional issues. Server Components, dynamic imports, code splitting — 35% faster loads. React memoization + lazy loading. Lighthouse profiling; improved TTI and Core Web Vitals.",
    ],
  },
  {
    company: "AS International",
    role: "Full Stack Developer",
    period: "October 2023 – May 2024",
    location: "Dehradun",
    bullets: [
      "Boat Booking — React.js: Cross-platform responsive design. Real-time booking, payment, auth APIs. Reusable components with state management and availability calendar.",
      "E-Commerce & Portal — React.js & Node.js: Frontend + backend for e-commerce, fee management, NGO donation portal. Scalable React rendering. Node backend with error handling/logging.",
      "Backend API — Node.js, Express.js, PostgreSQL: RESTful APIs with 30% faster response via query optimization. JWT auth/authz. PostgreSQL schema with indexing (99.9% availability). Connection pooling and rate limiting.",
    ],
  },
  {
    company: "Chaperone Solutions LLP",
    role: "Web Developer",
    period: "August 2022 – September 2023",
    location: "Remote",
    bullets: [
      "Dynamic end-to-end web applications for tourism, hospitality, trekking, NGO sectors using React.js, Node.js, Express.js, PostgreSQL.",
      "Built scalable solutions delivering robust performance and responsive UIs. RESTful APIs, database design, frontend architectures.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Computer Engineering",
    school: "Govind Ballabh Pant University of Agriculture and Technology",
    period: "2015 – 2018",
    location: "Pantnagar, Uttarakhand",
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    school: "Government Polytechnic College",
    period: "2013 – 2015",
    location: "Srinagar, Uttarakhand",
  },
];

const projects = [
  {
    title: "DatingKey",
    desc: "Event Management & AI Matchmaking Platform. Full-stack (Next.js, Node.js, Express.js, PostgreSQL). Squarespace payments. Quiz + personality assessments, custom matchmaking algorithm, Google Gemini LLM for AI profile summaries and trait extraction.",
    tags: ["Next.js", "PostgreSQL", "Gemini LLM", "Stripe"],
  },
  {
    title: "Bhagavad Gita AI",
    desc: "AI-Powered RAG Application for Bhagavad Gita Insights. Node.js, Express.js, LangChain, Ollama, PostgreSQL, pgvector. RAG pipeline: PDFs → chunk → embeddings (EmbeddingGemma) → semantic retrieval → Gemma 3 LLM answers.",
    tags: ["LangChain", "Ollama", "pgvector", "RAG"],
  },
];

export default function Experience() {
  const [open, setOpen] = useState(0);

  return (
    <section id="experience" className="bg-[#faf9f7] py-28 lg:py-36 border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-400 mb-3">Career</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium text-neutral-900 leading-tight">
            Experience <span className="italic text-neutral-400">& Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Work */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-xl font-semibold text-neutral-900 flex items-center gap-3 mb-2">
              <Briefcase size={20} className="text-neutral-400" />
              Work Experience
            </h3>
            {jobs.map((j, i) => (
              <div key={i} className="bg-white border border-neutral-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-7 py-6 flex items-start justify-between hover:bg-neutral-50 transition-colors"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h4 className="text-lg font-semibold text-neutral-900">{j.company}</h4>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 border border-neutral-200">{j.role}</span>
                    </div>
                    <p className="text-sm text-neutral-400">{j.period} · {j.location}</p>
                  </div>
                  {open === i ? (
                    <ChevronDown size={18} className="text-neutral-400 shrink-0 mt-0.5" />
                  ) : (
                    <ChevronRight size={18} className="text-neutral-400 shrink-0 mt-0.5" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-7 pb-6 pt-1 space-y-3 border-t border-neutral-100">
                    {j.bullets.map((b, idx) => (
                      <div key={idx} className="flex gap-3 text-sm text-neutral-600 leading-relaxed items-start">
                        <span className="w-1 h-1 rounded-full bg-neutral-300 mt-2 shrink-0" />
                        <p>{b}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education + Projects sidebar */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 flex items-center gap-3 mb-6">
                <GraduationCap size={20} className="text-neutral-400" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((ed, i) => (
                  <div key={i} className="bg-white border border-neutral-200/60 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-semibold text-neutral-900">{ed.degree}</h4>
                    <p className="text-sm text-neutral-500 mt-1">{ed.school}</p>
                    <p className="text-xs text-neutral-400 mt-2">{ed.period} · {ed.location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-neutral-900 flex items-center gap-3 mb-6">
                <Building2 size={20} className="text-neutral-400" />
                Featured Projects
              </h3>
              <div className="space-y-5">
                {projects.map((p, i) => (
                  <div key={i} className="bg-white border border-neutral-200/60 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-semibold text-neutral-900 mb-2">{p.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-600 border border-neutral-200">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
