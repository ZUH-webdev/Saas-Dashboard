import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? "bg-slate-950/80 backdrop-blur-xl border-white/5 h-16" 
            : "bg-transparent border-transparent h-24"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* PREMIUM TYPOGRAPHY LOGO (Icon Removed) */}
          <div 
            className="cursor-pointer group flex flex-col" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-2xl font-black tracking-tighter text-white transition-all duration-300 group-hover:tracking-normal">
              NEXUS<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">AI</span>
            </span>
            {/* Subtle underline effect on hover */}
            <div className="h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></div>
          </div>

          {/* CENTER NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {[
              { label: "Features", id: "features" },
              { label: "How it works", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Testimonials", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium tracking-wide uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-6">
            <button className="text-sm font-medium text-slate-400 hover:text-white transition">
              Sign in
            </button>

            {/* CTA TRIGGER */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="relative h-11 px-6 rounded-lg font-semibold text-sm text-white overflow-hidden group shadow-lg shadow-indigo-500/10 active:scale-95 transition-transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-90 group-hover:opacity-100 transition duration-300"></div>
              <div className="absolute inset-[1px] rounded-[7px] bg-slate-950/70 backdrop-blur-sm group-hover:bg-slate-950/50 transition duration-300"></div>
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-400 hover:text-white p-2 transition"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div 
          className={`absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          } lg:hidden`}
        >
          <div className="px-6 py-6 space-y-3">
            {["features", "how-it-works", "pricing", "testimonials"].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="block w-full text-left text-slate-400 hover:text-white py-2.5 text-sm font-medium border-b border-white/[0.02] uppercase tracking-wider"
              >
                {id.replace(/-/g, ' ')}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-2.5 text-slate-400 hover:text-white text-sm font-medium">Sign in</button>
              <button 
                onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                className="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold text-sm transition uppercase tracking-widest"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}