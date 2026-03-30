import { useState } from 'react';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Input Your Data',
      description: 'Upload files, connect tools, or paste your data. Complete in seconds.',
      icon: '📥',
      features: ['CSV, JSON, XML support', 'Direct API connections', 'Real-time data streaming', 'Auto-validation'],
    },
    {
      number: '02',
      title: 'AI Processes',
      description: 'Advanced AI analyzes and processes your data instantly.',
      icon: '⚙️',
      features: ['ML algorithms', 'Real-time processing', 'Anomaly detection', 'Predictive analytics'],
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'Receive insights, reports, and dashboards. Act on what matters.',
      icon: '🎯',
      features: ['Custom reports', 'Live dashboards', 'Smart alerts', 'Any format export'],
    },
  ];

  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-slate-900 to-slate-950 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple 3-Step Process
          </h2>
          <p className="text-lg text-gray-400">
            From data input to actionable insights, our streamlined process ensures you get value immediately.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Step Card */}
              <div
                className={`relative h-full p-8 rounded-2xl transition-all duration-300 flex flex-col ${
                  activeStep === index || activeStep === null && index === 0
                    ? 'bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/50 shadow-lg shadow-blue-500/20'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Step Number */}
                <div className={`text-5xl font-bold mb-6 transition-all duration-300 ${
                  activeStep === index || activeStep === null && index === 0
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'
                    : 'text-gray-600'
                }`}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {step.description}
                </p>

                {/* Features List - Show on hover/active */}
                <div className={`space-y-2 text-sm transition-all duration-300 ${
                  activeStep === index || activeStep === null && index === 0 ? 'opacity-100 visible' : 'opacity-0 hidden'
                }`}>
                  {step.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-gray-300">
                      <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Line - Hidden on mobile, shown on md+ screens between cards */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-30"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after steps */}
        <div className="max-w-2xl mx-auto text-center pt-8 md:pt-12 border-t border-white/10">
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40">
            Start Your Free Trial →
          </button>
        </div>
      </div>
    </section>
  );
}
