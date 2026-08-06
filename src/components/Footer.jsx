export default function Footer({ name, location, socials = [] }) {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-secondary">{name}</p>
          <p className="mt-1 text-sm text-slate-600">{location}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}