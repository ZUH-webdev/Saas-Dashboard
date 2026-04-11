import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Ideal for individual developers and small side projects.',
      price: billingCycle === 'monthly' ? 29 : 24,
      features: ['10k API calls', '5 Team members', 'Basic Analytics', 'Email Support'],
      highlight: false,
    },
    {
      name: 'Professional',
      description: 'The standard for rapidly growing scale-ups and teams.',
      price: billingCycle === 'monthly' ? 99 : 79,
      features: ['Unlimited API calls', 'Unlimited members', 'Advanced Insights', 'Priority Support', 'Custom Workflows'],
      highlight: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      description: 'Advanced security and control for large-scale operations.',
      price: 'Custom',
      features: ['Dedicated Support', 'Custom SLA', 'On-premise option', 'SSO & SAML', 'Audit Logs'],
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24">
      <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/40 via-violet-200/35 to-blue-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl"
          >
            Pricing that scales with
            <span className="bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] bg-clip-text text-transparent"> your outcomes</span>
          </motion.h2>

          <p className="mt-4 text-slate-600">Simple plans, no surprise overages, enterprise-grade reliability from day one.</p>

          <div className="mt-8 inline-flex items-center gap-4 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <span className={`px-2 text-sm ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative h-7 w-14 rounded-full bg-slate-100 p-1"
              aria-label="Toggle billing cycle"
            >
              <motion.div
                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                className="h-5 w-5 rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#3B82F6]"
              />
            </button>
            <span className={`flex items-center gap-2 px-2 text-sm ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
              Yearly
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.15em] text-emerald-700">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, billingCycle }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
        plan.highlight 
          ? 'bg-white border-indigo-300 shadow-[0_30px_80px_-42px_rgba(91,95,255,0.58)]'
          : 'bg-white/90 border-slate-200 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.35)]'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-xl">
          {plan.badge}
        </div>
      )}

      <div className="mb-8">
        <h3 className="mb-2 text-xl font-semibold text-slate-900">{plan.name}</h3>
        <p className="text-sm leading-relaxed text-slate-600">{plan.description}</p>
      </div>

      <div className="mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={billingCycle + plan.price}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-5xl font-semibold text-slate-900">
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
            </span>
            {typeof plan.price === 'number' && (
              <span className="font-medium text-slate-500">/mo</span>
            )}
          </motion.div>
        </AnimatePresence>
        {billingCycle === 'yearly' && typeof plan.price === 'number' && (
          <p className="mt-2 text-[11px] font-medium text-indigo-600">Billed yearly</p>
        )}
      </div>

      <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 mb-8 ${
        plan.highlight 
          ? 'bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] text-white shadow-[0_20px_48px_-24px_rgba(91,95,255,0.75)] hover:brightness-105'
          : 'border border-slate-200 bg-white text-slate-800 hover:bg-slate-50'
      }`}>
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>

      <div className="space-y-4">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50">
              <Check size={12} className="text-indigo-600" />
            </div>
            <span className="text-sm text-slate-700">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}