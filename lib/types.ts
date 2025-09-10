export interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  type: "work" | "education" | "project"
  description: string[]
  technologies?: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  image?: string
}

export interface Skill {
  name: string
  level: number
  category: "programming" | "frameworks" | "cloud" | "product"
}

export interface NavItem {
  id: string
  label: string
}
