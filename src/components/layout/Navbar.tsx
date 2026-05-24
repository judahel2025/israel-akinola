import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import brandLogo from '@brand-logo'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Expertise', path: '/services' },
    { label: 'Work', path: '/work' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">


      {/* Glass nav — flows down from the roof on scroll */}
      <div
        className={`transition-[padding,border-radius] duration-300 ease-out ${
          scrolled ? 'pt-4 pb-2 px-3 sm:px-4 lg:px-8' : 'p-0 w-full max-w-none'
        }`}
      >
        <motion.nav
          className={`mx-auto overflow-hidden transition-all duration-300 ease-out ${
            scrolled
              ? 'container-max rounded-2xl border border-on-surface/10 bg-surface shadow-[0_8px_24px_-12px_rgba(0,0,0,0.15)]'
              : 'w-full rounded-none border-b border-on-surface/5 bg-app-background shadow-none'
          }`}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <Link
              to="/"
              className="flex shrink-0 items-center gap-2"
              data-cursor-hover
            >
              <img
                src={brandLogo}
                alt="Israel Akinola"
                className="h-16 w-auto object-contain sm:h-18 md:h-20 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                loading="eager"
              />
            </Link>

            <div className="hidden flex-1 items-center justify-center gap-1 lg:flex">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-on-surface/75 transition-colors hover:bg-white/[0.06] hover:text-on-surface"
                  data-cursor-hover
                >
                  {item.label}
                </Link>
              ))}
            </div>



            <button
              type="button"
              onClick={toggleMenu}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-surface-container/60 lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              data-cursor-hover
            >
              <span className="material-symbols-outlined text-2xl text-on-surface">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden border-t border-on-surface/10 lg:hidden"
              >
                <div className="px-4 py-4">
                  <div className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="rounded-xl px-3 py-3.5 text-sm font-semibold uppercase tracking-wider text-on-surface/85 hover:bg-white/[0.06] active:bg-white/[0.1]"
                        onClick={() => setIsOpen(false)}
                        data-cursor-hover
                      >
                        {item.label}
                      </Link>
                    ))}

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  )
}
