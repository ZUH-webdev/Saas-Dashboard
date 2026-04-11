export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'Roadmap', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Support', href: '#' },
    ],
    Legal: [
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'License', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: 'X', href: '#', label: 'Twitter' },
    { icon: 'in', href: '#', label: 'LinkedIn' },
    { icon: 'GH', href: '#', label: 'GitHub' },
    { icon: 'DC', href: '#', label: 'Discord' },
  ];

  return (
    <footer className="relative w-full border-t border-slate-200 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 md:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6]">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-slate-900 font-semibold text-lg">NexusAI</span>
            </div>
            <p className="text-sm text-slate-600">
              Empower your team with AI-powered automation and analytics.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-500 transition-all duration-300 hover:text-slate-900"
                  title={link.label}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold text-slate-900">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors duration-200 hover:text-slate-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 border-b border-slate-200 pb-8 md:mb-12 md:pb-12">
          <div className="max-w-md">
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Stay updated</h3>
            <p className="mb-4 text-sm text-slate-600">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 placeholder-slate-400 transition-colors focus:border-indigo-300 focus:outline-none"
              />
              <button className="rounded-lg bg-gradient-to-r from-[#5B5FFF] via-[#7C4DFF] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:brightness-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-600 md:flex-row md:gap-0">
          <p>© {currentYear} NexusAI. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Global</span>
              <select className="cursor-pointer border-none bg-transparent text-slate-600 focus:outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </span>
            <span className="flex items-center space-x-1">
              <span>Secure</span>
              <span>Privacy-First</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
