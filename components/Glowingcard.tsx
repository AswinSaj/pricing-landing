"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Brain, Zap, Mail, BarChart3, Users, Clock } from "lucide-react";

const features = [
  {
    title: "AI-Powered Pricing",
    description:
      "Get intelligent price suggestions based on project scope and market data.",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    details: [
      "Machine learning algorithms analyze market trends",
      "Competitive pricing recommendations",
      "Project complexity assessment",
      "Real-time price optimization",
    ],
  },
  {
    title: "Instant Quotes",
    description:
      "Generate professional quotes in seconds with our smart templates.",
    icon: Zap,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Pre-built professional templates",
      "Customizable branding options",
      "One-click quote generation",
      "PDF export functionality",
    ],
  },
  {
    title: "Email Tracking",
    description:
      "Know when clients open your quotes and follow up at the perfect time.",
    icon: Mail,
    color: "from-green-500 to-emerald-500",
    details: [
      "Real-time open notifications",
      "Click tracking analytics",
      "Automated follow-up reminders",
      "Engagement insights",
    ],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track your quote performance and conversion rates with detailed insights.",
    icon: BarChart3,
    color: "from-orange-500 to-red-500",
    details: [
      "Conversion rate tracking",
      "Revenue analytics",
      "Client behavior insights",
      "Performance metrics",
    ],
  },
  {
    title: "Client Management",
    description:
      "Organize and manage all your clients in one centralized location.",
    icon: Users,
    color: "from-indigo-500 to-purple-500",
    details: [
      "Contact management system",
      "Project history tracking",
      "Communication logs",
      "Client preferences",
    ],
  },
  {
    title: "Time Tracking",
    description:
      "Track time spent on projects and automatically calculate accurate quotes.",
    icon: Clock,
    color: "from-teal-500 to-blue-500",
    details: [
      "Automatic time logging",
      "Project time allocation",
      "Hourly rate calculations",
      "Time-based pricing",
    ],
  },
];

export function GlowingEffectDemoSecond() {
  return (
    <ul className="max-w-7xl mx-auto z-100 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, idx) => (
        <li key={idx} className="list-none">
          <div className="relative h-full rounded-2xl border border-neutral-200 dark:border-neutral-800 p-2 md:rounded-3xl md:p-3">
            <GlowingEffect
              blur={0}
              borderWidth={3}
              spread={80}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative flex h-full flex-col gap-6 rounded-xl p-6 bg-white dark:bg-[#0d0d0d] transition-all duration-300">
              <div className="w-fit rounded-lg border border-gray-300 dark:border-gray-600 p-2">
                <feature.icon className="h-5 w-5 text-black dark:text-neutral-400" />
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
              <ul className="text-base space-y-2 mt-2 list-disc pl-5 text-neutral-700 dark:text-neutral-400">
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
