import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ProductPreview from './components/ProductPreview'
import Metrics from './components/Metrics'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F8FA] text-slate-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-200/45 via-violet-200/40 to-blue-200/45 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.32]" style={{ backgroundImage: "url('/neural-pattern.svg')", backgroundSize: "cover", backgroundPosition: "center top" }} />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "radial-gradient(#0f172a 0.6px, transparent 0.6px)", backgroundSize: "18px 18px" }} />
      </div>

      <Navbar />

      <main className="relative z-10 pt-20">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Metrics />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App