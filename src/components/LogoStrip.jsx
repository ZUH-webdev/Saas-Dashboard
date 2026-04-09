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
    <section className="relative w-full bg-[#020617] py-16 border-y border-white/5">
      {/* Subtly mask the edges for a high-end fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-12">
          Powering the next generation of infrastructure
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 md:gap-x-24">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.3 }}
              whileHover={{ opacity: 1, y: -2 }}
              className="flex flex-col items-start group cursor-none"
            >
              <div className="flex items-center gap-2">
                {/* Modern "Logo" mark: Minimal geometric shapes */}
                <div className="w-1.5 h-4 bg-indigo-500/40 group-hover:bg-indigo-500 transition-colors" />
                <span className="text-sm font-black text-slate-300 tracking-tighter group-hover:text-white transition-colors">
                  {company.name}
                </span>
              </div>
              <span className="text-[8px] font-mono text-slate-600 mt-1 ml-3 tracking-[0.1em]">
                {company.tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}