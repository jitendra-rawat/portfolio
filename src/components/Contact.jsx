import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import AnimateOnScroll from "./AnimateOnScroll";
import StaggerContainer, { StaggerItem } from "./StaggerContainer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert("Please fill in all fields.");
    const number = "917895718481";
    const text = `New Contact Message:%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0A`;
    window.open(`https://wa.me/${number}?text=${text}`, "_blank");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-neutral-900 text-white py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <AnimateOnScroll variant="fadeUp" className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.15em] uppercase text-neutral-500 mb-3">Contact</p>
          <h2 className="text-4xl lg:text-5xl font-serif font-medium leading-tight">
            Let's <span className="italic text-neutral-400">connect</span>
          </h2>
        </AnimateOnScroll>

        <StaggerContainer stagger={0.12} className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: SiGmail, label: "Email", value: "jitendrasingh101010@gmail.com", href: "mailto:jtendrasingh101010@gmail.com" },
            { icon: FaLinkedin, label: "LinkedIn", value: "Jitendra Rawat", href: "https://www.linkedin.com/in/jitendra-rawat-10b472121/" },
            { icon: FaPhoneAlt, label: "Phone", value: "+91 78957 18481", href: null },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <a
                href={item.href || undefined}
                target={item.href?.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`block bg-[#151515] border border-neutral-800 rounded-2xl p-8 text-center hover:border-neutral-600 transition-colors ${!item.href ? "pointer-events-none" : ""}`}
              >
                <item.icon size={22} className="mx-auto text-neutral-400 mb-5" />
                <h4 className="text-sm font-medium text-neutral-300 mb-1">{item.label}</h4>
                <p className="text-lg font-light text-white">{item.value}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimateOnScroll variant="fadeUp" delay={0.2}>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input id="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="w-full bg-[#151515] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors" />
              <input id="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full bg-[#151515] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors" />
            </div>
            <textarea id="message" rows={4} placeholder="Your message" value={form.message} onChange={handleChange} className="w-full bg-[#151515] border border-neutral-800 rounded-xl px-5 py-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors resize-none" />
            <button type="submit" className="w-full bg-white text-neutral-900 font-medium py-4 rounded-full hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
              Send Message <IoMdSend size={16} />
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Contact;
