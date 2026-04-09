import { useState, useRef } from "react";
import { Play, ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ContactModal from "./ContactModal"; 
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full min-h-screen pt-32 pb-20 overflow-hidden bg-[#020617]"
      >
        {/* PREMIUM BACKGROUND ARTIFACTS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* LEFT CONTENT */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-10 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                <Sparkles size={12} className="animate-pulse" />
                <span>Next-Gen Infrastructure</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
                Build <span className="text-slate-500 italic">Faster</span> <br />
                <span className="bg-gradient-to-r from-white to-indigo-400 text-transparent bg-clip-text">
                  AI-Native Intelligence
                </span>
              </h1>

              <p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                The automation engine for high-growth teams. Stop fighting legacy workflows and start scaling with neural-optimized logic.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-white text-black font-black text-xs uppercase tracking-widest rounded-full hover:bg-indigo-50 transition-all active:scale-95 w-full sm:w-auto"
                >
                  Get Started Free
                </button>

                <button 
                  onClick={() => setIsDemoOpen(true)}
                  className="px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-black uppercase tracking-widest transition-all backdrop-blur-sm flex items-center justify-center gap-3 w-full sm:w-auto"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <Play size={12} fill="currentColor" className="text-indigo-400 ml-0.5" />
                  </div>
                  Watch Demo
                </button>
              </div>

              {/* REFINED LOGO STRIP */}
              <div className="pt-16 border-t border-white/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-600 mb-8">Powering the Elite</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-12 gap-y-6 opacity-30">
                   {['ACME', 'VERTEX', 'NEXUS', 'PRIME'].map((name) => (
                     <span key={name} className="text-sm font-black text-white tracking-tighter italic">{name}</span>
                   ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div 
              style={{ y: y1 }}
              className="flex-1 relative w-full group"
            >
              {/* Main Dashboard Mock */}
              <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0a0f1d] p-3 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent pointer-events-none" />
                
                {/* Internal Browser UI */}
                <div className="bg-[#020617] rounded-[1.8rem] border border-white/5 overflow-hidden">
                  <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                      <div className="w-2 h-2 rounded-full bg-white/10" />
                    </div>
                    <div className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">Nexus Operational Center</div>
                    <div className="w-4 h-4 bg-indigo-500/20 rounded-sm" />
                  </div>
                  
                  <div className="p-8 space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Velocity</span>
                        <div className="text-4xl font-black text-white tracking-tighter">+128.4%</div>
                      </div>
                      <div className="px-3 py-1 bg-indigo-500 text-black text-[10px] font-black rounded-full">ACTIVE</div>
                    </div>

                    <div className="flex items-end gap-3 h-40">
                      {[40, 70, 45, 90, 65, 80, 100, 60].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1.5, delay: i * 0.1, ease: "circOut" }}
                          className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400/10 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FLOATING STATUS CARDS */}
              <motion.div 
                style={{ y: y2 }}
                className="absolute -top-10 -right-8 p-5 bg-[#0a0f1d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Infrastructure</div>
                    <div className="text-xs text-white font-bold tracking-tight">Verified Lvl 4</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                style={{ y: y1 }}
                className="absolute -bottom-6 -left-8 p-5 bg-[#0a0f1d]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl hidden md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Neural Latency</div>
                    <div className="text-xs text-white font-bold tracking-tight">0.02ms Peak</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </>
  );
}