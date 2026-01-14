import { Github, Twitter, Linkedin, Mail, Zap, MessageSquare } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Community", "API Reference", "Status"],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Orange Accent Line */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">CodeFlow<span className="text-orange-500">AI</span></h2>
                <p className="text-sm text-gray-600">Intelligent Development Suite</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-md">
              Empowering developers worldwide with AI-driven tools that accelerate development and enhance productivity.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-500 hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 flex items-center">
                  {category}
                  <MessageSquare className="w-4 h-4 ml-2 text-orange-500" />
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-orange-500 transition-colors duration-200 group flex items-center"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 mr-2 transition-opacity" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600 text-sm">
              © 2024 CodeFlowAI. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500 text-sm transition-colors">
              Status
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay in the loop</h3>
              <p className="text-gray-600">Get the latest updates on new features and releases.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-orange-500 text-gray-900"
              />
              <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}