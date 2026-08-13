export type CourseItemType = {
  name: string
  period: string
  description?: string
}

export const learningHeadLine = 'Currently Learning'
export const learningIntro =
  'Grade 11 at SCLS — building computer science foundations through CSA and CSP.'

export const currentCourses: Array<CourseItemType> = [
  {
    name: 'CSA',
    period: 'This semester',
    description: 'Computer Science A — still exploring, no standout project yet.',
  },
  {
    name: 'CSP',
    period: 'This semester',
    description: 'Computer Science Principles.',
  },
]

export const upcomingCourses = {
  period: 'Next semester',
  courses: ['ES', 'Statistics', 'Chemistry', 'Calculus'],
}
