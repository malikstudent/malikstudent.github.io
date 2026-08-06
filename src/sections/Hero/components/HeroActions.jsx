import Button from '../../../components/Button'

export default function HeroActions({ profile }) {
  return (
    <div className="lg:justify-self-end">
      <div className="rounded-[2rem] border border-slate-200 bg-white/85 p-5 shadow-soft backdrop-blur-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Profile</p>
        <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:mt-5">
          <p>{profile.summary}</p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
          <Button as="a" href={profile.downloadHref} download variant="primary" size="md" className="w-full sm:w-auto">
            {profile.downloadLabel}
          </Button>
          <Button as="a" href="#contact" variant="secondary" size="md" className="w-full sm:w-auto">
            {profile.contactLabel}
          </Button>
        </div>
      </div>
    </div>
  )
}