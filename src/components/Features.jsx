import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Code2, TestTube2, Bug, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    title: "AI Code Completion",
    icon: <Code2 className="w-6 h-6" />,
    description: "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
    codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
    badge: "Smart Suggestions"
  },
  {
    title: "Automated Testing",
    icon: <TestTube2 className="w-6 h-6" />,
    description: "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
    codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
    badge: "Auto Tests"
  },
  {
    title: "Smart Debugging",
    icon: <Bug className="w-6 h-6" />,
    description: "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
    codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
    badge: "Debug AI"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">AI-Powered Features</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Build with </span>
            <span className="text-orange-600">Superpowers</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Accelerate your development workflow with cutting-edge AI tools designed for modern developers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Badge */}
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
                    {feature.badge}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-orange-500 p-3 text-white mb-6 flex items-center justify-center">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                  
                  {/* Code Preview */}
                  <div className="mt-auto">
                    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
                      <div className="px-4 py-3 bg-gray-800 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                          </div>
                          <span className="text-sm text-gray-300 font-mono">example.js</span>
                        </div>
                        <div className="text-xs text-gray-400 font-mono">AI Suggestion</div>
                      </div>
                      <div className="p-4 font-mono text-sm">
                        <SyntaxHighlighter
                          language="javascript"
                          style={nightOwl}
                          customStyle={{
                            margin: 0,
                            background: 'transparent',
                            fontSize: '0.75rem',
                            lineHeight: '1.5',
                          }}
                          wrapLines={true}
                        >
                          {feature.codeSnippet}
                        </SyntaxHighlighter>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105">
            <span>Explore All Features</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}