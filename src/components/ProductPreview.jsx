import { useState } from 'react';

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Powerful Dashboard Built for Scale
          </h2>
          <p className="text-lg text-gray-400">
            Real-time data, actionable insights, and seamless integrations all in one place.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 md:mb-12 justify-center">
          {[
            { id: 'dashboard', label: '📊 Analytics Dashboard', title: 'Analytics Dashboard' },
            { id: 'automation', label: '⚙️ Automation Workflows', title: 'Workflow Automation' },
            { id: 'integrations', label: '🔗 Integrations', title: 'Integrations' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white/10 text-gray-300 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Preview Container */}
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur p-6 md:p-8 overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

          {/* Content Area */}
          <div className="relative z-10">
            {/* Dashboard Preview */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Top Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Total Revenue</p>
                    <p className="text-3xl font-bold text-white mt-3">$124.5K</p>
                    <p className="text-xs text-green-400 mt-2">↑ 24% vs last month</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Active Users</p>
                    <p className="text-3xl font-bold text-white mt-3">8,423</p>
                    <p className="text-xs text-green-400 mt-2">↑ 12% vs last month</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Conversion Rate</p>
                    <p className="text-3xl font-bold text-white mt-3">3.8%</p>
                    <p className="text-xs text-green-400 mt-2">↑ 0.4% vs last month</p>
                  </div>
                </div>

                {/* Chart */}
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-6">Revenue Trend (Last 30 days)</p>
                  <div className="flex items-end gap-1 md:gap-2 h-40">
                    {[45, 52, 48, 61, 55, 70, 65, 78, 72, 85, 90, 88, 95, 92, 98, 88, 92, 85, 78, 82, 88, 95, 92, 98, 105, 102, 110, 108, 115, 120].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-500/70 to-blue-400/30 rounded-t hover:from-blue-500 hover:to-blue-400 transition-all cursor-pointer"
                        style={{ height: `${(height / 120) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02]">
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Top Performing Pages</p>
                  </div>
                  <div className="divide-y divide-white/10">
                    {[
                      { name: 'Dashboard', views: '4,234', bounce: '24%' },
                      { name: 'Settings', views: '3,221', bounce: '19%' },
                      { name: 'Reports', views: '2,890', bounce: '32%' },
                    ].map((item, i) => (
                      <div key={i} className="px-6 py-4 flex justify-between items-center hover:bg-white/[0.03] transition-colors">
                        <span className="text-sm font-medium text-gray-300">{item.name}</span>
                        <div className="flex items-center gap-8">
                          <span className="text-sm text-gray-400">{item.views}</span>
                          <span className="text-sm text-gray-400">{item.bounce}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Automation Preview */}
            {activeTab === 'automation' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-6">Active Workflows</p>
                  <div className="space-y-4">
                    {[
                      { name: 'Email Campaign', status: 'running', progress: 75 },
                      { name: 'Data Sync', status: 'running', progress: 90 },
                      { name: 'Report Generation', status: 'completed', progress: 100 },
                    ].map((workflow, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-300">{workflow.name}</span>
                          <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                            workflow.status === 'running' ? 'bg-blue-500/20 text-blue-300' : 'bg-green-500/20 text-green-300'
                          }`}>
                            {workflow.status}
                          </span>
                        </div>
                        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all"
                            style={{ width: `${workflow.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full px-6 py-4 border border-blue-500/50 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition-colors">
                  + Create New Workflow
                </button>
              </div>
            )}

            {/* Integrations Preview */}
            {activeTab === 'integrations' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Connected Services</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {[
                    { name: 'Slack', connected: true, icon: '💬' },
                    { name: 'Zapier', connected: true, icon: '⚡' },
                    { name: 'Stripe', connected: true, icon: '💳' },
                    { name: 'GitHub', connected: false, icon: '🐙' },
                    { name: 'Google', connected: true, icon: '🔍' },
                    { name: 'Asana', connected: false, icon: '📋' },
                  ].map((service, i) => (
                    <div
                      key={i}
                      className={`p-4 rounded-lg border text-center cursor-pointer transition-all ${
                        service.connected
                          ? 'bg-white/5 border-green-500/30 hover:border-green-500/50 hover:bg-green-500/10'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20 opacity-50 hover:opacity-70'
                      }`}
                    >
                      <div className="text-2xl mb-2">{service.icon}</div>
                      <p className="text-xs font-medium text-gray-300">{service.name}</p>
                      {service.connected && <p className="text-xs text-green-400 mt-2">Connected</p>}
                    </div>
                  ))}
                </div>
                <button className="w-full px-6 py-4 border border-blue-500/50 text-blue-400 rounded-lg text-sm font-semibold hover:bg-blue-500/10 transition-colors">
                  Explore 500+ Integrations
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Feature cards below preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {[
            { title: 'Real-time Sync', desc: 'Data updates instantly across all your tools' },
            { title: 'Custom Reports', desc: 'Generate reports tailored to your needs' },
            { title: 'Mobile Dashboard', desc: 'Monitor everything on the go' },
          ].map((feature, i) => (
            <div key={i} className="text-center p-6">
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
