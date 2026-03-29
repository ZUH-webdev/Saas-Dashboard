import { useState } from 'react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for getting started',
      price: billingCycle === 'monthly' ? 29 : 290,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      features: [
        'Up to 10,000 API calls/month',
        '5 team members',
        'Basic analytics',
        'Email support',
        '1 custom integration',
        'Community access',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'Best for growing teams',
      price: billingCycle === 'monthly' ? 99 : 990,
      period: billingCycle === 'monthly' ? '/month' : '/year',
      features: [
        'Up to 1,000,000 API calls/month',
        'Unlimited team members',
        'Advanced analytics & insights',
        'Priority email & chat support',
        'Unlimited integrations',
        'Advanced security features',
        'Custom workflows',
        'API access',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Unlimited API calls',
        'Dedicated support team',
        'Advanced security & compliance',
        'Custom SLA',
        'On-premise deployment',
        'Custom integrations',
        'Training & onboarding',
        'Advanced analytics',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Choose the perfect plan for your team. Upgrade or downgrade anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-white/10 border border-white/20 rounded-full p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span>Yearly</span>
              <span className="text-xs bg-green-500/30 text-green-300 px-2 py-1 rounded-full">Save 17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative h-full rounded-2xl transition-all duration-300 overflow-hidden group ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-br from-white/10 to-white/5 border border-blue-500/50 shadow-2xl shadow-blue-500/20'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="inline-flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full">
                    <span>⭐</span>
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full space-y-8">
                {/* Plan Header */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400">{plan.description}</p>
                </div>

                {/* Price */}
                <div>
                  {typeof plan.price === 'number' ? (
                    <>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 text-sm">{plan.period}</span>
                      </div>
                      {billingCycle === 'yearly' && (
                        <p className="text-xs text-green-400 mt-3">Billed annually • Save 17%</p>
                      )}
                    </>
                  ) : (
                    <div className="text-4xl font-bold text-white">{plan.price}</div>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-3 pt-4 border-t border-white/10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, cancel anytime. No long-term contracts or hidden fees. Your data is always yours.',
              },
              {
                q: 'Do you offer refunds?',
                a: '30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.',
              },
              {
                q: 'Can I change plans?',
                a: 'Absolutely. Upgrade or downgrade anytime. Changes take effect immediately.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 transition-colors">
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
