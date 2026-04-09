import { motion } from "framer-motion";
import { Quote, CheckCircle2, Star } from "lucide-react";

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at TechStart',
    quote: 'NexusAI transformed how we handle data. We cut processing time by 75% and our team actually enjoys the workflow now.',
    stats: '75% faster'
  },
  {
    name: 'Marcus Johnson',
    role: 'Product at Growth Labs',
    quote: 'The automation capabilities alone paid for itself in the first month. Incredibly responsive engineering team.',
    stats: '12x ROI'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Founder of DataFlow',
    quote: 'We tried every competitor. Nexus is in a league of its own. The real-time integrations are a total game-changer.',
    stats: 'Zero Latency'
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none mb-6">
              Proven by the <br />
              <span className="text-slate-500 italic">industry's best.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Deployment stories from teams scaling on Nexus.
            </p>
          </div>
          <div className="flex gap-2">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white text-[10px] font-bold italic">LOGO</div>
             ))}
          </div>
        </div>

        {/* Testimonials: Bento/Masonry Style */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="break-inside-avoid relative p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 group hover:border-indigo-500/30 transition-all duration-500"
            >
              <Quote className="text-indigo-500/20 absolute top-8 right-8" size={40} />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-indigo-500 text-indigo-500" />
                ))}
                <span className="text-[10px] font-black text-slate-500 ml-2 tracking-widest uppercase">Verified Result</span>
              </div>

              <p className="text-lg text-slate-200 leading-relaxed mb-8 tracking-tight">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-white/5">
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-indigo-400 font-black uppercase tracking-tighter">Metric</p>
                  <p className="text-xs font-bold text-white">{t.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar: Technical Style */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
          {[
            { label: 'Cumulative Users', val: '1.2M+' },
            { label: 'Uptime SLA', val: '99.99%' },
            { label: 'Global Nodes', val: '240+' },
            { label: 'Security Tier', val: 'Lvl 4' },
          ].map((stat, i) => (
            <div key={i} className="bg-[#020617] p-10 text-center group hover:bg-white/[0.01] transition-colors">
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-3">{stat.label}</p>
              <p className="text-3xl font-bold text-white tracking-tighter group-hover:scale-105 transition-transform">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}