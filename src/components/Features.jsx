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
    <section id="features" className="px-6 py-20 md:px-10 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Features</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Built for teams that care about precision and speed.
          </h2>
          <p className="mt-4 text-slate-600">
            Every capability is engineered to shorten the path from AI idea to measurable business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_16px_44px_-32px_rgba(15,23,42,0.38)] transition-all duration-300"
            >
              <div className="mb-5 inline-flex rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-50 to-blue-50 p-3 text-indigo-600 shadow-sm">
                {f.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{f.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-indigo-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}