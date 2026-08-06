import Card from '../../../components/Card'

export default function EducationList({ education = [] }) {
  return (
    <Card className="h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Education</p>
      <div className="mt-4 space-y-4">
        {education.map((item) => (
          <div key={`${item.institution}-${item.duration}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">{item.type}</p>
            <h3 className="mt-2 text-lg font-semibold text-secondary">{item.institution}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.program}</p>
            <p className="mt-3 text-sm font-medium text-slate-500">{item.duration}</p>
          </div>
        ))}
      </div>
    </Card>
  )
}