import { Star, Quote, TrendingUp, Zap, Target, Award } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer @ TechCorp",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "CodeFlowAI has transformed how our team writes code. The AI suggestions are so accurate, it feels like having a senior developer pair programming with everyone.",
    rating: 5,
    stats: "3.2x faster development",
    icon: <Zap className="w-4 h-4" />
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Lead @ StartupXYZ",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "The automated testing and debugging features alone saved us 200+ hours last quarter. It's like having an entire QA team built into our workflow.",
    rating: 5,
    stats: "78% fewer bugs",
    icon: <Target className="w-4 h-4" />
  },
  {
    name: "Emily Watson",
    role: "CTO @ InnovateLabs",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
    content: "Our development velocity increased by 300% since adopting CodeFlowAI. The ROI was immediate, and our team's satisfaction is through the roof.",
    rating: 5,
    stats: "300% faster shipping",
    icon: <TrendingUp className="w-4 h-4" />
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Trusted by Developers</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Loved by </span>
            <span className="text-orange-600">Teams Worldwide</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of developers who have accelerated their workflow with AI-powered development tools.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">10K+</div>
            <div className="text-gray-600">Active Developers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">50M+</div>
            <div className="text-gray-600">Lines of Code Generated</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-gray-100 group-hover:text-orange-100 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>
                
                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8 relative">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-50 rounded-full">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                      {testimonial.icon}
                    </div>
                    <span className="text-sm font-semibold text-orange-700">{testimonial.stats}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-8 py-6 bg-gray-900 text-white rounded-2xl">
            <div className="text-left">
              <div className="text-xl font-bold">Ready to transform your workflow?</div>
              <div className="text-gray-300">Join thousands of successful teams</div>
            </div>
            <button className="px-8 py-3 bg-orange-500 font-semibold rounded-xl hover:bg-orange-600 transition-all duration-300 hover:scale-105 whitespace-nowrap">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}