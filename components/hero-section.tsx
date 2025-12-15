"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Code, Terminal, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

const STATS = [
  { value: "3+", label: "Years Exp", icon: Terminal },
  { value: "300+", label: "Users Impacted", icon: Shield },
  { value: "80%", label: "Cost Reduced", icon: Code },
]

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 pb-12">

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 overflow-hidden"
          >
            {/* Using standard img tag to bypass Next.js optimization entirely */}
            <img
              src="/images/professional-headshot.jpg"
              alt="Hari Narayan Srivatsan"
              className="w-full h-full object-cover"
              style={{ objectPosition: "50% 0%" }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 bg-primary/5 text-primary-foreground text-sm font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Building Secure <br className="hidden md:block" />
              <span className="text-gradient-primary">Intelligent Systems</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm Hari Narayan Srivatsan, an AI Product Engineer & Security Specialist.
              I architect scalable solutions that bridge the gap between cutting-edge AI and enterprise security.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="group h-12 px-8 rounded-full bg-primary hover:bg-primary-light text-white font-semibold shadow-[0_0_20px_-5px_var(--color-primary)] transition-all hover:scale-105 flex items-center justify-center"
            >
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-4">
              <a
                href="mailto:harinarayan.professional@gmail.com"
                className="h-12 w-12 rounded-full border border-white/10 glass hover:bg-white/10 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/harinarayansrivatsan"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 rounded-full border border-white/10 glass hover:bg-white/10 text-white flex items-center justify-center transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Stats Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 w-full max-w-4xl"
          >
            {STATS.map((stat, i) => (
              <div key={i} className="glass-card p-6 flex flex-col items-center gap-2 group cursor-default">
                <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
