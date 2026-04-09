import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Infinity, Blocks, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Analytics', icon: <LayoutDashboard size={14} /> },
    { id: 'automation', label: 'Workflows', icon: <Infinity size={14} /> },
    { id: 'integrations', label: 'Ecosystem', icon: <Blocks size={14} /> },
  ];

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* BACKGROUND: Subtle Beam Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* SECTION HEADER: High Contrast Typography */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            The engine for <br /> 
            <span className="text-slate-500">modern enterprise.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            A unified command center for your entire operation. Designed for high-velocity teams.
          </p>
        </div>

        {/* TABS: Segmented Control Style */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center p-1 bg-white/[0.03] border border-white/5 rounded-full backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  activeTab === tab.id ? "text-white" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {tab.icon} {tab.label.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* PREVIEW CONTAINER: Browser Frame Aesthetic */}
        <div className="relative group">
          {/* Outer Shadow Glow */}
          <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative rounded-[32px] border border-white/10 bg-[#030712] shadow-2xl overflow-hidden">
            {/* Top Bar (Browser Mockup) */}
            <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-6 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto bg-white/5 px-4 py-1 rounded-md text-[10px] text-slate-500 font-mono">
                nexus-os.sh/cloud/{activeTab}
              </div>
            </div>

            {/* Dynamic Content */}
            <div className="p-8 md:p-12 min-h-[500px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'dashboard' && <AnalyticsView />}
                  {activeTab === 'automation' && <WorkflowView />}
                  {activeTab === 'integrations' && <EcosystemView />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* BOTTOM SPECS: Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/5 mt-20">
          <div className="p-8 border-r border-white/5">
            <h4 className="text-white text-sm font-bold mb-2 tracking-tight">01 — Real-time Sync</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Multi-region database propagation with zero lag.</p>
          </div>
          <div className="p-8 border-r border-white/5">
            <h4 className="text-white text-sm font-bold mb-2 tracking-tight">02 — Custom Logic</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Deploy edge functions directly from the UI.</p>
          </div>
          <div className="p-8">
            <h4 className="text-white text-sm font-bold mb-2 tracking-tight">03 — Open API</h4>
            <p className="text-slate-500 text-xs leading-relaxed">Full programmatic control over every node.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// SUB-COMPONENTS FOR CLEANLINESS

function AnalyticsView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 space-y-6">
        <div className="h-64 bg-white/[0.02] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
          <div className="flex justify-between items-start mb-8">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Growth Velocity</p>
            <span className="text-[10px] text-slate-500 font-mono">Live Feed</span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[30, 45, 35, 60, 55, 80, 75, 90, 85, 100, 95].map((h, i) => (
              <motion.div 
                key={i} 
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-400/50 rounded-t-sm" 
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Retention</p>
            <p className="text-2xl font-bold text-white">99.2%</p>
          </div>
          <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Churn Rate</p>
            <p className="text-2xl font-bold text-white">0.4%</p>
          </div>
        </div>
      </div>
      <div className="bg-indigo-600/5 border border-indigo-500/20 rounded-2xl p-8 flex flex-col justify-center text-center">
        <div className="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white">
          <ArrowUpRight size={20} />
        </div>
        <h4 className="text-white font-bold mb-2">Upgrade to Pro</h4>
        <p className="text-slate-400 text-xs leading-relaxed mb-6">Unlock advanced forecasting and ML-driven insights.</p>
        <button className="py-2.5 bg-white text-black text-[11px] font-black rounded-lg">GET ACCESS</button>
      </div>
    </div>
  );
}

function WorkflowView() {
  return (
    <div className="space-y-4">
      {['Customer Onboarding', 'Inventory Sync', 'Security Audit'].map((item, i) => (
        <div key={i} className="group p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between hover:border-white/10 transition-colors">
          <div className="flex items-center gap-4">
            <CheckCircle2 size={18} className="text-emerald-500" />
            <span className="text-sm font-medium text-slate-200">{item}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold rounded uppercase">Active</div>
            <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden">
               <div className="h-full bg-white/20 w-3/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EcosystemView() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {['Slack', 'GitHub', 'AWS', 'Stripe', 'Figma', 'Linear', 'Discord', 'Notion'].map((app) => (
        <div key={app} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
          <div className="w-8 h-8 bg-white/10 rounded-lg mb-3" />
          <span className="text-xs font-bold text-slate-400">{app}</span>
        </div>
      ))}
    </div>
  );
}