import React from 'react'
import { motion } from 'framer-motion'

// Import all brand logos
import golearn from '../../assets/images/Golearn.jpg'
import gotap from '../../assets/images/GoTap.jpg'
import ivy from '../../assets/images/IVY.jpg'
import lfc from '../../assets/images/lfc.jpg'
import wr from '../../assets/images/WR.jpg'
import wema from '../../assets/images/wema.jpg'
import tax from '../../assets/images/tax.jpg'
import les from '../../assets/images/les.jpg'
import ifc from '../../assets/images/ifc.jpg'

const brands = [
  { name: 'Golearn', logo: golearn },
  { name: 'TapperX (Wema)', logo: gotap },
  { name: 'IVY', logo: ivy },
  { name: 'LFC', logo: lfc },
  { name: 'World Resources', logo: wr },
  { name: 'Wema Bank', logo: wema },
  { name: 'Tax Authority', logo: tax },
  { name: 'LES', logo: les },
  { name: 'IFC', logo: ifc },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const BrandsGridSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            A Network of Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface mb-6">
            Organizations & Brands
          </h2>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-light">
            collaborating with cities, community, companies, citizens...
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={logoVariants}
              className="glass-panel p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] group hover:border-primary-container/30 transition-smooth relative overflow-hidden aspect-square flex items-center justify-center bg-white/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-24 w-auto max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 relative z-10"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
