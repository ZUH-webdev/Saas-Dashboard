import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Zap, BarChart, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const steps = [
    {
      title: "Seamless Integration",
      desc: "Connect your existing data sources with a single line of code. No migration required.",
      icon: <MousePointer2 className="w-5 h-5" />,
      tag: "Step 01"
    },
    {
      title: "Autonomous Analysis",
      desc: "Our neural engine identifies patterns and anomalies that human eyes miss.",
      icon: <Zap className="w-5 h-5" />,
      tag: "Step 02"
    },
    {
      title: "Real-time Intelligence",
      desc: "Instant dashboards and automated reporting delivered to your stakeholders.",
      icon: <BarChart className="w-5 h-5" />,
      tag: "Step 03"
    }
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* 1. PREMIUM BACKGROUND: MASKED GRID & RADIAL GAUSSIAN BLURS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER: AGENCY TYPOGRAPHY */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            Our Methodology
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            Engineered for <br /> 
            <span className="text-slate-500">unparalleled speed.</span>
          </h2>
        </div>

        {/* INTERACTIVE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              {/* THE "GLOW" BORDER EFFECT */}
              <div className={`absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${hoveredIndex === idx ? 'opacity-100' : ''}`} />
              
              <div className="relative h-full bg-[#030712]/80 backdrop-blur-xl rounded-[23px] border border-white/5 p-8 flex flex-col justify-between overflow-hidden">
                {/* Spotlight Background Effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-[60px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-12">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <span className="font-mono text-[10px] text-slate-600 tracking-widest">{step.tag}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-500 group-hover:text-white transition-colors cursor-pointer">
                  EXPLORE FEATURE <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALLOUT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <div className="px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-6">
            <span className="text-slate-400 text-sm">Want to see the full architecture?</span>
            <button className="px-6 py-2 bg-white text-black rounded-full text-xs font-bold hover:bg-slate-200 transition-colors">
              View Whitepaper
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}