export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-blue-600/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to transform your workflow?
          </h2>

          <p className="text-xl text-gray-400 mb-12">
            Join thousands of teams already using BuildAI to automate, analyze, and scale. Start free today—no credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40 whitespace-nowrap">
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>

          {/* Trust Badge */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>✓ 14-day free trial</span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>

          {/* Feature Grid Below Buttons */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <p className="text-sm font-medium text-gray-400 mb-8">Why teams choose BuildAI</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <p className="text-gray-300 font-semibold mb-2">10x Faster</p>
                <p className="text-sm text-gray-400">Automate repetitive tasks and save 20 hours per week</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🔒</div>
                <p className="text-gray-300 font-semibold mb-2">Enterprise Security</p>
                <p className="text-sm text-gray-400">SOC 2 Type II certified with end-to-end encryption</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🤝</div>
                <p className="text-gray-300 font-semibold mb-2">24/7 Support</p>
                <p className="text-sm text-gray-400">Expert team ready to help you succeed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
