import { Menu, X, Zap, Sparkles, Code2 } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Features", href: "#features", icon: <Sparkles className="w-4 h-4" /> },
  { label: "Pricing", href: "#pricing", icon: <Code2 className="w-4 h-4" /> },
  { label: "Testimonials", href: "#testimonials", icon: <Sparkles className="w-4 h-4" /> },
];

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white border-b border-gray-200 ${scrolled ? 'shadow-lg' : ''} transition-all duration-300`}>
      {/* Orange Accent Line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900 leading-tight">
                CodeFlow<span className="text-orange-500">AI</span>
              </div>
              <div className="text-xs text-gray-500 font-medium">Intelligent Development</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center space-x-2 px-4 py-2.5 rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                <div className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>
                <span className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="ml-4 px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 rounded-lg bg-orange-500 text-white hover:shadow-lg transition-all"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuIsOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-200 animate-in slide-in-from-top-2 duration-300">
            <div className="p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3.5 rounded-xl hover:bg-orange-50 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    {item.icon}
                  </div>
                  <span className="font-medium text-gray-800 group-hover:text-orange-600">
                    {item.label}
                  </span>
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <button className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}