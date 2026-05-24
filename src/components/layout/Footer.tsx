import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [showSubscribeModal, setShowSubscribeModal] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        setShowSubscribeModal(false)
        setName('')
        setEmail('')
      }, 2500)
    }, 1200)
  }

  return (
    <footer className="bg-[#000000] text-on-surface/90 relative z-40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="mb-14 text-center sm:mb-20">
          <h2 className="mb-4 font-display text-2xl font-black uppercase tracking-tight text-white sm:text-3xl md:text-6xl lg:text-7xl">
            NEWSLETTER
          </h2>
          <p className="mb-2 text-sm text-white">Israel also has a newsletter!</p>
          <p className="mb-8 text-sm text-white max-w-3xl mx-auto leading-relaxed">
            Leadership, Liberty, Life, Love, Thoughts, Philosophy, Truth, Adventure, Power, Theories, Art, Science, Money, Grace
          </p>
          <p className="mb-4 text-sm font-semibold text-white">Sign up for free!</p>
          
          <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => setShowSubscribeModal(true)}
              className="w-full shrink-0 rounded-full bg-white px-10 py-4 text-sm font-bold uppercase tracking-wide text-black transition-transform hover:scale-105 sm:w-auto"
            >
              SUBSCRIBE ME
            </button>
          </div>
          <p className="mt-4 text-[10px] text-white">
            By signing up, you agree to our privacy policy.
          </p>
        </div>

        {/* Links Grid */}
        <div className="mb-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              EXPERTISE
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Strategy</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Innovation</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Growth</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Project Management</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">System Design</Link></li>
              <li><Link to="/services" className="hover:text-primary-container transition-colors">Policy and Governance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              SOLUTIONS
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Community Building</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Consultation</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Policy Advisory</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Marketing</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Cultural Engineering</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Branding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              ISRAEL AKINOLA
            </h3>
            <ul className="space-y-4 text-sm text-white">
              <li><Link to="/about" className="hover:text-primary-container transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-container transition-colors">Contact us</Link></li>
              <li><Link to="/work" className="hover:text-primary-container transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-primary-container transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-xs font-black uppercase tracking-widest text-white">
              CONNECT
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white">
              Join the conversation and stay updated on the latest insights.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/theking_israel" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaInstagram /></a>
              <a href="https://linkedin.com/in/israel-akinola" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaLinkedin /></a>
              <a href="https://x.com/theking_israel" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-primary-container transition-colors"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        {/* Massive Logo */}
        <div className="mb-8 flex justify-center">
          <h1 className="font-display text-[13vw] font-black leading-none tracking-tighter text-[#fdf6e3]/40 sm:text-[15vw] lg:text-[14rem]">
            Akinola
          </h1>
        </div>

        {/* Legal Notices */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white sm:flex-row sm:pt-8">
          <div className="max-w-2xl text-center sm:text-left">
            <p>© {currentYear} Israel Akinola. All rights reserved.</p>
            <p className="mt-1 text-white">
              Building systems that shape people, nations, and the future.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-right sm:text-left">
            <Link to="#" className="hover:text-primary-container text-white">Legal notices</Link>
            <Link to="#" className="hover:text-primary-container text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>

      {/* Modal Newsletter Dialog */}
      <AnimatePresence>
        {showSubscribeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel w-full max-w-md rounded-[2.5rem] border border-white/10 bg-zinc-950/90 p-8 shadow-2xl relative"
            >
              <button
                onClick={() => setShowSubscribeModal(false)}
                className="absolute top-6 right-6 text-white/60 hover:text-white"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>

              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <span className="material-symbols-outlined text-primary-container text-6xl">
                    check_circle
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">
                    Thank You!
                  </h3>
                  <p className="text-sm text-white/70">
                    You have successfully registered for our newsletter.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-2">
                      Newsletter Registration
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-white uppercase tracking-tight">
                      Join the Network
                    </h3>
                  </div>

                  <form onSubmit={handleSubscribe} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-primary-container focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-semibold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        required
                        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-white/30 focus:border-primary-container focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-white py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-all hover:bg-primary-container hover:text-on-primary font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Registering...' : 'Complete Registration'}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}
