import { motion } from 'framer-motion'
import AnimatedBackground from '../../components/AnimatedBackground'
import Container from '../../components/Container'
import { profile } from '../../data/profile'
import { siteContent } from '../../data/siteContent'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import HeroActions from './components/HeroActions'
import HeroContent from './components/HeroContent'

export default function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="hero" className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <AnimatedBackground />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
          >
            <HeroContent profile={profile} heroMeta={siteContent.hero} />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.1 }}
          >
            <HeroActions profile={profile} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}