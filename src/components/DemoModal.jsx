import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Zap, Shield, BarChart3, ChevronRight } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Analytics");
  const [counter, setCounter] = useState(1204500);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCounter((prev) => prev + Math.floor(Math.random() * 20));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const features = [
    { id: "Analytics", icon: <BarChart3 size={18} /> },
    { id: "Automation", icon: <Zap size={18} /> },
    { id: "Security", icon: <Shield size={18} /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/35 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            className="relative flex min-h-[640px] w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] lg:flex-row"
          >
            <div className="w-full border-b border-slate-200 bg-slate-50/70 p-6 lg:w-72 lg:border-b-0 lg:border-r">
              <div className="mb-8">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] text-[10px] font-semibold text-white">
                    N
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">Nexus Demo</h3>
                </div>
                <p className="text-xs text-slate-500">Interactive product preview</p>
              </div>

              <nav className="space-y-2">
                {features.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm transition-all ${
                      activeTab === item.id
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-600 hover:bg-white/80 hover:text-slate-900"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={activeTab === item.id ? "text-indigo-600" : "text-slate-500"}>{item.icon}</span>
                      {item.id}
                    </span>
                    {activeTab === item.id && <ChevronRight size={14} className="text-indigo-600" />}
                  </button>
                ))}
              </nav>
            </div>

            <div className="relative flex-1 p-7 md:p-10">
              <button
                onClick={onClose}
                className="absolute right-6 top-6 rounded-full border border-slate-200 bg-white p-2 text-slate-500 transition hover:text-slate-900"
              >
                <X size={18} />
              </button>

              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Live Preview</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">{activeTab}</h2>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-12">
                <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 md:col-span-8">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-xs text-slate-500">Request distribution</p>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Stable</span>
                  </div>
                  <div className="flex h-44 items-end gap-2">
                    {[40, 70, 45, 90, 65, 30, 85, 70, 95, 60, 75, 40, 80, 50, 90].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.025 }}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6]/40"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-4 md:col-span-4">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Total throughput</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 tabular-nums">
                      {counter.toLocaleString()}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">Average latency</p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">24ms</p>
                    <p className="mt-2 text-xs text-slate-500">Optimized by global edge routing.</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:bg-slate-50">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] text-white">
                    <Play size={14} fill="currentColor" />
                  </span>
                  <span className="text-left">
                    <span className="block text-sm font-semibold text-slate-900">Nexus walkthrough</span>
                    <span className="block text-xs text-slate-500">60 seconds overview</span>
                  </span>
                </span>
                <span className="text-xs font-medium text-slate-500">Watch</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
