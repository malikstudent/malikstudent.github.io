import { motion } from 'framer-motion'
import Container from '../../components/Container'
import SectionTitle from '../../components/SectionTitle'
import { skills } from '../../data/skills'
import { siteContent } from '../../data/siteContent'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import SkillGroup from './components/SkillGroup'

export default function Skills() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="skills" className="bg-background py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              eyebrow={siteContent.skills.eyebrow}
              title={siteContent.skills.title}
              description={siteContent.skills.description}
            />
          </motion.div>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                initial={prefersReducedMotion ? false : 'hidden'}
                whileInView={prefersReducedMotion ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
              >
                <SkillGroup group={group} />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}