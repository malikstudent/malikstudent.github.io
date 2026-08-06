import { motion } from 'framer-motion'
import Container from '../../components/Container'
import ProjectCard from '../../components/ProjectCard'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../data/projects'
import { siteContent } from '../../data/siteContent'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'
import { fadeUp } from '../../utils/motion'
import ProjectGrid from './components/ProjectGrid'

export default function Projects() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <section id="projects" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="space-y-10">
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionTitle
              eyebrow={siteContent.projects.eyebrow}
              title={siteContent.projects.title}
              description={siteContent.projects.description}
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial={prefersReducedMotion ? false : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectGrid projects={projects} ProjectCardComponent={ProjectCard} />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}