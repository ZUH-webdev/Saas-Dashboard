import { motion } from "framer-motion";
import { Zap, BarChart3, Link2, ShieldCheck, Settings2, Rocket } from "lucide-react";

const features = [
  { title: "AI Automation", desc: "Offload cognitive heavy lifting to our neural engine.", icon: <Zap size={20} /> },
  { title: "Real-time Analytics", desc: "Sub-100ms latency metrics for high-velocity teams.", icon: <BarChart3 size={20} /> },
  { title: "Smart Integrations", desc: "Connect your entire stack with native webhooks.", icon: <Link2 size={20} /> },
  { title: "Enterprise Security", desc: "SOC2 Type II, HIPAA, and GDPR compliant.", icon: <ShieldCheck size={20} /> },
  { title: "Custom Workflows", desc: "Logic-based orchestration without the bloat.", icon: <Settings2 size={20} /> },
  { title: "Lightning Fast", desc: "Edge-runtime performance built for global scale.", icon: <Rocket size={20} /> },
];

export default function Features() {
  return (
    <section className="py-32 bg-[#020617] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        {/* Minimalist Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter">
            Platform Capabilities
          </h2>
          <div className="h-px w-20 bg-white/20 mt-6" />
        </div>

        {/* Feature Grid: High contrast, thin lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <div key={i} className="bg-[#020617] p-8 hover:bg-white/[0.02] transition-colors">
              <div className="text-indigo-400 mb-6">{f.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-2 tracking-wide uppercase">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}