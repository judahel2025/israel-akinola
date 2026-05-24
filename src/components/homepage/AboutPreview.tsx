import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/hero_about.webp'

export const AboutPreview: React.FC = () => {
  return (
    <section className="bg-surface-dim py-6 sm:py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-3xl border border-on-surface/5 shadow-xl md:grid-cols-2 md:rounded-[2rem]">
          
          {/* Profile Image — full height, no crop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="group relative min-h-[20rem] overflow-hidden md:min-h-[32rem]"
          >
            <img
              src={profileImage}
              alt="Israel Akinola"
              className="h-full w-full object-cover object-top grayscale transition-all duration-700 group-hover:grayscale-0"
              loading="lazy"
              decoding="async"
            />
            {/* Dark overlay gradient for depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/5" />
          </motion.div>

          {/* Content panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col justify-center bg-surface-container-high/40 px-6 py-8 backdrop-blur-sm sm:px-12 sm:py-10"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mb-2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container"
            >
              THINKER STRATEGIST LEADER
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-on-surface sm:text-4xl"
            >
              ISRAEL AKINOLA
            </motion.h2>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 h-px w-12 origin-left bg-primary-container/60"
            />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <p className="text-sm leading-relaxed text-on-surface-variant sm:text-base border-l-2 border-primary-container/30 pl-4 py-1 bg-white/[0.02] rounded-r-md">
                [Profile Creation &mdash; Future Task: The first 2 paragraphs of the profile information will be placed here.]
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant/70 border-l-2 border-primary-container/20 pl-4 py-1 bg-white/[0.01] rounded-r-md">
                [Please provide the profile information to update this section.]
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex gap-8 border-t border-white/[0.06] pt-6"
            >
              <div>
                <p className="font-display text-3xl font-semibold text-on-surface">7</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Years of Impact</p>
              </div>
              <div className="w-px bg-white/[0.06]" />
              <div>
                <p className="font-display text-3xl font-semibold text-on-surface">50+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-on-surface-variant">Projects Led</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8"
            >
              <Link to="/about" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-[11px] font-bold uppercase tracking-[0.25em] text-on-surface transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Learn More
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
