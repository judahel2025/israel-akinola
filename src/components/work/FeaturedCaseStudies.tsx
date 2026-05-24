import React, { useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import golearn from '../../assets/images/Golearn.jpg'
import gotap from '../../assets/images/GoTap.jpg'
import tax from '../../assets/images/tax.jpg'

const featuredProjects = [
  {
    title: 'Golearn',
    logo: golearn,
    description: 'Digital learning platform transforming education access across Africa',
    link: '/work/golearn',
  },
  {
    title: 'TapperX (Wema Bank)',
    logo: gotap,
    description: 'Financial technology initiative bridging digital banking and financial inclusion',
    link: '/work/tapperx',
  },
  {
    title: 'National Tax Policy Implementation Committee',
    logo: tax,
    description: 'Strategic implementation of national tax systems across institutional structures',
    link: '/work/ntpic',
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

interface TiltCardProps {
  children: React.ReactNode
  to: string
  className?: string
}

const TiltCard: React.FC<TiltCardProps> = ({ children, to, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Map mouse position to degree of rotation (limit to 12 deg for subtle premium feel)
  const rotateX = useTransform(y, [-150, 150], [12, -12])
  const rotateY = useTransform(x, [-150, 150], [-12, 12])

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left - width / 2
    const mouseY = event.clientY - rect.top - height / 2
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link to={to} className="block w-full h-full" data-cursor-hover>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 1000,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </Link>
  )
}

export const FeaturedCaseStudies: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-surface-dim/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-right mb-10 md:mb-16 lg:mb-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            EVIDENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-on-surface">
            Featured Case Studies
          </h2>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              style={{ perspective: 1000 }}
              className="h-full"
            >
              <TiltCard
                to={project.link}
                className="glass-panel p-5 sm:p-7 md:p-10 rounded-[2rem] md:rounded-[2.5rem] group hover:border-primary-container/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full bg-surface/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full" style={{ transform: 'translateZ(35px)' }}>
                  <div className="mb-10 h-32 flex items-center justify-center p-6 bg-white rounded-[2rem] shadow-sm group-hover:shadow-md transition-all duration-500">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-on-surface mb-4 leading-tight group-hover:text-primary-container transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-on-surface-variant text-lg font-light mb-10 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* View Link */}
                  <div className="inline-flex items-center gap-3 group/link">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface group-hover/link:text-primary-container transition-colors">
                      Explore Case Study
                    </span>
                    <div className="h-px w-8 bg-on-surface/20 group-hover/link:w-12 group-hover/link:bg-primary-container transition-all duration-300" />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
