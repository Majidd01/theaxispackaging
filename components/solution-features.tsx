"use client"

import { CheckCircle, FileText, Palette, Award, Package, Settings } from "lucide-react"

export function SolutionFeatures() {
  const features = [
    {
      icon: CheckCircle,
      title: "Dedicated Expert Support",
      description: "Make more informed decisions with our dedicated team of product specialists.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      icon: Package,
      title: "End-to-End Solution",
      description: "From concept to your door, we handle design, printing, and everything else you need.",
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100"
    },
    {
      icon: Settings,
      title: "Custom Sizing",
      description: "Fully control the size of your packaging with our custom sizing tailored to your product.",
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      icon: Award,
      title: "Quality Promise",
      description: "We guarantee the highest quality product and customer experience with every order.",
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200 mb-6">
            <span className="text-sm font-semibold text-[var(--axis-dark-blue)]">🎯 Why Choose Axis Packaging</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--axis-dark-blue)] mb-6 leading-tight">
            We are your best solution for{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Custom Packaging
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Never worry about going to multiple sources to get your dream packaging.
            We handle everything from design to delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`}></div>
              
              <div className="text-center relative">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.bgGradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`w-10 h-10 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`} />
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                  feature.gradient.includes('blue') ? 'text-blue-600 group-hover:text-white' :
                  feature.gradient.includes('orange') ? 'text-orange-600 group-hover:text-white' :
                  feature.gradient.includes('purple') ? 'text-purple-600 group-hover:text-white' :
                  'text-green-600 group-hover:text-white'
                }`}>
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Floating Number Badge */}
              <div className={`absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r ${feature.gradient} text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span>✨ Trusted by 50,000+ businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  )
}