export default function LogoStrip() {
  const companies = [
    { name: 'Acme', icon: '🚀' },
    { name: 'Vertex', icon: '⚡' },
    { name: 'Apex', icon: '💎' },
    { name: 'Prime', icon: '✨' },
    { name: 'Nexus', icon: '🌟' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-12 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading companies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-2xl">{company.icon}</span>
              <span className="text-sm font-semibold text-gray-300">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
