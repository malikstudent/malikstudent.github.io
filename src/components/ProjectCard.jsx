import Card from './Card'

export default function ProjectCard({ title, description, status = 'Coming Soon' }) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{status}</p>
        <h3 className="mt-3 font-display text-lg font-semibold text-secondary sm:text-xl">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      </div>
      <div className="mt-6 h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-sky-300" />
    </Card>
  )
}