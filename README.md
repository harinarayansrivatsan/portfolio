# Portfolio

A production-ready portfolio website showcasing professional experience, technical projects, and expertise in software engineering, AI/ML, and cloud infrastructure.

## Contents

**Professional Journey** - Work experience timeline spanning roles at Alcon R&D, Texas A&M University, Deloitte, and Hewlett Packard. Highlights include building AI-driven Q&A systems, designing medical image analysis workflows, developing RAG-based educational platforms, implementing LLM security systems, and enterprise automation solutions.

**Project Portfolio** - Showcase of major technical projects:
- Competency Tracker: Data-driven student progress platform for K-12 education
- Instructor Connect: AI-powered teacher training and onboarding simulation platform
- Essay Grader: Collective intelligence-based academic essay grading system

**Technical Skills** - Comprehensive breakdown of expertise:
- Programming: Python, C++, SQL, JavaScript, TypeScript, Go, Java
- AI & Machine Learning: TensorFlow, PyTorch, RAG architectures, Large Language Models, Claude Code, OpenAI Agent Builder, Computer Vision, n8n
- Cloud & DevOps: AWS (serverless architecture, Lambda, EventBridge), Docker, Kubernetes, Terraform, CI/CD pipelines
- Full Stack Development: FastAPI, React, Next.js, Node.js, Supabase, Vercel
- Data Engineering: PostgreSQL, MongoDB, Pandas, Apache Spark, ETL pipelines
- Professional Certifications: AWS Solutions Architect, CCSK, PSPO-1, ISC2 CC

**Leadership & Community** - Community involvement including President of Business Information Technology Students at Texas A&M and Co-founder of ACM Student Chapter at SASTRA University.

**Recommendations** - Professional testimonials from senior leaders at Alcon, EverSpark, and Deloitte.

## Design & User Experience

The portfolio features a clean, modern design with dark mode support that respects system preferences. Interactive carousels provide smooth navigation through projects and experience. All typography uses the Geist font family for a professional appearance. The design is fully responsive across desktop, tablet, and mobile devices with optimized viewport rendering.

## Technical Implementation

Built with **Next.js 15.5** and **React 19.2** using **TypeScript** for type safety. All routes are statically pre-rendered at build time with zero server-side rendering overhead. Styling uses **Tailwind CSS 4.1** with custom color variables and a comprehensive design system.

Component architecture leverages **Radix UI** primitives for accessibility compliance (WCAG standards) and composable UI elements. Animations and page transitions are powered by **Framer Motion** for smooth, performant interactions. Interactive carousels use **Embla Carousel** for touch-optimized navigation.

Performance metrics: Sub-2 second build times, optimized bundle size, images served via CDN with intelligent caching, all assets gzip-compressed.

## Deployment

Hosted on **Cloudflare Pages** with automatic deployment on every commit to the main branch. GitHub integration provides continuous deployment without manual intervention. All pages are served as static HTML with edge-level caching for global distribution and sub-100ms response times.
