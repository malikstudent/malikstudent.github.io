export default function ProjectGrid({ projects, ProjectCardComponent }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCardComponent
          key={`${project.title}-${index}`}
          title={project.title}
          description={project.description}
          status={project.status}
        />
      ))}
    </div>
  )
}