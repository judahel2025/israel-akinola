import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-surface py-16 sm:py-32">
      {/* Decorative background element */}
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -right-64 -top-64 h-[40rem] w-[40rem] rounded-[10rem] bg-primary/5 blur-[120px] mix-blend-screen"
      />
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute -bottom-64 -left-64 h-[35rem] w-[35rem] rounded-full bg-secondary/5 blur-[100px] mix-blend-screen"
      />

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: '-100px' }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-on-surface/5 bg-surface/80 p-6 shadow-xl backdrop-blur-2xl sm:rounded-[2.5rem] sm:p-12 lg:p-20"
        >
          <div className="relative z-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-4xl font-display text-xl font-semibold uppercase leading-[1.1] tracking-tight text-on-surface sm:text-2xl lg:text-3xl"
            >
              Architecting spaces where
              <br />
              <span className="text-on-surface/50">vision meets institutional reality.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="mx-auto mt-8 mb-12 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg font-light"
            >
              I partner with ambitious organizations, leaders, and cities to translate complex theories into working, high-impact systems. Let's build what comes next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-5 sm:flex-row"
            >
              <Link to="/contact" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.02, backgroundColor: 'var(--color-primary-container)', color: '#000' }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary-container px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-on-primary transition-colors sm:w-auto"
                >
                  Start a Conversation
                </motion.span>
              </Link>
              <Link to="/about" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center rounded-full border border-on-surface/20 bg-surface/5 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface transition-colors hover:bg-on-surface/10 sm:w-auto"
                >
                  Discover the Philosophy
                </motion.span>
              </Link>
            </motion.div>
          </div>
          
          {/* Internal floating shapes */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-[10%] top-[15%] h-12 w-12 rounded-lg border border-white/10 bg-white/5 mix-blend-overlay backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 45, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-[15%] bottom-[20%] h-16 w-16 rounded-full border border-white/10 bg-white/5 mix-blend-overlay backdrop-blur-sm"
          />
        </motion.div>
      </div>
    </section>
  )
}

