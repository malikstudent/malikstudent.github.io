import Navbar from '../components/Navbar'
import { profile } from '../data/profile'
import { navigationLinks } from '../constants/navigation'
import useScrollSpy from '../hooks/useScrollSpy'

const sectionIds = ['hero', 'about', 'experience', 'skills', 'projects', 'contact']

export default function RootLayout({ children }) {
  const activeId = useScrollSpy(sectionIds)

  return (
    <div className="min-h-screen bg-background text-slate-900 antialiased">
      <Navbar brand={profile.name} links={navigationLinks} activeId={activeId} />
      <main>
        {children}
      </main>
    </div>
  )
}