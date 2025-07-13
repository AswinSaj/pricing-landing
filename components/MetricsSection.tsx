"use client"

import { motion } from "motion/react"
import { Users, Globe, FileText, TrendingUp, CheckCircle } from "lucide-react"

const metrics = [
  {
    icon: Users,
    value: "5,000+",
    label: "Active Users",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    value: "100K+",
    label: "Quotes Generated",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingUp,
    value: "94%",
    label: "Success Rate",
    color: "from-orange-500 to-red-500",
  },
]

export function MetricsSection() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-lg`}
              >
                <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400 font-medium text-sm sm:text-base">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mb-2 sm:mb-0 sm:mr-3" />
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white text-center">
              100+ users have already simplified their pricing and quoting workflow
            </span>
          </div>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            Join the growing community of professionals who have streamlined their business processes with PQ Pro
          </p>
        </motion.div>
      </div>
    </div>
  )
}
