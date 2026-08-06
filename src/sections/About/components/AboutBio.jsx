import Card from '../../../components/Card'

export default function AboutBio({ profile }) {
  return (
    <Card className="h-full">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Summary</p>
      <h3 className="mt-3 font-display text-2xl font-semibold text-secondary">Professional profile</h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-slate-600 sm:text-base">
        <p>{profile.summary}</p>
        <p>
          The work history combines network support, systems-oriented study, content creation, data handling,
          and e-commerce experience, with design tools used as a practical complement.
        </p>
      </div>
    </Card>
  )
}