import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const AboutBioPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 flex flex-col justify-center items-center relative overflow-hidden bg-app-background">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-container/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary-container/5 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="container-max max-w-3xl relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass-panel p-8 sm:p-12 md:p-16 rounded-[2.5rem] text-center border-white/10 relative overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary-container mb-4">
            Biography Detail
          </p>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-on-surface mb-6 uppercase tracking-tight leading-none">
            THE MAN,<br />ISRAEL AKINOLA
          </h1>

          {/* Divider */}
          <div className="h-px w-24 bg-primary-container/40 mx-auto my-8" />

          {/* Body Content / Future Task Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-left space-y-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                pending_actions
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary-container font-semibold">
                  Task Status
                </p>
                <p className="text-sm text-on-surface font-medium">
                  Profile Creation - Future Task
                </p>
              </div>
            </div>

            <p className="text-base text-on-surface-variant font-light leading-relaxed">
              The complete, in-depth biography of Israel Akinola is currently under development. This section is set as a future task. 
            </p>
            <p className="text-base text-on-surface-variant font-light leading-relaxed">
              Once the profile documents are finalized and provided, this page will showcase a comprehensive look into his journey, philosophy, leadership, and systemic achievements across education, finance, and policy.
            </p>
          </div>

          {/* Navigation CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <Link to="/about">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 rounded-full bg-primary-container px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em] text-on-primary transition-all shadow-md hover:shadow-xl"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to About
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
