export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Ming ming Ge'
export const headline = 'Student at Shanghai Soong Ching Ling School.'
export const introduction =
  "Hi! My name is Ming ming Ge. I'm a student at Shanghai Soong Ching Ling School, exploring computer science and building projects through AI Camp."
export const email = 'mingming.ge@scls-sh.org'
export const githubUsername = 'mingming0129'

// about page
export const aboutMeHeadline = 'Who Are You and Why Should I Care?'
export const aboutParagraphs = [
  "Hi! My name is Ming ming Ge. I'm a student at Shanghai Soong Ching Ling School with a passion for technology and creative problem solving.",
  'Through AI Camp, I am learning web development, Git workflows, and how to turn ideas into real-world projects.',
  "I use this site to share what I'm learning about AI, programming, and my journey as a student.",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
