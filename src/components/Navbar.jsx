import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

export default function Navbar({ links = [], activeId = '', brand, className = '' }) {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
      animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 border-b border-white/50 bg-white/80 backdrop-blur-xl ${className}`.trim()}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="font-display text-base font-semibold tracking-tight text-secondary sm:text-lg">
            {brand}
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = activeId === link.href.replace('#', '')
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-secondary'
                  }`}
                >
                  {link.label}
                </motion.a>
              )
            })}
          </nav>
        </div>
        <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 md:hidden" aria-label="Section navigation">
          {links.map((link) => {
            const isActive = activeId === link.href.replace('#', '')
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={prefersReducedMotion ? undefined : { y: -1 }}
                whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-colors sm:text-sm ${
                  isActive ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-secondary'
                }`}
              >
                {link.label}
              </motion.a>
            )
          })}
        </nav>
      </div>
    </motion.header>
  )
}