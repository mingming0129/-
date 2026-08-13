// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

// Projects
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
