# ⚡ Hari Narayan Srivatsan - Personal Portfolio

A sophisticated, responsive portfolio website showcasing the professional journey, technical expertise, and achievements of Hari Narayan Srivatsan, MS in MIS student specializing in development of AI/ML solutions at Texas A&M University.

## 🎓 About

**Hari Narayan Srivatsan** is a Master's student in Management Information Systems at Texas A&M University (Class of 2026), specializing in artificial intelligence and cybersecurity solutions. This portfolio demonstrates his technical skills, professional experience, and academic achievements in the technology industry.

- **Email**: harinarayan.professional@gmail.com
- **Location**: College Station, TX (Open to relocation)
- **LinkedIn**: [Professional Profile](https://linkedin.com/in/harinarayan-srivatsan)

## 🚀 Technology Stack

### Core Technologies
- **Framework**: Next.js 15.0.0 with App Router architecture
- **Language**: TypeScript 5 with strict type checking
- **Styling**: Tailwind CSS 4.1.9 with extensive custom design system
- **Package Manager**: npm with optimized dependency management

### UI Framework & Design
- **Component Library**: Radix UI primitives (@radix-ui/react-*)
- **Design System**: Custom implementation following shadcn/ui patterns
- **Theme Management**: next-themes for seamless light/dark mode switching
- **Icons**: Lucide React for consistent iconography
- **Animations**: tailwindcss-animate + tw-animate-css for smooth transitions

### Typography & Assets
- **Body Text**: Open Sans (weights: 300-700)
- **Headings**: Montserrat (weights: 300-900)
- **Code**: JetBrains Mono (weights: 300-700)
- **Display Strategy**: Font swapping for optimal loading performance
- **Color Scheme**: Texas A&M Aggie Maroon (#500000) primary branding

### Enhanced Features
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Utilities**: clsx + tailwind-merge via custom `cn()` utility
- **Performance**: Image optimization and responsive design

## 🏗️ Architecture & Organization

```
portfolio/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Home page (hero section)
│   ├── contact/page.tsx   # Contact information
│   ├── interests/page.tsx # Personal interests
│   ├── journey/page.tsx   # Professional timeline
│   ├── leadership/page.tsx# Leadership experience
│   ├── projects/page.tsx  # Project portfolio
│   └── skills/page.tsx    # Technical skills
├── components/
│   ├── layout/            # Layout components
│   ├── ui/               # Reusable UI components
│   └── [section-name].tsx # Page-specific sections
├── lib/
│   └── utils.ts          # Utility functions
├── public/images/        # Static assets and photos
└── styles/              # Global styles and themes
```

## 📱 Portfolio Sections

### 🏠 Home (`/`)
- **Hero Section**: Professional headshot with animated interactions
- **Introduction**: Name, title, and elevator pitch
- **Call-to-Actions**: Primary buttons for projects and contact
- **Responsive Design**: Optimized for all screen sizes

### 🛤️ Journey (`/journey`)
- **Professional Timeline**: Experience in chronological order
- **Company Integration**: High-quality company logos and descriptions
- **Interactive Elements**: Popover details for company information
- **Geographic Indicators**: US/India location badges
- **Role Types**: Internship, Full-Time, Research positions

### 💼 Projects (`/projects`)
- **Featured Projects**: Competency Tracker and significant work
- **Technology Stack**: Visual badges for each technology used
- **Project Previews**: Screenshots and interactive mockups
- **Hover Animations**: Enhanced user experience

### 🛠️ Skills (`/skills`)
- **Categorized Skills**: Programming, Frameworks, Cloud, Product, AI/ML
- **Certifications**: AWS, CCSK, Professional Scrum credentials
- **Visual Organization**: Icon-based category system
- **Interactive Elements**: Hover states and skill demonstrations

### 👑 Leadership (`/leadership`)
- **Extracurricular Activities**: Leadership roles and achievements
- **Community Impact**: Organized events and initiatives
- **Team Management**: Experience leading diverse teams

### 🎨 Interests (`/interests`)
- **Personal Side**: Hobbies and creative pursuits
- **Work-Life Balance**: Demonstrates well-rounded personality
- **Cultural Activities**: International and local community involvement

### 📞 Contact (`/contact`)
- **Professional Contact**: Email and LinkedIn integration
- **Availability**: Clear about relocation and work preferences
- **Social Links**: Professional networking connections

## ✨ Key Features

### Design Excellence
- **Lightning emoji favicon** (⚡) as brand identifier
- **Glass card system** with premium visual effects
- **Gradient color schemes** with CSS custom properties
- **Micro-interactions** and smooth transitions throughout
- **Responsive typography** with fluid scaling

### Performance & Accessibility
- **WCAG compliance** with proper contrast and focus states
- **Mobile-first design** supporting 320px to 3440px+ displays
- **Optimized images** with Next.js Image component
- **Fast load times** with efficient code splitting
- **Keyboard navigation** and screen reader support

### Professional Features
- **Theme switching** between light and dark modes
- **Professional photography** with hover animations
- **Interactive timeline** with company information
- **Skill categorization** with visual progress indicators
- **Contact integration** with professional platforms

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm run start    # Start production server
npm run lint     # Run ESLint checking
npm run type-check # Run TypeScript checking
```

### Environment Setup
The portfolio is configured for optimal development experience with:
- Hot reload for instant feedback
- TypeScript for type safety
- ESLint for code quality
- Tailwind CSS for rapid styling

## 📊 Performance Features

### Responsive Design
- **Universal Support**: 320px to 3440px+ screen sizes
- **Fluid Spacing**: clamp()-based responsive spacing system
- **Optimized Images**: Professional photography and company logos
- **Progressive Enhancement**: Mobile-first development approach

### Accessibility Standards
- **WCAG 2.1 AA Compliance**: Proper contrast ratios and focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmark regions
- **Keyboard Navigation**: Full keyboard accessibility support
- **Screen Reader Optimization**: ARIA labels and descriptions

### Technical Optimization
- **Image Optimization**: Next.js Image component with lazy loading
- **Font Optimization**: Preloaded fonts with swap display strategy
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Analysis**: Optimized dependency management

## 🎯 Production Ready

This portfolio is in a **production-ready state** featuring:
- ✅ Complete section implementations with rich content
- ✅ Fully responsive design across all device categories
- ✅ Professional content with high-quality imagery
- ✅ Interactive animations and smooth transitions
- ✅ Type-safe TypeScript implementation
- ✅ Optimized performance and accessibility standards
- ✅ Texas A&M University branding integration
- ✅ Professional photography and visual assets

## 📄 License

This portfolio is designed specifically for Hari Narayan Srivatsan's professional presentation. All content, images, and personal information are proprietary.

---

**Built with Next.js, TypeScript, and Tailwind CSS**
*Showcasing modern web development practices and professional excellence*