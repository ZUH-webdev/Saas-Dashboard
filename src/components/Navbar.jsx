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
            ? "rounded-2xl border border-slate-200/90 bg-white/88 px-6 py-2 shadow-[0_16px_48px_-28px_rgba(15,23,42,0.45)] backdrop-blur"
            : "bg-transparent border-transparent px-8 py-0"
        } flex items-center justify-between`}>

          <div
            className="cursor-pointer group flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="text-xl font-semibold tracking-tight text-slate-900">
              Nexus
              <span className="bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] bg-clip-text text-transparent">AI</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10">
            {[
              { label: "Features", id: "features" },
              { label: "Solutions", id: "solutions" },
              { label: "Pricing", id: "pricing" },
              { label: "Customers", id: "customers" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[13px] text-slate-600 hover:text-slate-900 transition-all duration-300 font-medium tracking-wide relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-8">
            <button className="rounded-xl border border-slate-200 px-4 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-white hover:text-slate-900">
              Sign in
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(91,95,255,0.7)] transition-all duration-200 hover:brightness-105 active:scale-95"
            >
              Get Started
              <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-600 hover:text-slate-900 p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full px-4 pt-2 lg:hidden"
            >
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
                <div className="space-y-4">
                  {["features", "solutions", "pricing", "customers"].map((id) => (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className="block w-full text-left text-slate-700 hover:text-slate-900 text-lg font-medium capitalize"
                    >
                      {id.replace(/-/g, " ")}
                    </button>
                  ))}
                  <hr className="border-slate-200 my-4" />
                  <button className="w-full rounded-xl border border-slate-200 py-3 text-slate-700 text-lg font-medium">Sign in</button>
                  <button
                    onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] text-white font-semibold text-lg"
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