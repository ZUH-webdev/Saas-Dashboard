import { useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id="solutions" className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-12 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/45 to-blue-200/45 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Solutions</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Move from scattered AI experiments to one intelligent operating system.
          </h2>
          <p className="mt-4 text-slate-600">
            Nexus AI gives your team a clear sequence from integration to autonomous optimization.
          </p>
        </div>

        <div className="grid items-center gap-10 rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.28)] backdrop-blur md:grid-cols-2 md:p-8">
          <div className="space-y-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ x: 3 }}
              className="group rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-5 transition-all"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="inline-flex rounded-xl bg-indigo-50 p-2.5 text-indigo-600">{step.icon}</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">{step.tag}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              <div className={`mt-4 flex items-center gap-2 text-xs font-medium transition-colors ${hoveredIndex === idx ? 'text-indigo-600' : 'text-slate-500'}`}>
                Explore flow <ChevronRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
          </div>

          <div className="relative">
            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_16px_44px_-32px_rgba(15,23,42,0.38)]">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Command Center</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-900">Operational clarity in one timeline.</h3>
              <div className="mt-6 space-y-3">
                {["Signal ingestion complete", "Anomaly cluster identified", "Recommended response pushed"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#3B82F6]" />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-500">AI confidence</p>
                <p className="mt-1 text-2xl font-semibold text-slate-900">98.3%</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_16px_44px_-32px_rgba(15,23,42,0.38)]">
              <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500">Fastest Route</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Response automation in 18s</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}