export default function HeroContent({ profile, heroMeta }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{heroMeta.eyebrow}</p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-secondary sm:text-5xl lg:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-4 text-lg font-medium text-slate-700 sm:text-2xl">{profile.title}</p>
      <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-lg sm:leading-8">{profile.intro}</p>
      <div className="mt-8 flex flex-col flex-wrap gap-3 text-sm text-slate-600 sm:flex-row sm:items-center">
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2">{profile.location}</span>
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2">{heroMeta.highlight}</span>
        <span className="rounded-full border border-slate-200 bg-white px-4 py-2">{heroMeta.support}</span>
      </div>
    </div>
  )
}