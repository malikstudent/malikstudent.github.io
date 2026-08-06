import { motion } from 'framer-motion'
import AnimatedBackground from '../../components/AnimatedBackground'
import Container from '../../components/Container'
import ContactCard from '../../components/ContactCard'
import Footer from '../../components/Footer'
import SectionTitle from '../../components/SectionTitle'
import { profile } from '../../data/profile'
import { siteContent } from '../../data/siteContent'
import { socials } from '../../data/socials'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import ContactGrid from './components/ContactGrid'

export default function Contact() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-20 sm:py-24">
      <AnimatedBackground />
      <Container className="relative z-10">
        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              eyebrow={siteContent.contact.eyebrow}
              title={siteContent.contact.title}
              description={siteContent.contact.description}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactGrid socials={socials} ContactCardComponent={ContactCard} />
          </motion.div>
        </div>
      </Container>
      <div className="relative z-10 mt-16">
        <Footer name={profile.name} location={profile.location} socials={socials} />
      </div>
    </section>
  )
}
