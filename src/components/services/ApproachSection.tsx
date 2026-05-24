import React from 'react'
import { motion } from 'framer-motion'

const approachSteps = [
  {
    number: '01',
    title: 'IDEATION',
    description: 'Deep problem understanding, advanced solutions thinking, and proactive idea seeking.',
  },
  {
    number: '02',
    title: 'CURATION',
    description: 'Systematic research, strategic profiling, building expert teams, and kick-starting innovation.',
  },
  {
    number: '03',
    title: 'CREATION',
    description: 'Robust systems design, project development, strategic invention, deployment, and brand architecture.',
  },
  {
    number: '04',
    title: 'EXECUTION',
    description: 'Precision deployment, sustainable community building, progressive growth, and acculturation.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export const ApproachSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 lg:py-32 bg-surface-dim/20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-container/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-10 md:mb-16 lg:mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            PROCESS &
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Approach
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {approachSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="glass-panel p-5 sm:p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden flex flex-col bg-surface/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Step Number */}
                <div className="text-5xl md:text-6xl font-serif font-bold text-on-surface/10 group-hover:text-primary-container/20 transition-colors duration-500 mb-8">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="text-xl md:text-2xl font-serif font-bold text-on-surface mb-4 group-hover:text-primary-container transition-colors tracking-widest">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-on-surface-variant text-base font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              <div className="mt-8 h-1 w-12 bg-primary-container/20 group-hover:w-full group-hover:bg-primary-container/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
