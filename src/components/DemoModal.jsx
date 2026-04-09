import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Zap, Shield, BarChart3, Activity, Globe, Cpu, Bell, ChevronRight } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Analytics");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(1204500);

  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 15));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 500);
  };

  const features = [
    { id: "Analytics", icon: <BarChart3 size={18} />, color: "text-indigo-400" },
    { id: "Automation", icon: <Zap size={18} />, color: "text-amber-400" },
    { id: "Security", icon: <Shield size={18} />, color: "text-emerald-400" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
          {/* Backdrop with extreme blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-6xl bg-[#030712] border border-white/5 rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(79,70,229,0.3)] overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
          >
            
            {/* SIDEBAR: Ultra-minimal */}
            <div className="w-full lg:w-72 bg-white/[0.02] border-r border-white/5 p-8 flex flex-col">
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">N</div>
                  <h3 className="text-white font-bold text-lg tracking-tight">Nexus<span className="text-slate-500 font-medium text-sm">OS</span></h3>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent mt-4" />
              </div>

              <nav className="space-y-1.5 flex-grow">
                {features.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTabChange(item.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl transition-all group ${
                      activeTab === item.id 
                        ? "bg-white/5 text-white" 
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`${activeTab === item.id ? item.color : "text-slate-600"}`}>
                        {item.icon}
                      </div>
                      <span className="text-xs font-semibold tracking-tight">{item.id}</span>
                    </div>
                    {activeTab === item.id && <ChevronRight size={14} className="text-indigo-500" />}
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 px-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20" />
                  <div>
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">Demo User</p>
                    <p className="text-[9px] text-slate-500 font-medium uppercase tracking-widest leading-none">Enterprise Plan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* VIEWPORT */}
            <div className="flex-1 p-10 bg-gradient-to-br from-transparent to-indigo-500/5 relative flex flex-col">
              <button onClick={onClose} className="absolute top-8 right-8 p-2 rounded-full bg-white/5 text-slate-500 hover:text-white transition-all">
                <X size={18} />
              </button>

              <div className="flex-grow flex flex-col">
                <div className="mb-12">
                  <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em] mb-2 block">Real-time Node</span>
                  <h2 className="text-4xl font-bold text-white tracking-tighter">{activeTab}</h2>
                </div>

                <div className={`flex-grow transition-all duration-700 ${loading ? "opacity-20 blur-md scale-[0.98]" : "opacity-100 blur-0 scale-100"}`}>
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
                    
                    {/* Visualizer */}
                    <div className="md:col-span-8 bg-white/[0.03] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Active Requests</p>
                        </div>
                        <div className="text-[10px] font-mono text-slate-600">Region: US-EAST-1</div>
                      </div>

                      <div className="flex items-end gap-2 h-40 mt-10">
                        {[40, 70, 45, 90, 65, 30, 85, 70, 95, 60, 75, 40, 80, 50, 90].map((h, i) => (
                          <div 
                            key={i} 
                            className="flex-1 bg-indigo-500/20 rounded-full relative group cursor-crosshair"
                            style={{ height: `${h}%` }}
                          >
                            <motion.div 
                              initial={{ height: 0 }}
                              animate={{ height: "100%" }}
                              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-full"
                              style={{ height: `${h}%`, opacity: 0.8 }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="md:col-span-4 space-y-4 flex flex-col">
                      <div className="flex-1 p-6 rounded-[2rem] bg-white/[0.03] border border-white/5">
                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Total Throughput</p>
                        <p className="text-4xl font-black text-white tabular-nums tracking-tighter">
                          {counter.toLocaleString()}
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-xs font-bold text-emerald-500">
                          <Activity size={14} /> +2.4% / Sec
                        </div>
                      </div>
                      
                      <div className="flex-1 p-6 rounded-[2rem] bg-indigo-600/10 border border-indigo-500/20">
                        <p className="text-[10px] text-indigo-400 font-bold uppercase tracking-widest mb-1">Latency (Avg)</p>
                        <p className="text-4xl font-black text-white tracking-tighter">24ms</p>
                        <p className="text-[10px] text-slate-400 mt-4 leading-relaxed font-medium italic">
                          Optimized via Global Edge Network
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Playback Bar */}
                <div className="mt-10 group cursor-pointer bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-2xl p-4 transition-all flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform">
                      <Play size={16} fill="white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white tracking-tight">NexusOS Interactive Walkthrough</p>
                      <p className="text-[11px] text-slate-500 font-medium tracking-wide">60 seconds • Learn why modern teams choose Nexus</p>
                    </div>
                  </div>
                  <div className="text-[10px] font-black text-slate-600 group-hover:text-white transition-colors">WATCH NOW</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}