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
    { icon: '𝕏', href: '#', label: 'Twitter' },
    { icon: '🔗', href: '#', label: 'LinkedIn' },
    { icon: '🐙', href: '#', label: 'GitHub' },
    { icon: '💬', href: '#', label: 'Discord' },
  ];

  return (
    <footer className="relative w-full bg-linear-to-b from-slate-900 to-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 md:py-16 lg:py-24 w-full">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-white font-bold text-lg">BuildAI</span>
            </div>
            <p className="text-sm text-gray-400">
              Empower your team with AI-powered automation and analytics.
            </p>
            <div className="flex items-center space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 group"
                  title={link.label}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-semibold text-white text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div className="mb-8 md:mb-12 pb-8 md:pb-12 border-b border-white/10">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-white mb-2">Stay updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest news and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/40">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-sm text-gray-400">
          <p>© {currentYear} BuildAI. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>🌍</span>
              <select className="bg-transparent border-none text-gray-400 hover:text-white cursor-pointer focus:outline-none">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </span>
            <span className="flex items-center space-x-1">
              <span>🔒</span>
              <span>Privacy-First</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
