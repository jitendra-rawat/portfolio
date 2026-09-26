import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 border-t border-neutral-800">
      <AnimateOnScroll variant="fadeIn" duration={0.5}>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-serif text-xl font-medium">Jitendra Rawat</h2>
            <p className="text-xs text-neutral-500 mt-1">GenAI Engineer · Full Stack Developer</p>
          </div>
          <p className="text-xs text-neutral-600">© 2026</p>
        </div>
      </AnimateOnScroll>
    </footer>
  );
}
