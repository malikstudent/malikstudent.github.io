import Card from './Card'

export default function SkillCard({ category, items = [] }) {
  return (
    <Card className="h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{category}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </Card>
  )
}