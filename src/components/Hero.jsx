import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* LEFT COLUMN - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors">
              <span className="text-blue-400">✨</span>
              <span className="text-sm text-gray-300">Trusted by 10,000+ users</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Build smarter with{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI-powered tools
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg">
                Automate your workflow, save time, and grow your business faster with cutting-edge AI technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40">
                Get Started Free
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 hover:border-white/30 transition-all duration-300">
                View Demo →
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex gap-12 pt-8 border-t border-white/10">
              <div>
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-sm text-gray-400 mt-1">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-gray-400 mt-1">Uptime</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-400 mt-1">Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Dashboard Mockup */}
          <div className="relative h-full hidden lg:flex items-center justify-center">
            {/* Main Dashboard Card */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs text-gray-500 font-medium">DASHBOARD</p>
                  <p className="text-lg font-bold text-white mt-2">Analytics</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-xl">
                  📊
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-xs text-gray-500 font-medium">Revenue</p>
                  <p className="text-2xl font-bold text-white mt-2">$24.5K</p>
                  <p className="text-xs text-green-400 mt-2">↑ 12% vs last week</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-xs text-gray-500 font-medium">Growth</p>
                  <p className="text-2xl font-bold text-white mt-2">320%</p>
                  <p className="text-xs text-green-400 mt-2">↑ 45% vs last month</p>
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-3">
                <div className="flex items-end gap-1 h-24">
                  {[40, 60, 45, 70, 55, 80, 65, 75, 90].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-blue-500/70 to-blue-400/30 rounded-t hover:from-blue-500 hover:to-blue-400 transition-all"
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">Last 9 days</p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <div
              className="absolute -right-8 top-20 w-48 bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/30 backdrop-blur p-4 rounded-xl shadow-lg"
              style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
            >
              <p className="text-xs text-purple-300 font-medium">⚡ PERFORMANCE</p>
              <p className="text-sm font-bold text-white mt-2">48ms faster</p>
            </div>

            {/* Floating Card 2 */}
            <div
              className="absolute -left-8 bottom-20 w-48 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/30 backdrop-blur p-4 rounded-xl shadow-lg"
              style={{ transform: `translateY(${scrollY * 0.12}px)` }}
            >
              <p className="text-xs text-blue-300 font-medium">🔒 SECURITY</p>
              <p className="text-sm font-bold text-white mt-2">Enterprise Grade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
