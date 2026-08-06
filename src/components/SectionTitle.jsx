export default function SectionTitle({ eyebrow, title, description, align = 'left', className = '' }) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-3xl flex-col gap-3 sm:gap-4 ${alignClasses} ${className}`.trim()}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-2xl font-semibold tracking-tight text-secondary sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-7">{description}</p>
      ) : null}
    </div>
  )
}