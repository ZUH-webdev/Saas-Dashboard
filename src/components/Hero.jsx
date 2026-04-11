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
        className="relative w-full overflow-hidden px-5 pb-16 pt-24 sm:px-6 md:px-10 md:pb-20 md:pt-32"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-1/2 top-10 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/55 via-violet-200/55 to-blue-200/55 blur-3xl" />
          <div className="absolute inset-x-0 top-8 h-[55%] bg-[url('/neural-pattern.svg')] bg-cover bg-top opacity-[0.22]" />
          <div className="absolute -right-14 top-1/3 h-48 w-48 rounded-full border border-slate-200 bg-white/70 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.45)]" />
          <div className="absolute -left-16 bottom-20 h-56 w-56 rounded-full border border-slate-200/80 bg-white/60 shadow-[0_20px_50px_-36px_rgba(15,23,42,0.45)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/85 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm">
                <Sparkles size={12} className="text-indigo-500" />
                <span>AI Operating Layer</span>
              </div>

              <h1 className="text-[2.35rem] font-semibold leading-[0.95] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                Ship Reliable
                <br />
                <span className="bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] bg-clip-text text-transparent">
                  AI Products Faster
                </span>
              </h1>

              <p className="mx-auto max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                Nexus AI gives product and engineering teams one operating layer for orchestration, evaluation, and automation so every release drives measurable business impact.
              </p>

              <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative w-full rounded-xl bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_20px_48px_-24px_rgba(91,95,255,0.75)] transition-all duration-300 hover:brightness-105 active:scale-[0.99] sm:w-auto"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => setIsDemoOpen(true)}
                  className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white/85 px-7 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                    <Play size={12} fill="currentColor" className="ml-0.5" />
                  </div>
                  See 60s Demo
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4 lg:justify-start">
                {["Enterprise-grade", "SOC2 Ready", "99.99% Uptime"].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="grid max-w-xl grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur sm:grid-cols-3">
                {[
                  { label: "Inference speed", value: "42ms" },
                  { label: "Model uptime", value: "99.99%" },
                  { label: "Automations/day", value: "1.8M" },
                ].map((item) => (
                  <div key={item.label} className="text-left">
                    <p className="text-lg font-semibold text-slate-900">{item.value}</p>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: y1 }} className="relative">
              <div className="relative rounded-[2rem] border border-slate-200 bg-white/90 p-3 shadow-[0_26px_80px_-36px_rgba(15,23,42,0.34)] backdrop-blur">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-100/45 via-transparent to-blue-100/45" />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white">
                  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
                    <div className="flex gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                    </div>
                    <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">Nexus AI Control</div>
                    <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                      Live
                    </div>
                  </div>

                  <div className="space-y-6 p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs text-slate-500">Forecast precision</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900">97.6%</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                        <p className="text-xs text-slate-500">Workflow success</p>
                        <p className="mt-2 text-2xl font-semibold text-slate-900">+128%</p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-xs font-medium text-slate-500">Decision throughput</p>
                        <p className="text-xs text-slate-400">Last 24h</p>
                      </div>
                      <div className="flex h-28 items-end gap-2">
                        {[36, 54, 46, 72, 63, 58, 80, 93].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.7, delay: i * 0.06 }}
                            className="flex-1 rounded-full bg-gradient-to-t from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6]/40"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                      <p className="text-xs font-medium text-slate-500">AI workflow</p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-slate-600">
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">Ingest</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                        <span className="rounded-full bg-violet-100 px-2 py-1 text-violet-700">Reason</span>
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                        <span className="rounded-full bg-indigo-100 px-2 py-1 text-indigo-700">Act</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                style={{ y: y2 }}
                className="absolute -right-5 -top-8 hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_52px_-34px_rgba(15,23,42,0.42)] md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                    <ShieldCheck size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Infrastructure</div>
                    <div className="text-xs font-medium text-slate-800">Verified Level 4</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ y: y1 }}
                className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-[0_20px_52px_-34px_rgba(15,23,42,0.42)] md:block"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                    <Zap size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Neural latency</div>
                    <div className="text-xs font-medium text-slate-800">42ms median</div>
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