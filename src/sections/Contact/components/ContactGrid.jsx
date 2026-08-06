export default function ContactGrid({ socials, ContactCardComponent }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {socials.map((social) => (
        <ContactCardComponent key={social.label} label={social.label} value={social.value} href={social.href} />
      ))}
    </div>
  )
}