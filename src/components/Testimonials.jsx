export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechStart Inc',
      company: 'TechStart Inc',
      avatar: '👩‍💼',
      quote: 'BuildAI transformed how we handle data. We cut processing time by 75% and our team loves the interface. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Marcus Johnson',
      role: 'Product Manager, Growth Labs',
      company: 'Growth Labs',
      avatar: '👨‍💼',
      quote: 'The automation capabilities alone paid for itself in the first month. Their support team is incredibly responsive.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Founder, DataFlow',
      company: 'DataFlow',
      avatar: '👩‍🚀',
      quote: 'We tried other solutions, but BuildAI is in a league of its own. Real-time insights and integrations are game-changers.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Loved by teams worldwide
          </h2>
          <p className="text-lg text-gray-400">
            See what industry leaders are saying about BuildAI and how it transforms their workflows.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group h-full rounded-2xl p-6 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
            >
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full space-y-6">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed italic flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-lg">
                    {testimonial.avatar}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">10K+</p>
              <p className="text-gray-400 text-sm font-medium">Active Users</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">98%</p>
              <p className="text-gray-400 text-sm font-medium">Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">500+</p>
              <p className="text-gray-400 text-sm font-medium">Integrations</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">24/7</p>
              <p className="text-gray-400 text-sm font-medium">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
