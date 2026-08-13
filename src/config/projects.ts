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

// Currently Learning (shown in awards section)
export const awardsHeadLine = 'Currently Learning'
export const awardsIntro = 'Computer science courses this year at SCLS.'

export const awards: Array<ActivityItemType> = [
  {
    name: 'CSA',
    description: 'Computer Science A — still exploring, no standout project yet.',
    date: 'This semester',
    location: 'SCLS',
  },
  {
    name: 'CSP',
    description: 'Computer Science Principles.',
    date: 'This semester',
    location: 'SCLS',
  },
]

// Projects
export const projectHeadLine = 'Projects'
export const projectIntro = "Nothing fancy yet — my first real build is this website."

export const projects: Array<ProjectItemType> = [
  {
    name: 'Personal Portfolio Website',
    description:
      'This site — built during AI Camp to learn web development, Git, and deployment.',
    link: {
      href: 'github.com/mingming0129/-',
      label: 'GitHub',
    },
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'AI Camp'],
  },
]

// Hobbies
export const activitiesHeadLine = 'Life & Hobbies'
export const activitiesIntro = 'What I do when I am not in class.'

export const activities: Array<ActivityItemType> = [
  {
    name: 'Games',
    description: 'Main: 金铲铲之战. Also play 王者荣耀, 无畏契约, 原神, and more.',
    date: 'Main pick',
    location: '金铲铲之战',
  },
  {
    name: 'Anime',
    description: 'Fate series and Lucky Star (幸运星).',
    date: 'Favorites',
    location: 'Fate · 幸运星',
  },
  {
    name: 'Music',
    description: 'Usually on in the background while studying or gaming.',
    date: 'On repeat',
    location: '余佳运 · 徐佳莹 · 孙燕姿',
  },
]
