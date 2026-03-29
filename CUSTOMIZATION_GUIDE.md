# 🎨 Customization Guide

This guide will help you customize the SaaS landing page to match your brand and use case.

## 🎯 Quick Customizations

### 1. Change Brand Name & Logo
Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`:

```jsx
// Change from "BuildAI" to your brand name
<span className="text-white font-bold text-lg">YourBrandName</span>

// Change the gradient colors in the logo
<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
  <span className="text-white font-bold text-sm">YB</span> {/* Your initials */}
</div>
```

### 2. Update Hero Section Copy
Edit `src/components/Hero.jsx`:

```jsx
// Main headline
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
  Build smarter with{' '}
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
    your unique value prop
  </span>
</h1>

// Subheadline
<p className="text-xl text-slate-400 max-w-xl leading-relaxed">
  Your custom subheadline here. Keep it focused on benefits.
</p>
```

### 3. Change Color Scheme
Replace color classes globally:

**Blue → Emerald:**
```
from-blue-600 → from-emerald-600
to-blue-400 → to-emerald-400
```

**In Tailwind config or use find & replace:**
- `blue-` → `teal-`, `cyan-`, `indigo-`, etc.
- `purple-` → `violet-`, `fuchsia-`, `rose-`, etc.

### 4. Update Features
Edit `src/components/Features.jsx`:

```jsx
const features = [
  {
    icon: '🚀', // Change emoji
    title: 'Your Feature Name',
    description: 'Feature description with benefits.',
    color: 'from-YOUR-COLOR-500 to-YOUR-COLOR-500',
  },
  // Add more features...
]
```

### 5. Customize Pricing Tiers
Edit `src/components/Pricing.jsx`:

```jsx
const plans = [
  {
    name: 'Starter',
    description: 'Perfect for...',
    price: 29, // Your price
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
      // Add your features
    ],
    highlighted: false,
  },
  // Add more tiers...
]
```

### 6. Add Real Testimonials
Edit `src/components/Testimonials.jsx`:

```jsx
const testimonials = [
  {
    name: 'Real Customer Name',
    role: 'CEO, Their Company',
    company: 'Their Company',
    avatar: '👤', // Use emoji or img src
    quote: 'Their real quote about your product...',
    rating: 5,
  },
  // Add more testimonials...
]
```

### 7. Update CTA Copy
Edit `src/components/CTA.jsx`:

```jsx
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
  Your strong closing headline
  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
    Call to action
  </span>
</h2>
```

## 🎨 Advanced Customizations

### 1. Add Real Images
Replace emoji icons with actual images:

```jsx
// Instead of emoji:
<div className="text-4xl">📊</div>

// Use image:
import analyticsIcon from '../assets/analytics-icon.svg'
<img src={analyticsIcon} alt="Analytics" className="w-12 h-12" />
```

### 2. Add Video Background
In `Hero.jsx`, add a video background:

```jsx
<div className="absolute inset-0 overflow-hidden">
  <video autoPlay muted loop className="w-full h-full object-cover opacity-20">
    <source src="/path/to/video.mp4" type="video/mp4" />
  </video>
</div>
```

### 3. Integrate Real Analytics
Replace mock data in `ProductPreview.jsx`:

```jsx
import { useEffect, useState } from 'react'

export default function ProductPreview() {
  const [analyticsData, setAnalyticsData] = useState(null)

  useEffect(() => {
    // Fetch from your API
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => setAnalyticsData(data))
  }, [])

  return (
    // Use analyticsData instead of hardcoded values
  )
}
```

### 4. Add Newsletter Integration
Edit `src/components/Footer.jsx`:

```jsx
const [email, setEmail] = useState('')
const [subscribed, setSubscribed] = useState(false)

const handleSubscribe = async (e) => {
  e.preventDefault()
  
  // Call your API
  const response = await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email }),
  })
  
  if (response.ok) {
    setSubscribed(true)
    setEmail('')
  }
}

return (
  <form onSubmit={handleSubscribe}>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
    <button type="submit">
      {subscribed ? 'Subscribed!' : 'Subscribe'}
    </button>
  </form>
)
```

### 5. Add Link Navigation
Replace smooth scroll with Next.js Link (if using Next.js):

```jsx
import Link from 'next/link'

// Instead of:
<button onClick={() => scrollToSection('pricing')}>Pricing</button>

// Use:
<Link href="#pricing">Pricing</Link>
```

### 6. Dark/Light Mode Toggle
Add in `Navbar.jsx`:

```jsx
const [isDark, setIsDark] = useState(true)

return (
  <button
    onClick={() => setIsDark(!isDark)}
    className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700"
  >
    {isDark ? '☀️' : '🌙'}
  </button>
)
```

### 7. Add Animations Library
Install Framer Motion:

```bash
npm install framer-motion
```

Then use in components:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📱 Responsive Adjustments

### Add Large Desktop Support (2xl screens)
In components, add `2xl:` breakpoints:

```jsx
<h1 className="text-6xl lg:text-7xl 2xl:text-8xl">
  Headline
</h1>
```

### Fine-tune Mobile Spacing
Adjust padding for small screens:

```jsx
<div className="px-4 sm:px-6 md:px-8 lg:px-10">
  Responsive padding
</div>
```

## 🔐 Add Form Validation

Example for email subscription:

```jsx
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const handleSubmit = (e) => {
  e.preventDefault()
  if (!validateEmail(email)) {
    alert('Please enter a valid email')
    return
  }
  // Process subscription...
}
```

## 🌐 SEO Optimization

Add meta tags in `index.html`:

```html
<meta name="description" content="Build smarter with AI-powered tools">
<meta name="keywords" content="AI, automation, SaaS">
<meta property="og:title" content="BuildAI - AI-Powered Automation">
<meta property="og:description" content="Automate your workflow and grow faster">
<meta property="og:image" content="/og-image.png">
```

### Add JSON-LD Schema

Create `src/components/Schema.jsx`:

```jsx
export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "BuildAI",
    "description": "AI-powered automation platform",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## 📊 Analytics Integration

Add Google Analytics:

```bash
npm install react-ga4
```

In `main.jsx`:

```jsx
import ReactGA from "react-ga4"

ReactGA.initialize("G-YOUR_TRACKING_ID")
ReactGA.send({ hitType: "pageview", page: "/" })
```

## 🚀 Deployment

### Vercel (Recommended for Next.js)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

## 🎓 Pro Tips

1. **Icons**: Use emoji, SVG, or icon libraries (React Icons, Heroicons)
2. **Images**: Optimize with WebP format and lazy loading
3. **Fonts**: Use system fonts or Google Fonts (Poppins, Inter, Plusjakarta)
4. **Testing**: Add React Testing Library for component tests
5. **Linting**: Run `npm run lint` to catch issues
6. **Performance**: Use React DevTools Profiler to optimize

---

Happy customizing! 🎉
