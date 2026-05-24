import React from 'react'
import { motion } from 'framer-motion'
import backgroundImage from '../../assets/images/hero_work.webp'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export const WorkHeroSection: React.FC = () => {
  return (
    <section className="hero-page">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-app-background via-app-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-app-background/40 via-transparent to-app-background" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <motion.p
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
              className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container"
            >
              PROOF
            </motion.p>
            
            <motion.h1
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-serif font-bold leading-tight text-on-surface"
            >
              Work & Case Studies
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
