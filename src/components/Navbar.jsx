import { useState, useEffect } from "react";
import { X, Menu, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-3 px-4" 
            : "py-6 px-0"
        }`}
      >
        <div className={`mx-auto max-w-7xl transition-all duration-500 ${
          isScrolled 
            ? "bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-2 shadow-2xl shadow-indigo-500/10" 
            : "bg-transparent border-transparent px-8 py-0"
        } flex items-center justify-between`}>
          
          {/* LOGO */}
          <div 
            className="cursor-pointer group flex items-center gap-2" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-bold tracking-tight text-white">
              NEXUS<span className="text-indigo-500 italic">AI</span>
            </span>
          </div>

          {/* NAV LINKS - Refined Typography */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: "Features", id: "features" },
              { label: "Solutions", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Customers", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[13px] text-slate-400 hover:text-white transition-all duration-300 font-medium tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-[13px] font-medium text-slate-300 hover:text-white transition">
              Sign in
            </button>

            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-500 active:scale-95 shadow-lg shadow-indigo-600/20"
            >
              Get Started
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-300 hover:text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU WITH ANIMATION */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full px-4 pt-2 lg:hidden"
            >
              <div className="bg-slate-950 border border-white/10 rounded-2xl p-6 shadow-3xl">
                <div className="space-y-4">
                  {["features", "how-it-works", "pricing", "testimonials"].map((id) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="block w-full text-left text-slate-300 hover:text-white text-lg font-medium capitalize"
                    >
                      {id.replace(/-/g, ' ')}
                    </button>
                  ))}
                  <hr className="border-white/5 my-4" />
                  <button className="w-full py-3 text-slate-300 text-lg font-medium">Sign in</button>
                  <button 
                    onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                    className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-lg"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}