export default function CTA() {
  return (
    <section id="cta" className="w-full px-5 py-14 sm:px-6 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl rounded-[2.2rem] border border-slate-200 bg-gradient-to-r from-indigo-50/70 via-white to-blue-50/70 p-7 text-center shadow-[0_24px_80px_-42px_rgba(15,23,42,0.32)] md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Start Today</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
          Turn AI strategy into revenue, faster.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
          Start with Nexus AI to ship production-ready workflows, improve decision quality, and scale with confidence.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="w-full rounded-xl bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_20px_48px_-24px_rgba(91,95,255,0.75)] transition-all hover:brightness-105 sm:w-auto">
            Start Free Trial
          </button>
          <button className="w-full rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-50 sm:w-auto">
            Talk to Sales
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:gap-4">
          <span>14-day trial</span>
          <span>•</span>
          <span>No credit card required</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </section>
  );
}
