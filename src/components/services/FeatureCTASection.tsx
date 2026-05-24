import React from 'react'
import { motion } from 'framer-motion'

export const FeatureCTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-container">
      <div className="container-max max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-6"
        >
          {/* Text */}
          <p className="text-lg sm:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            FOR A DEEPER LOOK INTO OTHER PROJECTS, EXPLORE MY WORK AT IVY
          </p>

          {/* Button */}
          <motion.a
            href="https://ivytowershq.wixstudio.com/ivytower"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-primary-container text-surface font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore Full Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
