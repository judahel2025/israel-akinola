import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { ContactCard } from './ContactCard'

export const ContactCardsGrid: React.FC = () => {
  const contactOptions = [
    {
      icon: FaEnvelope,
      title: 'theisraelakinola@gmail.com',
      link: 'mailto:theisraelakinola@gmail.com',
      isExternal: false,
    },
    {
      icon: FaLinkedin,
      title: 'Connect on LinkedIn',
      link: 'https://linkedin.com/in/israel-akinola',
      isExternal: true,
    },
    {
      icon: FaXTwitter,
      title: 'Follow on X',
      link: 'https://x.com/theking_israel',
      isExternal: true,
    },
    {
      icon: FaWhatsapp,
      title: 'Chat on WhatsApp',
      link: 'https://wa.me/+2348160688443',
      isExternal: true,
    },
  ]

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/[0.03] blur-[150px] rounded-full" />
        </div>
      </div>

      <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {contactOptions.map((option, index) => (
            <ContactCard
              key={index}
              icon={option.icon}
              title={option.title}
              link={option.link}
              isExternal={option.isExternal}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
