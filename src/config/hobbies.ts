export type HobbyCategoryType = {
  name: string
  description: string
  featured?: string
  items: string[]
}

export const hobbiesHeadLine = 'Life & Hobbies'
export const hobbiesIntro =
  'Games, anime, and music — what I actually spend time on outside of class.'

export const hobbies: Array<HobbyCategoryType> = [
  {
    name: 'Games',
    description: 'Mostly playing with friends after school.',
    featured: 'Main: 金铲铲之战',
    items: [
      '王者荣耀',
      '无畏契约',
      '原神',
      '绝区零',
      '崩坏：星穹铁道',
      '第五人格',
    ],
  },
  {
    name: 'Anime',
    description: 'Long series and comfort rewatches.',
    items: ['Fate series', 'Lucky Star (幸运星)'],
  },
  {
    name: 'Music',
    description: 'Background for studying and gaming.',
    items: ['余佳运', '徐佳莹', '孙燕姿'],
  },
]
