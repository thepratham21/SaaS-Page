import { Check, Zap, Shield, Globe, Users, Rocket, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for individuals and small teams",
    icon: <Zap className="w-6 h-6" />,
    bgColor: "bg-white",
    features: [
      "Up to 5 team members",
      "10GB cloud storage",
      "Basic AI assistance",
      "Email support",
      "API access",
      "Community access",
    ],
    badge: "Best for Startups"
  },
  {
    name: "Professional",
    price: "79",
    description: "Best for growing businesses",
    icon: <Rocket className="w-6 h-6" />,
    bgColor: "bg-white",
    features: [
      "Up to 25 team members",
      "100GB cloud storage",
      "Advanced AI models",
      "Priority 24/7 support",
      "Custom integrations",
      "Advanced analytics",
      "Team collaboration tools",
      "Custom workflow automation",
    ],
    popular: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large organizations",
    icon: <Globe className="w-6 h-6" />,
    bgColor: "bg-white",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise AI models",
      "Dedicated support manager",
      "Custom AI model training",
      "SLA guarantee",
      "Advanced security audit",
      "Custom deployment",
      "White-label options",
      "Quarterly business reviews",
    ],
    badge: "Enterprise Grade"
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">Flexible Pricing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Choose Your </span>
            <span className="text-orange-600">AI Power Plan</span>
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Scale your development team with the perfect AI assistance plan. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="group relative">
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-6 py-2 bg-orange-500 text-white font-bold rounded-full shadow-lg flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}
              
              {/* Main Card */}
              <div className={`relative ${plan.bgColor} rounded-3xl p-8 border-2 ${
                plan.popular 
                  ? 'border-orange-500 shadow-2xl scale-105' 
                  : 'border-gray-200 group-hover:border-orange-300'
              } transition-all duration-300 h-full flex flex-col`}>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 p-3 text-white">
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                      {!plan.popular && (
                        <span className="text-xs font-semibold text-orange-600">{plan.badge}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="flex-1 mb-8">
                  <div className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-orange-500" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-white border-2 border-gray-300 text-gray-800 hover:border-orange-400 hover:bg-orange-50'
                }`}>
                  {plan.popular ? 'Get Started Free' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Contact */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-full">
            <Users className="w-5 h-5" />
            <span>Need custom enterprise solutions? </span>
            <a href="#" className="font-semibold text-orange-400 hover:text-orange-300 ml-2">
              Contact Sales →
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">30-day</div>
              <div className="text-sm text-gray-600">Money-back guarantee</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
              <div className="text-sm text-gray-600">Uptime SLA</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Priority support</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200">
              <div className="text-2xl font-bold text-gray-900 mb-1">SOC 2</div>
              <div className="text-sm text-gray-600">Security certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}