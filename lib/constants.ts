export const CONTACT_INFO = {
  name: "Hari Narayan Srivatsan",
  email: "harinarayan.professional@gmail.com",
  phone: "+1 979 574 6716",
  linkedin: "https://linkedin.com/in/harinarayansrivatsan",
  github: "https://github.com/harinarayansrivatsan",
  location: "College Station, TX",
} as const

export const EDUCATION = {
  masters: {
    degree: "Master of Science in Management Information Systems",
    school: "Texas A&M University",
    location: "College Station, TX",
    graduation: "May 2026",
    gpa: "3.85/4.00",
    coursework: ["Cloud Computing", "Systems Design", "Data Management", "Product & Project Management"],
  },
  bachelors: {
    degree: "Bachelor of Technology in Computer Science",
    school: "SASTRA Deemed University",
    location: "Thanjavur, India",
    graduation: "July 2020",
    coursework: ["Software Engineering", "Data Structures and Algorithms", "Python Programming"],
  },
} as const

export const SKILLS = {
  programming: ["JavaScript", "TypeScript", "Python", "SQL/NoSQL databases", "Object Oriented Design", "Code review"],
  frameworks: ["LangChain", "FastAPI", "Streamlit", "React"],
  cloud: ["AWS (Serverless, CloudFormation)", "Docker", "Git", "Linux"],
  product: ["Agile/Scrum", "User Interviews", "Persona Mapping", "Lucid Chart"],
  certifications: [
    "AWS Solutions Architect Associate",
    "Professional Scrum Product Owner",
    "Cloud Security Knowledge CCSK",
  ],
} as const

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home" },
  { id: "journey", label: "Journey" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "extracurriculars", label: "Extracurriculars" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
] as const
