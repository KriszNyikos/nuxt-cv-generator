import type { CvSkillsLevel } from './enums'

export type CvContent = {
  familyName: string
  givenName: string
  about: string
  skills: { name: string, level: CvSkillsLevel }[]
  languages: { [key: string]: string }
  contact: {
    email: string
    phone: string
    location: string
    linkedin: string
    github: string
  }
  experience: {
    company: string
    position: string
    description: string
    startDate: string
    endDate: string
    technologies: string[]
  }
  education: {
    institution: string
    degree: string
    fieldOfStudy: string
    startDate: string
    endDate: string
  }
}
