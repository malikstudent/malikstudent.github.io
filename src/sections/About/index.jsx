import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import { education } from '../../data/education'
import { profile } from '../../data/profile'
import { siteContent } from '../../data/siteContent'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import AboutBio from './components/AboutBio'
import EducationList from './components/EducationList'

export default function About() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              eyebrow={siteContent.about.eyebrow}
              title={siteContent.about.title}
              description={siteContent.about.description}
            />
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <motion.div
              variants={fadeUp}
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AboutBio profile={profile} />
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial={prefersReducedMotion ? false : 'hidden'}
              whileInView={prefersReducedMotion ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.08 }}
            >
              <EducationList education={education} />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}