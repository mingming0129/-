// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Shanghai Soong Ching Ling School',
      title: 'Student',
      logo: 'college',
      start: '2023',
      end: 'Present'
    },
  ]