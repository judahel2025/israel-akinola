import React from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Counter } from '../common/Counter'

const impactStats = [
  {
    number: 50000,
    label: 'people directly and indirectly impacted.',
    suffix: '+',
  },
  {
    number: 400,
    label: 'businesss consulted and scaled since 2021',
    suffix: '+',
  },
  {
    number: 12,
    label: 'large scale projects delivered',
    suffix: '+',
  },
]

export const ImpactSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" ref={ref}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary-container/5 blur-[120px] rounded-full" />
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
          <p className="text-[10px] font-bold tracking-[0.4em] text-primary-container mb-4">
            Quantifiable change
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Impact
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-6xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true, margin: '-100px' }}
              className="glass-panel p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-center relative z-10">
                <p className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-on-surface mb-4 sm:mb-6 group-hover:text-primary-container transition-colors">
                  <Counter
                    end={stat.number}
                    duration={2.5}
                    isVisible={isInView}
                  />
                  <span className="text-primary-container">{stat.suffix}</span>
                </p>
                <div className="h-px w-8 bg-on-surface/10 mx-auto mb-6 group-hover:w-16 transition-all duration-500" />
                  <p className="text-base text-on-surface-variant font-medium tracking-widest leading-relaxed">
                    {stat.label}
                  </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
