import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/layout/SimpleLayout'
import {
  projectHeadLine,
  projectIntro,
  projects,
  hobbies,
  hobbiesHeadLine,
  hobbiesIntro,
} from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { HobbyCard } from '@/components/home/HobbyCard'
import { LearningSection } from '@/components/home/LearningSection'
import { Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects',
  description: projectHeadLine,
}

export default function Projects() {
  return (
    <SimpleLayout
      title={projectHeadLine}
      intro={projectIntro}
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 pb-10"
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>

      <LearningSection />

      <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
        <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
          <Heart size={28}/>
          {hobbiesHeadLine}
        </h2>
        <p className="text-base text-muted-foreground max-w-2xl mb-8">
          {hobbiesIntro}
        </p>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.name} hobby={hobby} titleAs='h3'/>
          ))}
        </ul>
      </div>
    </SimpleLayout>
  )
}
