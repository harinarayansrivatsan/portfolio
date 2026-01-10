import {
    Users, CheckCircle2, BarChart, Trophy,
    Terminal, Shield, Code,
    Cpu, Cloud, Globe, Award, Database,
    Heart, BookOpen, Rocket, Quote
} from "lucide-react"

// Navigation
export const NAV_ITEMS = [
    { id: "about", label: "About" },
    { id: "journey", label: "Journey" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "leadership", label: "Leadership" },
    { id: "recommendations", label: "Recommendations" },
]

// Hero Statistics
export const HERO_STATS = [
    { value: "3+", label: "Years Exp", icon: Terminal },
    { value: "300+", label: "Users Serving", icon: Shield },
    { value: "80%", label: "Cloud Cost Reduction", icon: Code },
]

// Professional Journey / Experience
export const JOURNEY_ITEMS = [
    {
        year: "2025",
        title: "Software Engineer (Security)",
        company: "Alcon R&D",
        location: "Lake Forest, CA",
        description: "Built AI-driven Q&A portal serving 300+ users with RAG chat interface. Designed medical image tamper detection workflow using Hailo AI accelerators.",
        image: "https://assets.hari-narayan.com/images/alcon.png",
        skills: ["AI Innovation", "Enterprise Software", "Product Ownership"]
    },
    {
        year: "2024 - 2025",
        title: "Software Engineer (Research)",
        company: "Texas A&M University",
        location: "College Station, TX",
        description: "Developed multilingual AI onboarding portal for educational non-profit serving 30M+ students. Reduced cloud costs by 80% through serverless migration.",
        image: "https://assets.hari-narayan.com/images/gar.png",
        skills: ["Product Launch", "RAG", "System Design"]
    },
    {
        year: "2021 - 2024",
        title: "Software Engineer (Consulting)",
        company: "Deloitte US-India",
        location: "Chennai, India",
        description: "Built LLM guardrails system protecting 300+ users from adversarial AI attacks. Enhanced system efficiency by 30% through prompt engineering and API design.",
        image: "https://assets.hari-narayan.com/images/deloitte.png",
        skills: ["Consulting", "Cloud Security", "AI Security"]
    },
    {
        year: "2020 - 2021",
        title: "Software Engineer (Automation)",
        company: "Hewlett Packard",
        location: "Bengaluru, India",
        description: "Achieved 70% reduction in IT support tickets in 6 months. Gained hands-on experience in enterprise software development and Robotic Process Automation.",
        image: "https://assets.hari-narayan.com/images/hewlett-packard.png",
        skills: ["IT Automation", "Enterprise Software", "RPA"]
    }
]

// Projects
export const PROJECTS = [
    {
        title: "Competency Tracker",
        description: "A customizable web portal providing teachers with real-time, data-driven insights on student skills and academic progress. Drove innovation in how student progress is tracked and managed in K-12 education.",
        image: "https://assets.hari-narayan.com/images/competency-tracker.png",
        imageClass: "object-[50%_25%]",
        badges: ["AWS Cloud Formation", "React", "AWS Lambda", "Vite.js", "Python", "Amazon Cognito"],
        organization: "Plymouth State University",
        metrics: [
            { label: "Member team", value: "6", icon: Users },
            { label: "Students Tracked", value: "400+", icon: CheckCircle2 },
            { label: "User Stories Delivered", value: "30", icon: BarChart }
        ],
        timeframe: "Jan 2025 - May 2025"
    },
    {
        title: "Instructor Connect",
        description: "An AI-powered onboarding simulation platform designed to train instructors in pedagogical techniques. Features interactive roleplay with AI student personas and automated performance feedback.",
        image: "https://assets.hari-narayan.com/images/instructor-connect.png",
        badges: ["AI/ML", "RAG", "Product Launch", "Systems Design"],
        organization: "Agastya International Foundation",
        metrics: [
            { label: "Daily Active Users", value: "250+", icon: Users },
            { label: "Learners Impacted", value: "30M+", icon: Trophy },
            { label: "Cost Savings", value: "80%", icon: BarChart }
        ],
        timeframe: "2024"
    },
    {
        title: "Essay Grader",
        description: "An AI-powered essay grading platform that grades student essays against the collective intelligence of the class. This novel approach has been successfully launched in 2 US universities.",
        image: "https://assets.hari-narayan.com/images/essay-grader.png",
        badges: ["AI/ML", "NLP", "EdTech", "Python"],
        organization: "US Universities",
        metrics: [
            { label: "Universities", value: "2", icon: BookOpen },
            { label: "Technique", value: "Collective AI", icon: Cpu },
            { label: "Status", value: "Innovation", icon: Rocket }
        ],
        timeframe: "2025"
    }
]

// Skills
export const SKILL_CATEGORIES = [
    {
        title: "Programming",
        icon: Terminal,
        skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript", "Go", "Java"],
    },
    {
        title: "AI & Machine Learning",
        icon: Cpu,
        skills: ["TensorFlow", "PyTorch", "RAG", "LLMs", "LangChain", "Hugging Face", "OpenAI API", "Claude", "Claude Code", "OpenAI Agent Builder", "Computer Vision", "n8n"],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        skills: ["AWS Service Catalog", "AWS Serverless", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Azure", "CI/CD Pipelines"],
    },
    {
        title: "Full Stack Development",
        icon: Globe,
        skills: ["FastAPI", "React", "Next.js", "Node.js", "Streamlit", "TailwindCSS", "GraphQL", "REST APIs", "Supabase", "Vercel"],
    },
    {
        title: "Data Engineering",
        icon: Database,
        skills: ["PostgreSQL", "MongoDB", "Pandas", "Apache Spark", "ETL Pipelines", "Data Visualization"],
    },
    {
        title: "Certifications",
        icon: Award,
        skills: ["AWS Solutions Architect", "CCSK", "PSPO-1", "ISC2 CC"],
    },
]

// Leadership
export const LEADERSHIP_ROLES = [
    {
        title: "President",
        subtitle: "Business Information Technology Students @ TAMU",
        timeframe: "2024 - Present",
        description: "Partnered with 3+ local businesses in College Station TX and sourced candidates for technology transformation & web development volunteering opportunities.",
        metric: "Active partnerships with 3+ local businesses",
        icon: Users,
        color: "text-red-600 bg-red-50",
    },
    {
        title: "Co-Founder",
        subtitle: "ACM Student Chapter - SASTRA University",
        timeframe: "2018 - 2020",
        description: "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts.",
        metric: "200+ students participated in events",
        icon: Rocket,
        color: "text-orange-600 bg-orange-50",
    },
]

// Interests
export const INTERESTS = [
    {
        title: "Health & Wellness",
        description: "Strength Training, Endurance Running, Mindfulness, Outdoor Activities",
        focus: "Balanced Lifestyle",
        icon: Heart,
        color: "text-rose-600 bg-rose-50"
    },
    {
        title: "Cultural Exploration",
        description: "Travel Photography, Culinary Arts, Language Learning, Cultural Immersion",
        focus: "Global Perspective",
        icon: Globe,
        color: "text-blue-600 bg-blue-50"
    },
    {
        title: "Continuous Learning",
        description: "Industry Research, Professional Development, Thought Leadership",
        focus: "Lifelong Growth",
        icon: BookOpen,
        color: "text-amber-600 bg-amber-50"
    },
    {
        title: "Tech Innovation",
        description: "Vibe Coding, Open Source, Cloud Solutions, Security Research",
        focus: "Future Focused",
        icon: Rocket,
        color: "text-purple-600 bg-purple-50"
    },
]

// Recommendations
export const RECOMMENDATIONS = [
    {
        name: "Thomas Jackson",
        title: "Director at Alcon",
        role: "Global R&D: Embedded Systems Security",
        content: `I had the pleasure of working with Hari during his time as a 2025 Summer Product Security Intern at Alcon, and I was consistently impressed by his talent, curiosity, and passion. He worked on innovative projects at the intersection of cybersecurity and edge AI processors, tackling complex technical challenges with creativity and precision.\n\nIn addition to his edge AI processors work, Hari made significant contributions to a generative AI initiative, bringing fresh ideas and technical insight that meaningfully advanced the project. He asked the right questions, approached problems methodically, and demonstrated a level of focus and enthusiasm that was really great.\n\nAbove all, Hari was a joy to work with—collaborative, proactive, and genuinely passionate about the work. I have no doubt that his skills and mindset will take him far, and I wish him nothing but the best in his future endeavors.`,
        highlights: ["Cybersecurity & AI", "Technical Excellence"],
        color: "text-blue-600"
    },
    {
        name: "Raiven Myrick",
        title: "CEO at EverSpark",
        role: "Ex-Deloitte Security Engineer",
        content: "Working with Hari was a good experience. He always had a positive attitude each day. He had a willingness and desire to continually learn which helped him pick up the skills quickly to adapt to our team. He was great at researching a troubleshooting defect with our security roles to ensure functionality worked correctly. Additionally had great attention to detail while performing SOD analysis to make our roles more clean. Took direction and constructive feedback very well.",
        highlights: ["Positive Attitude", "Quick Learner"],
        color: "text-purple-600"
    },
    {
        name: "Preetham Derangula",
        title: "Senior Product Leader",
        role: "Deloitte",
        content: "Hari has joined as analyst in GenAI and Trustworthy AI team. Hari quickly gained other senior developers confidence with his thoroughness, focus, positive attitude and analytical abilities. Hari was effective in creating the prompts to test and validate many commercial and open source LLMs and even wrote all the scripts to automate testing. Hari takes on challenges and is resourceful in solving problems. I recommend anyone who is looking for these abilities. All the best",
        highlights: ["GenAI Expertise", "Analytical Skills"],
        color: "text-green-600"
    }
]
