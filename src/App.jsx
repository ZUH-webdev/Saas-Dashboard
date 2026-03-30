import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoStrip from './components/LogoStrip'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ProductPreview from './components/ProductPreview'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      
      {/* Navbar directly (NO wrapper) */}
      <Navbar />

      {/* Main content with offset */}
      <main className="pt-20">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App