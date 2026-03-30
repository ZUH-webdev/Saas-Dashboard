export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'AI Automation',
      description: 'Let AI handle repetitive tasks while you focus on what matters most.',
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Get instant insights into your business metrics in real-time dashboards.',
    },
    {
      icon: '🔗',
      title: 'Smart Integrations',
      description: 'Connect seamlessly with 500+ tools and services. No coding required.',
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, SOC 2, and HIPAA.',
    },
    {
      icon: '⚙️',
      title: 'Customizable Workflows',
      description: 'Build custom workflows without coding. No limits to creativity.',
    },
    {
      icon: '🚀',
      title: 'Lightning Fast',
      description: 'Sub-millisecond response times. Built for scale. Handles millions of operations.',
    },
  ];

  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful features for modern teams
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to automate, analyze, and scale your business. Built by developers, for developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group h-full relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full space-y-4">
                {/* Icon */}
                <div className="text-4xl">{feature.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mt-2">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center space-x-2 text-blue-400 group-hover:text-blue-300 transition-colors text-sm font-medium pt-4">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
