import { useState, useEffect } from "react";
import { Play } from "lucide-react"; // Play icon ke liye
import ContactModal from "./ContactModal"; 
import DemoModal from "./DemoModal"; // Naya Demo Modal import karein

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false); // Demo modal ki state

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="relative w-full pt-5 md:pt-8 lg:pt-12 pb-20 md:pb-24 lg:pb-32 overflow-hidden bg-slate-950"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-1/3 w-125 h-125 bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-purple-600/10 rounded-full blur-[120px]" />
        </div>

        {/* GRID OVERLAY */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT */}
            <div className="space-y-8 max-w-xl">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                ✨ Trusted by 10,000+ teams
              </div>

              {/* HEADLINE */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Build faster with{" "}
                <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  AI-native tools
                </span>
              </h1>

              {/* SUBTEXT */}
              <p className="text-lg text-gray-400 leading-relaxed">
                Automate workflows, analyze data, and scale your business with
                powerful AI — all in one platform.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                
                {/* PRIMARY CTA */}
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group active:scale-95 transition-transform"
                >
                  <div className="absolute inset-0 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition" />
                  <div className="absolute inset-px bg-slate-950/60 backdrop-blur rounded-xl" />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </span>
                </button>

                {/* SECONDARY CTA - Demo Modal Trigger */}
                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold transition active:scale-95 flex items-center justify-center gap-2"
                >
                  <Play size={18} fill="currentColor" className="text-indigo-400" />
                  View Demo
                </button>
              </div>

              {/* STATS */}
              <div className="flex gap-10 pt-10 border-t border-white/10">
                <div>
                  <p className="text-3xl font-bold text-white">10K+</p>
                  <p className="text-sm text-gray-500">Users</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="text-sm text-gray-500">Uptime</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white">24/7</p>
                  <p className="text-sm text-gray-500">Support</p>
                </div>
              </div>
            </div>

            {/* RIGHT - PREMIUM DASHBOARD */}
            <div className="relative hidden lg:flex items-center justify-center">

              {/* MAIN CARD */}
              <div
                className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 backdrop-blur-xl p-6 shadow-2xl"
                style={{ transform: `translateY(${scrollY * 0.08}px)` }}
              >
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-xs text-gray-500 font-mono tracking-widest uppercase">Dashboard</p>
                    <p className="text-lg font-semibold text-white mt-1">Analytics</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <span className="text-lg">📊</span>
                  </div>
                </div>

                {/* METRICS */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Revenue</p>
                    <p className="text-xl font-bold text-white mt-1">$24.5K</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Growth</p>
                    <p className="text-xl font-bold text-white mt-1">320%</p>
                  </div>
                </div>

                {/* CHART */}
                <div className="flex items-end gap-1.5 h-24">
                  {[40, 60, 45, 70, 55, 80, 65, 75, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-linear-to-t from-indigo-500 to-indigo-400/20 rounded-t-sm transition-all duration-500"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* FLOATING CARDS */}
              <div
                className="absolute -right-10 top-16 bg-purple-500/10 border border-purple-400/30 backdrop-blur-md px-4 py-3 rounded-xl text-sm text-white font-medium shadow-xl"
                style={{ transform: `translateY(${-scrollY * 0.12}px)` }}
              >
                ⚡ 48ms faster
              </div>

              <div
                className="absolute -left-10 bottom-16 bg-blue-500/10 border border-blue-400/30 backdrop-blur-md px-4 py-3 rounded-xl text-sm text-white font-medium shadow-xl"
                style={{ transform: `translateY(${scrollY * 0.12}px)` }}
              >
                🔒 Enterprise security
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODALS --- */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
    </>
  );
}