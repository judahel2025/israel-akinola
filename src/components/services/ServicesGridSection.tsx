import React from 'react'
import { motion } from 'framer-motion'

const services = [
  'Strategy',
  'Consultation',
  'Project Management',
  'Design Thinking',
  'Systems Design',
  'Writing',
  'Legal Expertise',
  'Media',
  'Branding',
  'Marketing',
  'Policy',
  'Ideation',
  'Curation',
  'Creation',
  'Execution',
  'Finance',
  'Innovation',
  'Growth',
  'Policy and Governance',
  'Community Building',
  'Policy Advisory',
  'Cultural Engineering',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export const ServicesGridSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-surface-dim/30">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10 md:mb-16 lg:mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            A COMPREHENSIVE LIST OF
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Core Offerings
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-on-surface/[0.02] border border-on-surface/[0.06] p-4 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden flex items-center justify-center text-center h-36 sm:h-48 md:h-56 bg-surface/20"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <span className="text-5xl font-serif text-on-surface/5 absolute -top-8 -left-8 pointer-events-none group-hover:text-primary-container/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="text-xl md:text-2xl font-serif font-bold text-on-surface group-hover:text-primary-container transition-all duration-300 transform group-hover:scale-105">
                  {service}
                </p>
                <div className="h-px w-0 bg-primary-container/40 mx-auto mt-4 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
