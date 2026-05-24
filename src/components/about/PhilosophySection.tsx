import React from 'react'
import { motion } from 'framer-motion'

const philosophyStatements = [
  'Leading is first a personal art before a public act.',
  'The only work that matters is work that multiplies beauty on the earth.',
  'Designing systems is about seeing what does not yet exist.',
]

export const PhilosophySection: React.FC = () => {
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
          <p className="text-[10px] font-bold tracking-[0.4em] text-primary-container mb-4">
            Truths &
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Philosophy
          </h2>
        </motion.div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {philosophyStatements.map((statement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="glass-panel p-6 sm:p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] flex flex-col justify-between group hover:border-primary-container/30 transition-smooth"
            >
              <div>
                <div className="mb-8 text-primary-container/20 group-hover:text-primary-container/40 transition-colors">
                  <span className="text-6xl font-serif leading-none">0{index + 1}</span>
                </div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-on-surface leading-tight">
                  {statement}
                </p>
              </div>
              
              <div className="mt-8 h-1 w-12 bg-primary-container/40 group-hover:w-20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
