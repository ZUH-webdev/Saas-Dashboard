import { useState, useEffect } from "react";
import { X, Play, Zap, Shield, BarChart3, Activity, Globe, Cpu, Bell } from "lucide-react";

export default function DemoModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("Analytics");
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(1204500);

  // Auto-updating stats for "Live" feel
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Handle Tab Switch with fake loading
  const handleTabChange = (tab) => {
    setLoading(true);
    setActiveTab(tab);
    setTimeout(() => setLoading(false), 600);
  };

  if (!isOpen) return null;

  const features = [
    { id: "Analytics", icon: <BarChart3 size={18} />, color: "text-indigo-400", bg: "bg-indigo-400/10" },
    { id: "Automation", icon: <Zap size={18} />, color: "text-amber-400", bg: "bg-amber-400/10" },
    { id: "Security", icon: <Shield size={18} />, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-3 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity duration-500"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-6xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-[0_0_80px_-15px_rgba(79,70,229,0.4)] overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        
        {/* SIDEBAR: Features & Navigation */}
        <div className="w-full lg:w-80 bg-slate-950/40 border-r border-white/5 p-8 flex flex-col justify-between">
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-black text-xl tracking-tighter">NEXUS<span className="text-indigo-500">AI</span></h3>
              <p className="text-slate-500 text-xs mt-1 font-medium tracking-wide uppercase">Core Engine Preview</p>
            </div>

            <nav className="space-y-3">
              {features.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabChange(item.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                    activeTab === item.id 
                    ? `${item.bg} border border-white/10 shadow-lg` 
                    : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className={`${activeTab === item.id ? item.color : "text-slate-500"} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <span className={`text-sm font-bold tracking-wide ${activeTab === item.id ? "text-white" : "text-slate-400"}`}>
                    {item.id}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">System Online</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">All neural nodes are operating at peak efficiency (42ms latency).</p>
          </div>
        </div>

        {/* MAIN VIEWPORT: The "Live" Dashboard */}
        <div className="flex-1 p-4 md:p-10 bg-slate-900/50 relative">
          <button onClick={onClose} className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white transition-all z-50">
            <X size={20} />
          </button>

          <div className="h-full flex flex-col">
            {/* Header Area */}
            <div className="flex justify-between items-end mb-8">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{activeTab}</h2>
                <p className="text-slate-500 text-sm">Real-time data visualization and control</p>
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400"><Bell size={18}/></div>
                <div className="h-10 px-4 rounded-xl bg-indigo-600 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20">
                   <Activity size={14}/> LIVE
                </div>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className={`flex-1 transition-all duration-500 ${loading ? "opacity-30 blur-sm scale-95" : "opacity-100 blur-0 scale-100"}`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Large Visualizer Card */}
                <div className="md:col-span-2 bg-slate-950/50 border border-white/10 rounded-3xl p-6 relative overflow-hidden group">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400"><Globe size={20}/></div>
                       <span className="text-sm font-bold text-white uppercase tracking-tighter">Global Requests</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Updated: Just Now</span>
                  </div>
                  
                  {/* Animated Bar Chart */}
                  <div className="h-48 flex items-end gap-3 px-2">
                    {[50, 80, 45, 90, 65, 30, 85, 70, 95, 60, 75, 40].map((h, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-400 rounded-t-lg transition-all duration-1000 ease-out"
                        style={{ height: `${h}%`, opacity: (i + 1) / 12 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Vertical Stats */}
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-slate-950/50 border border-white/10">
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mb-1">Total API Calls</p>
                    <p className="text-3xl font-bold text-white tabular-nums">{counter.toLocaleString()}</p>
                    <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[70%] animate-pulse" />
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border border-purple-500/20">
                    <p className="text-[10px] text-purple-300 font-black uppercase tracking-widest mb-1">Efficiency Score</p>
                    <p className="text-3xl font-bold text-white">98.4%</p>
                    <p className="text-[11px] text-purple-400 mt-2 flex items-center gap-1 font-bold">
                       <Cpu size={12}/> AI OPTIMIZED
                    </p>
                  </div>
                </div>

                {/* Full Width Notification Bar */}
                <div className="md:col-span-3 p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-xs text-slate-400 font-medium">New deployment detected in <span className="text-white">US-East (Virginia)</span></span>
                   </div>
                   <button className="text-[10px] font-bold text-indigo-400 hover:text-white transition-colors uppercase tracking-widest">View Logs</button>
                </div>
              </div>
            </div>

            {/* Video Walkthrough Overlay (Attractive CTA) */}
            <div className="mt-8 relative h-20 rounded-2xl bg-indigo-600 overflow-hidden group cursor-pointer shadow-2xl shadow-indigo-600/20">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
               <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play size={16} fill="currentColor" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm uppercase tracking-tight">Watch Full Product Walkthrough</p>
                    <p className="text-indigo-100 text-[10px] font-medium opacity-80">See how NexusAI can transform your workflow in 60 seconds.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}