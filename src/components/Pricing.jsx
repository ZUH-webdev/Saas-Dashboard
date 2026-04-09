import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, HelpCircle, Sparkles } from 'lucide-react';

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
    <section id="pricing" className="relative py-24 md:py-32 bg-[#020617] overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6"
          >
            Scalable pricing for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">modern teams</span>
          </motion.h2>
          
          {/* Custom Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-slate-800 rounded-full p-1 transition-colors hover:bg-slate-700"
            >
              <motion.div 
                animate={{ x: billingCycle === 'monthly' ? 0 : 28 }}
                className="w-5 h-5 bg-indigo-500 rounded-full shadow-lg" 
              />
            </button>
            <span className={`text-sm flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-500'}`}>
              Yearly <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-bold uppercase tracking-wider">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          ? 'bg-slate-900/50 border-indigo-500/50 shadow-[0_0_40px_-15px_rgba(79,70,229,0.3)]' 
          : 'bg-white/[0.02] border-white/10'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.2em] shadow-xl">
          {plan.badge}
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-sm text-slate-400 leading-relaxed">{plan.description}</p>
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
            <span className="text-5xl font-bold text-white">
              {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
            </span>
            {typeof plan.price === 'number' && (
              <span className="text-slate-500 font-medium">/mo</span>
            )}
          </motion.div>
        </AnimatePresence>
        {billingCycle === 'yearly' && typeof plan.price === 'number' && (
          <p className="text-[11px] text-indigo-400 mt-2 font-medium italic">Billed yearly</p>
        )}
      </div>

      <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 mb-8 ${
        plan.highlight 
          ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/20' 
          : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
      }`}>
        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </button>

      <div className="space-y-4">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/10 flex items-center justify-center">
              <Check size={12} className="text-indigo-400" />
            </div>
            <span className="text-sm text-slate-300">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}