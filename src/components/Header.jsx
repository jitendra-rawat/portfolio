export default function Header() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#faf9f7]/90 backdrop-blur-md border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-serif font-medium text-neutral-900 tracking-tight">Jitendra Rawat</a>
        <nav className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors uppercase tracking-widest">{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
