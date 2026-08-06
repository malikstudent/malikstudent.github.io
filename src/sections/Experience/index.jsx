import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import Timeline from '../../components/Timeline'
import { experience } from '../../data/experience'
import { siteContent } from '../../data/siteContent'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import ExperienceTimeline from './components/ExperienceTimeline'

export default function Experience() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="experience" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionTitle
              eyebrow={siteContent.experience.eyebrow}
              title={siteContent.experience.title}
              description={siteContent.experience.description}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ExperienceTimeline items={experience} TimelineComponent={Timeline} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}