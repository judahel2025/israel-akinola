import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ivyLogo from '../../assets/images/IVY.jpg'
import squareLogo from '../../assets/images/logos/square-logo.png'
import collabImage from '../../assets/images/WhatsApp Image 2026-04-20 at 11.44.18.jpeg'

const slideVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const logoVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' }
  }
}

export const ProfileSection: React.FC = () => {
  const introSlides = [
    "Israel Akinola, a symphony of gifts and graces,",
    "is a thinker, thought leader, and cultural engineer—",
    "an inspiring professional excelling as a speaker, strategist, and an emerging global leader."
  ]

  const coreSlides = [
    "At the core of his work is a commitment to community, excellence, and innovation—",
    "amplifying the voices and potential of the next generation across the continent and beyond."
  ]

  return (
    <section className="py-12 md:py-20 bg-surface overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
          
          {/* Chapter 1: The Identity (Text + Visual Side-by-Side) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-4 text-left">
              {introSlides.map((text, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={slideVariants}
                >
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-on-surface leading-tight">
                    {text}
                  </h2>
                </motion.div>
              ))}
            </div>

            {/* Strategic Collaboration Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative overflow-hidden rounded-[2rem] glass-panel p-2 md:p-3 shadow-none border-white/10"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-container/10 via-transparent to-secondary-container/10 opacity-30" />
              <img
                src={collabImage}
                alt="Strategic Brainstorming"
                className="w-full h-auto rounded-[1.5rem] object-cover relative z-10"
              />
            </motion.div>
          </div>

          {/* Chapter 2: IVY (Untouched structure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={logoVariants}
              className="flex justify-center md:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary-container/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={ivyLogo}
                  alt="IVY Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-3xl relative z-10 shadow-2xl"
                />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
            >
              <p className="text-base sm:text-xl md:text-2xl text-on-surface leading-relaxed font-light">
                As the founder of <span className="text-primary-container font-semibold">IVY</span>, he designs systems that elevate the functional quality of human existence and the human experience to a superior place through innovative leadership, strategy, and systemic change, having empowered over 50,000 young people across Africa and the diaspora.
              </p>
            </motion.div>
          </div>

          {/* Chapter 3: SQUARE (Untouched structure) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } }
              }}
              className="order-2 md:order-1"
            >
              <p className="text-base sm:text-xl md:text-2xl text-on-surface leading-relaxed font-light text-right md:text-left">
                He is also the convener of <span className="text-[#FF5722] font-semibold">SQUARE</span>, a community for deep, truth-centered conversations.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={logoVariants}
              className="flex justify-center md:justify-start order-1 md:order-2"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#FF5722]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <img
                  src={squareLogo}
                  alt="SQUARE Logo"
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-3xl relative z-10 shadow-2xl bg-white p-4"
                />
              </div>
            </motion.div>
          </div>

          {/* Chapter 4: The Core (Slides) */}
          <div className="space-y-4 text-left pt-8">
            <div className="h-px w-16 bg-on-surface/10 mb-8" />
            {coreSlides.map((text, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={slideVariants}
              >
                <p className="text-sm sm:text-lg md:text-2xl text-on-surface leading-relaxed font-serif text-left">
                  {text}
                </p>
              </motion.div>
            ))}

            {/* Read Full Bio CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-10 flex justify-start"
            >
              <Link to="/about/bio" data-cursor-hover>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-primary-container px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-on-primary transition-all shadow-lg hover:shadow-xl animate-pulse"
                >
                  Read Full Bio
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </motion.span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
