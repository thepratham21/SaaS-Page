import { ArrowRight, Play, Sparkles, Zap, Cpu, Brain } from "lucide-react";


const stats = [
  { value: "10x", label: "Faster Development" },
  { value: "99%", label: "Code Accuracy" },
  { value: "50%", label: "Fewer Bugs" },
  { value: "24/7", label: "AI Assistance" },
];

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-8 border border-orange-200">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">
                Next-gen AI Development Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-gray-900">Code with</span>
              <br />
              <span className="relative">
                <span className="text-orange-600">AI Superpowers</span>
                <Zap className="absolute -top-2 -right-8 w-8 h-8 text-amber-500 animate-pulse" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
              Transform your development workflow with intelligent code completion, 
              automated testing, and AI-powered debugging. Ship production-ready 
              code faster than ever before.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group relative px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="flex items-center justify-center space-x-3">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-8 py-4 bg-white border border-gray-300 text-gray-800 font-semibold rounded-xl hover:border-orange-300 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <Play className="w-5 h-5 text-orange-600 fill-orange-600" />
                </div>
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm">
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-1 shadow-2xl border border-gray-200">
              <div className="bg-white rounded-2xl overflow-hidden">
                {/* IDE Header */}
                <div className="px-6 py-4 bg-gray-900">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="text-white font-mono text-sm">codeflow-ai • terminal</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-orange-400" />
                      <Cpu className="w-4 h-4 text-orange-400" />
                    </div>
                  </div>
                </div>
                
                {/* Code Display */}
                <div className="p-6 font-mono text-sm bg-gray-50">
                  <div className="space-y-4">
                    <div className="text-green-600">$ codeflow init --project=webapp</div>
                    <div className="text-cyan-600">✓ Initialized AI-powered project</div>
                    <div className="text-yellow-600">$ ai --suggest component</div>
                    <div className="text-gray-800 ml-4">
                      <span className="text-orange-600">// AI Suggestion:</span>
                      {" "}Creating responsive navbar with dark mode
                    </div>
                    <div className="text-green-600 ml-8">→ Generating code...</div>
                    <div className="text-green-600 ml-8">✓ Component ready in 2.3s</div>
                    <div className="text-blue-600 ml-8">
                      <span className="text-gray-500">// Preview at</span> localhost:3000
                    </div>
                  </div>
                  
                  {/* Cursor */}
                  <div className="flex items-center mt-6">
                    <div className="w-2 h-5 bg-orange-500 animate-pulse" />
                    <div className="ml-2 text-gray-500">AI is ready for your next command...</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 right-8">
              <div className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-full shadow-lg flex items-center space-x-2 animate-bounce">
                <Zap className="w-4 h-4" />
                <span>Live AI Coding</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}