import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import backgroundImage from '../../assets/images/hero_extra.webp'
import brandLogo from '@brand-logo'

const slides = [
  { id: '01', title: 'Strategic Systems', line: 'Designing frameworks that scale impact.' },
  { id: '02', title: 'Digital Leadership', line: 'Guiding teams with clarity and purpose.' },
  { id: '03', title: 'Ideas Into Motion', line: 'From vision to execution, end to end.' },
  { id: '04', title: 'Nation-Scale Thinking', line: 'Policy, culture, and lasting change.' },
  { id: '05', title: 'Community & Culture', line: 'Leadership rooted in people first.' },
]

export const HeroSection: React.FC = () => {
  const [active, setActive] = useState(4)

  return (
    <section className="relative overflow-hidden pt-[4rem] sm:pt-[4.5rem]" style={{ minHeight: 'var(--vh-full, 100vh)' }}>
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(217,119,6,0.08),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.04),transparent_45%)]" />

      <div className="container-max relative z-10 px-3 pb-3 sm:px-6 sm:pb-4 lg:px-8 lg:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.3)] ring-1 ring-white/10 sm:rounded-[2rem]"
        >
          {/* Cinematic image layer */}
          <div
            className="relative sm:aspect-[21/9] sm:min-h-[min(72vh,560px)]"
            style={{ minHeight: 'calc(var(--vh-full, 100vh) - 6rem)' }}
          >
            {/* On sm+, use the aspect ratio; on mobile, fill remaining viewport */}
            <style>{`@media (min-width: 640px) { .hero-card-inner { min-height: min(72vh, 560px) !important; } }`}</style>
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 14, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            >
              <img
                src={backgroundImage}
                alt=""
                className="h-full w-full object-cover object-[center_22%] sm:object-[center_28%]"
                loading="eager"
              />
            </motion.div>

            {/* Cinematic grading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 sm:bg-gradient-to-r sm:from-black/80 sm:via-black/35 sm:to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,0,0,0.5),transparent_55%)] opacity-90" />
            <div className="absolute inset-0 mix-blend-overlay bg-primary-container/[0.07]" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-5 pb-4 sm:p-10 lg:p-12">

              <div className="max-w-xl">
                <motion.img
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 0.95, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  src={brandLogo}
                  alt="Israel Akinola"
                  className="mb-6 hidden h-24 w-auto object-contain brightness-0 invert sm:block md:h-28"
                />
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mb-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/60 sm:mb-3 sm:text-xs"
                >
                  Thinker · Strategist · Leader
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.65 }}
                  className="font-display text-[1.2rem] font-semibold uppercase leading-[1.1] tracking-tight text-white drop-shadow-sm xs:text-2xl sm:text-3xl lg:text-4xl xl:text-[2.8rem]"
                >
                  STRATEGY AND INNOVATION,
                  <br />
                  POLICY AND GOVERNANCE,
                  <br />
                  <span className="text-white/90">LIFE AND LEADERSHIP</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-3 max-w-md text-[13px] leading-relaxed text-white/70 sm:mt-5 sm:text-base"
                >
                  DESIGNING SYSTEMS AND SOLUTIONS THAT ELEVATE THE FUNCTIONAL QUALITY OF HUMAN EXISTENCE, AND THE HUMAN EXPERIENCE TO A SUPERIOR PLACE.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.55 }}
                  className="mt-5 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
                >
                  <Link to="/work" data-cursor-hover className="w-full sm:w-auto">
                    <motion.span
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary-container py-2.5 pl-6 pr-2 text-[13px] font-semibold uppercase tracking-wide text-on-primary shadow-lg sm:w-auto sm:pl-7 sm:text-sm"
                    >
                      Explore work
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-on-primary text-primary-container transition-transform group-hover:rotate-[-8deg] sm:h-10 sm:w-10">
                        <span className="material-symbols-outlined text-lg sm:text-xl">arrow_forward</span>
                      </span>
                    </motion.span>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[13px] font-semibold uppercase tracking-wide text-white/90 backdrop-blur-md transition-colors hover:bg-white/10 sm:w-auto sm:px-7 sm:text-sm"
                    data-cursor-hover
                  >
                    Start a conversation
                  </Link>
                </motion.div>
              </div>

              {/* Slide indicators */}
              <div className="mt-6 border-t border-white/10 pt-3 sm:mt-0 sm:pt-6">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide sm:grid sm:grid-cols-5 sm:gap-2 sm:overflow-visible">
                  {slides.map((s, i) => {
                    const isActive = i === active
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setActive(i)}
                        onMouseEnter={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        className="group min-w-[5.5rem] shrink-0 text-left sm:min-w-0"
                        data-cursor-hover
                      >
                        <div
                          className={`mb-1.5 h-px w-full transition-all duration-300 sm:mb-2 ${
                            isActive ? 'bg-white/90' : 'bg-white/15 group-hover:bg-white/40'
                          }`}
                          style={{
                            transform: isActive ? 'scaleX(1)' : 'scaleX(0.85)',
                            transformOrigin: 'left',
                          }}
                        />
                        <p className="font-display text-[9px] font-semibold text-white/80 sm:text-xs">
                          {s.id}{' '}
                          <span className="font-sans font-normal text-white/50">{s.title}</span>
                        </p>
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              key={s.id}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-1 hidden text-[11px] leading-snug text-white/45 sm:block"
                            >
                              {s.line}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
