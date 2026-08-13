export * from './projects'
export * from './education'
export * from './career'
export * from './hobbies'
export * from './learning'

// personal info
export const name = 'Ming ming Ge'
export const headline = 'Grade 11 student at Shanghai Soong Ching Ling School.'
export const introduction =
  "I'm a regular high school student who likes games, anime, and music — and I'm learning computer science through CSA and CSP."
export const email = ''
export const showEmail = false
export const githubUsername = 'mingming0129'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "I'm in Grade 11 at Shanghai Soong Ching Ling School. I'm not trying to look like a prodigy on this site — just a normal student who's curious about programming.",
  "This semester I'm taking CSA and CSP. Next semester I'll add ES, Statistics, Chemistry, and Calculus.",
  'Outside of class, you will usually find me playing games (especially 金铲铲之战), watching anime like Fate and Lucky Star, or listening to 余佳运, 徐佳莹, and 孙燕姿.',
]

// blog
export const blogHeadLine = 'Notes & Thoughts'
export const blogIntro =
  "I haven't written much here yet — maybe someday."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href?: string
  handle?: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'WeChat',
    icon: 'wechat',
    handle: 'mingming100129',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://search.bilibili.com/all?keyword=minnineTvT',
    handle: 'minnineTvT',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'java',
  'javascript',
  'typescript',
  'react',
  'nextdotjs',
  'git',
  'github',
  'visualstudiocode',
]
