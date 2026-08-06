import SkillCard from '../../../components/SkillCard'

export default function SkillGroup({ group }) {
  return <SkillCard category={group.category} items={group.items} />
}