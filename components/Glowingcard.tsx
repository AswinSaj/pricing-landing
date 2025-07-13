"use client"

import { Brain, Zap, Mail, BarChart3, Users, Clock, ChevronRight } from "lucide-react"
import { motion } from "motion/react"

const features = [
  {
    title: "AI-Powered Pricing",
    description: "Get intelligent price suggestions based on project scope and market data.",
    icon: Brain,
    iconColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    borderColor: "from-purple-500/20 to-pink-500/20",
    details: [
      "Machine learning algorithms analyze market trends",
      "Competitive pricing recommendations",
      "Project complexity assessment",
      "Real-time price optimization",
    ],
  },
  {
    title: "Instant Quotes",
    description: "Generate professional quotes in seconds with our smart templates.",
    icon: Zap,
    iconColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
    borderColor: "from-blue-500/20 to-cyan-500/20",
    details: [
      "Pre-built professional templates",
      "Customizable branding options",
      "One-click quote generation",
      "PDF export functionality",
    ],
  },
  {
    title: "Email Tracking",
    description: "Know when clients open your quotes and follow up at the perfect time.",
    icon: Mail,
    iconColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    borderColor: "from-green-500/20 to-emerald-500/20",
    details: [
      "Real-time open notifications",
      "Click tracking analytics",
      "Automated follow-up reminders",
      "Engagement insights",
    ],
  },
  {
    title: "Analytics Dashboard",
    description: "Track your quote performance and conversion rates with detailed insights.",
    icon: BarChart3,
    iconColor: "bg-gradient-to-r from-orange-500 to-red-500",
    borderColor: "from-orange-500/20 to-red-500/20",
    details: ["Conversion rate tracking", "Revenue analytics", "Client behavior insights", "Performance metrics"],
  },
  {
    title: "Client Management",
    description: "Organize and manage all your clients in one centralized location.",
    icon: Users,
    iconColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
    borderColor: "from-indigo-500/20 to-purple-500/20",
    details: ["Contact management system", "Project history tracking", "Communication logs", "Client preferences"],
  },
  {
    title: "Time Tracking",
    description: "Track time spent on projects and automatically calculate accurate quotes.",
    icon: Clock,
    iconColor: "bg-gradient-to-r from-teal-500 to-blue-500",
    borderColor: "from-teal-500/20 to-blue-500/20",
    details: ["Automatic time logging", "Project time allocation", "Hourly rate calculations", "Time-based pricing"],
  },
]

export function GlowingEffectDemoSecond() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative"
          >
            <div className="relative h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 transition-all duration-300 hover:border-gray-600/50">
              {/* Gradient border glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
              />
              <div
                className={`absolute inset-[1px] rounded-2xl bg-gradient-to-r ${feature.borderColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${feature.iconColor} flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <motion.div
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors duration-200"
                    whileHover={{ x: 2 }}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                </div>

                {/* Title and Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-200">
                  {feature.description}
                </p>

                {/* Feature List */}
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600 mt-2 mr-3 flex-shrink-0 group-hover:bg-gray-500 transition-colors duration-200" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
