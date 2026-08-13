import {
  currentCourses,
  upcomingCourses,
  learningHeadLine,
  learningIntro,
} from './learning'
import { hobbies, hobbiesHeadLine, hobbiesIntro } from './hobbies'

// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

export const awardsHeadLine = learningHeadLine
export const awardsIntro = learningIntro

export const awards: Array<ActivityItemType> = [
  ...currentCourses.map((course) => ({
    name: course.name,
    description: course.description ?? '',
    date: course.period,
    location: 'SCLS',
  })),
  {
    name: upcomingCourses.period,
    description: upcomingCourses.courses.join(', '),
    date: upcomingCourses.period,
    location: 'SCLS',
  },
]

export const projectHeadLine = 'Projects'
export const projectIntro =
  'Nothing fancy yet — my first real build is this website.'

export const projects: Array<ProjectItemType> = [
  {
    name: 'Personal Portfolio Website',
    description:
      'This site — built during AI Camp to learn web development, Git workflows, and deployment.',
    link: {
      href: 'https://github.com/mingming0129/-',
      label: 'GitHub',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Camp'],
  },
]

export const activitiesHeadLine = hobbiesHeadLine
export const activitiesIntro = hobbiesIntro

export const activities: Array<ActivityItemType> = hobbies.map((hobby) => ({
  name: hobby.name,
  description: hobby.description,
  date: hobby.featured ?? hobby.name,
  location: hobby.items.join(', '),
}))
