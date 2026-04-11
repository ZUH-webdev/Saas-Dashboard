import { motion } from "framer-motion";

const companies = [
  { name: 'ACME CORP', tech: 'CLUSTERS' },
  { name: 'VERTEX', tech: 'NODES' },
  { name: 'APEX', tech: 'SYSTEMS' },
  { name: 'PRIME', tech: 'DATA' },
  { name: 'NEXUS', tech: 'AI' },
  { name: 'QUANTUM', tech: 'LOGIC' },
];

export default function LogoStrip() {
  return (
    <section className="relative w-full py-12 md:py-14">
      <div className="absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#F7F8FA] to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#F7F8FA] to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
          Trusted by ambitious product teams
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.65 }}
              whileHover={{ opacity: 1, y: -3 }}
              className="group flex cursor-default flex-col items-start"
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-1.5 bg-slate-300 transition-colors group-hover:bg-gradient-to-b group-hover:from-[#5B5FFF] group-hover:to-[#3B82F6]" />
                <span className="text-sm font-semibold tracking-tight text-slate-400 grayscale transition-all group-hover:grayscale-0 group-hover:text-slate-700">
                  {company.name}
                </span>
              </div>
              <span className="ml-3 mt-1 text-[8px] font-medium tracking-[0.16em] text-slate-400">
                {company.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}