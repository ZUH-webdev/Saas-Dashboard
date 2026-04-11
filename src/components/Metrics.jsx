import { motion } from "framer-motion";

const stats = [
  { value: "+128%", label: "Faster model iteration", note: "Across production teams in 90 days" },
  { value: "99.99%", label: "Platform uptime SLA", note: "Globally distributed AI infrastructure" },
  { value: "42ms", label: "Median workflow latency", note: "For real-time intelligent automations" },
  { value: "1.8M+", label: "Daily AI decisions", note: "Executed with full observability" },
];

export default function Metrics() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200/80 bg-white/85 p-8 shadow-[0_24px_80px_-42px_rgba(15,23,42,0.28)] backdrop-blur md:p-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Performance At Scale</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Outcomes your CFO and engineering team both care about.
            </h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
            Verified quarterly benchmarks
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 p-6"
            >
              <p className="text-4xl font-semibold tracking-tight text-slate-900">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-700">{stat.label}</p>
              <p className="mt-2 text-xs text-slate-500">{stat.note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
