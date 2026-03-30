import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between font-sans">
        
        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Custom Logo */}
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm tracking-wide">
              N
            </span>
            <div className="absolute inset-0 rounded-xl bg-white/10 blur-xl opacity-40 group-hover:opacity-70 transition"></div>
          </div>

          {/* Brand Name */}
          <span className="text-white font-semibold text-lg tracking-tight">
            NexusAI
          </span>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "Features", id: "features" },
            { label: "How it works", id: "how-it-works" },
            { label: "Pricing", id: "pricing" },
            { label: "Testimonials", id: "testimonials" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-gray-400 hover:text-white transition duration-200 font-medium tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-5">
          <button className="text-sm text-gray-400 hover:text-white transition">
            Sign in
          </button>

          {/* PREMIUM CTA BUTTON */}
          <button className="relative px-6 py-2.5 rounded-xl font-semibold text-sm text-white overflow-hidden group">
            
            {/* Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition"></div>

            {/* Glass Overlay */}
            <div className="absolute inset-[1px] rounded-xl bg-slate-950/60 backdrop-blur-xl"></div>

            {/* Text */}
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </span>
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-slate-950/95 backdrop-blur-xl">
          <div className="px-6 py-6 space-y-4 max-w-7xl mx-auto">
            {[
              { label: "Features", id: "features" },
              { label: "How it works", id: "how-it-works" },
              { label: "Pricing", id: "pricing" },
              { label: "Testimonials", id: "testimonials" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-gray-400 hover:text-white py-2 text-sm"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button className="w-full py-2 text-gray-400 hover:text-white text-sm">
                Sign in
              </button>

              <button className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}