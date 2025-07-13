"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "Where does PriceToQuote get its pricing data?",
    answer:
      "Our AI aggregates public market rates, job boards, and user submissions to provide realistic, region-based estimates.",
  },
  {
    question: "Can I edit the AI suggested prices?",
    answer: "Absolutely. You remain in full control of your final quote amount.",
  },
  {
    question: "Will I get a complete detailed breakdown of the services?",
    answer: "The quote can be made as detailed as you want it to be.",
  },
  {
    question: "Is the email tracking real-time? How accurate is it?",
    answer:
      "The email tracking is real-time, and the status of your sent mail will be reflected in PtoQ in a matter of minutes.",
  },
  {
    question: "Can I customise quotes with my branding?",
    answer: "Yes, Pro and Agency plans offer custom logo and brand color options.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "As we use the best of tools and AI models to ensure your workflow is smooth and efficient, we won't be able to offer refunds. You can always reach out to us in case of encountering any issues/bugs.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Get answers to the most common questions about PQ Pro
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700/50 transition-colors duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 sm:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-200"
              >
                <span className="text-white font-semibold text-base sm:text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  ) : (
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 sm:px-8 pb-6 border-t border-gray-800/50">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-4">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
