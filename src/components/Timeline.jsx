import Card from './Card'

export default function Timeline({ items = [] }) {
  return (
    <div className="space-y-4 sm:space-y-5">
      {items.map((item) => (
        <Card key={`${item.company}-${item.duration}`} className="relative overflow-hidden">
          <div className="absolute left-4 top-0 h-full w-px bg-slate-200 sm:left-6" aria-hidden="true" />
          <div className="relative flex gap-3 sm:gap-5">
            <div className="mt-1 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary shadow-sm sm:h-4 sm:w-4" />
            <div className="flex-1">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-secondary sm:text-lg">{item.role}</p>
                  <p className="text-sm font-medium text-slate-600">{item.company}</p>
                </div>
                <div className="text-sm text-slate-500 sm:text-right">
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}