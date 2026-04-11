import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProductPreview() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Product Showcase</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Workflows that feel intelligent, not complicated.
          </h2>
        </div>

        <div className="grid items-center gap-8 rounded-[2rem] border border-slate-200 bg-white/90 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.28)] md:grid-cols-2 md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Decision Studio</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Design, test, and deploy AI logic from one surface.</h3>
            <p className="mt-4 text-slate-600">
              Versioned prompt chains, quality scoring, and release controls keep your AI releases stable and measurable.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {['Live prompt testing', 'Built-in rollout controls', 'Observability for every decision'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-indigo-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">Quality score trends</p>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700">Healthy</span>
              </div>
              <div className="flex h-36 items-end gap-2">
                {[48, 55, 62, 58, 74, 82, 88].map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.04 }}
                    className="flex-1 rounded-full bg-gradient-to-t from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6]/45"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-center gap-8 rounded-[2rem] border border-slate-200 bg-gradient-to-r from-indigo-50/50 via-white to-blue-50/50 p-6 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.28)] md:grid-cols-2 md:p-8">
          <div className="order-2 md:order-1">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs text-slate-500">Automation timeline</p>
                <ArrowUpRight size={16} className="text-slate-400" />
              </div>
              <div className="space-y-3">
                {['Detect event', 'Classify with model', 'Trigger action', 'Report outcome'].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Automation Grid</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">Scale consistent decisions across every customer touchpoint.</h3>
            <p className="mt-4 text-slate-600">
              Build reusable workflows with guardrails and business context, then watch execution in real time.
            </p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:text-slate-900">
              See workflow templates <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
