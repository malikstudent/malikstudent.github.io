import { Mail, Phone, Building2 } from 'lucide-react'

const iconMap = {
  Email: Mail,
  Phone: Phone,
  Company: Building2,
}

export default function ContactCard({ label, value, href }) {
  const Icon = iconMap[label] || Mail
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]"
    >
      <div className="flex flex-col gap-4">
        {/* Icon & Label */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors duration-300 group-hover:bg-primary/10">
            <Icon size={20} className="stroke-[1.75]" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-300 group-hover:text-primary">
            {label}
          </span>
        </div>
      </div>

      {/* Value */}
      <div className="mt-6">
        <p 
          className="break-words text-base font-semibold text-secondary transition-colors duration-300 group-hover:text-primary sm:text-lg tracking-tight leading-snug"
          title={value}
        >
          {value}
        </p>
      </div>
    </a>
  )
}
