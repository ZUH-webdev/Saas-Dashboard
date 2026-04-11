import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

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
    <section id="customers" className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Trusted by teams building category-defining AI products.
            </h2>
            <p className="mt-4 text-slate-600">
              Results from operators who moved from fragmented tools to Nexus AI.
            </p>
          </div>
          <div className="flex gap-2">
             {[1, 2, 3, 4].map((i) => (
               <div key={i} className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[10px] font-semibold text-slate-500">LOGO</div>
             ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative break-inside-avoid rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.34)] transition-all duration-500 hover:-translate-y-1"
            >
              <Quote className="absolute right-7 top-7 text-indigo-200" size={34} />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-indigo-500 text-indigo-500" />
                ))}
                <span className="ml-2 text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">Verified result</span>
              </div>

              <p className="mb-8 text-base leading-relaxed text-slate-700">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-slate-200 pt-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">{t.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-indigo-600">Metric</p>
                  <p className="text-xs font-semibold text-slate-800">{t.stats}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-2 overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-4">
          {[
            { label: 'Cumulative Users', val: '1.2M+' },
            { label: 'Uptime SLA', val: '99.99%' },
            { label: 'Global Nodes', val: '240+' },
            { label: 'Security Tier', val: 'Lvl 4' },
          ].map((stat, i) => (
            <div key={i} className="border-r border-slate-200 p-8 text-center last:border-r-0">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              <p className="text-3xl font-semibold tracking-tight text-slate-900">{stat.val}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}