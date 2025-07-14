"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Freelance Designer",
    company: "Creative Studio",
    content:
      "PQ Pro has completely transformed how I handle client quotes. The AI pricing suggestions are incredibly accurate, and I've increased my conversion rate by 40%.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Agency Owner",
    company: "Digital Solutions Inc",
    content:
      "The email tracking feature is a game-changer. Knowing when clients open quotes helps me follow up at the perfect time. Our close rate has never been better.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Consultant",
    company: "Growth Partners",
    content:
      "I love how professional the quotes look and how easy it is to customize them. My clients are impressed, and I'm saving hours every week.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    role: "Web Developer",
    company: "Code Craft",
    content:
      "The analytics dashboard gives me insights I never had before. I can see which quotes perform best and optimize my pricing strategy accordingly.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Park",
    role: "Business Consultant",
    company: "Strategic Advisors",
    content:
      "PQ Pro's time tracking integration is perfect. I can accurately price my services based on actual time spent, leading to better profitability.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "James Wilson",
    role: "Creative Director",
    company: "Brand Studio",
    content:
      "The client management features keep everything organized. I can track all communications and project history in one place. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
];

export function TestimonialsSection() {
  return (
    <div
      className="py-12 sm:py-16 lg:py-20 bg-black overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what professionals
            are saying about PQ Pro.
          </p>
        </motion.div>
      </div>

      {/* Mobile: Vertical Stack */}
      <div className="sm:hidden px-4 space-y-6">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard key={`mobile-${index}`} testimonial={testimonial} />
        ))}
      </div>

      {/* Desktop: Infinite Scroll */}
      <div className="hidden sm:block relative">
        <div className="flex animate-scroll">
          {/* First set of testimonials */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={`first-${index}`} testimonial={testimonial} />
          ))}
          {/* Duplicate set for seamless loop */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`second-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <div className="flex-shrink-0 w-full sm:w-96 sm:mx-4">
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 h-full hover:bg-gray-900/70 transition-all duration-300">
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
          />
          <div>
            <h4 className="text-white font-semibold text-sm sm:text-base">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm">
              {testimonial.role}
            </p>
            <p className="text-gray-500 text-xs">{testimonial.company}</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current"
            />
          ))}
        </div>

        <div className="relative">
          <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mb-2" />
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            {testimonial.content}
          </p>
        </div>
      </div>
    </div>
  );
}
