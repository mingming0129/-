export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Ming ming Ge'
export const headline = 'Grade 11 student at Shanghai Soong Ching Ling School.'
export const introduction =
  "A regular high school student who likes games, anime, and music — currently taking CSA and CSP."
export const email = ''
export const showEmail = false
export const githubUsername = 'mingming0129'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "I'm in Grade 11 at Shanghai Soong Ching Ling School — just a normal student, not trying to oversell myself here.",
  "This semester I'm taking CSA and CSP. Next semester I'll add ES, Statistics, Chemistry, and Calculus.",
  'Outside of class: games (mostly 金铲铲之战), anime (Fate & Lucky Star), and music (余佳运, 徐佳莹, 孙燕姿). WeChat: mingming100129 · Bilibili: minnineTvT',
]

// blog
export const blogHeadLine = 'Notes & Thoughts'
export const blogIntro = "Haven't written much here yet."

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
