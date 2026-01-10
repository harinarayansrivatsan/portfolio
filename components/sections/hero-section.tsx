"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

import { HERO_STATS } from "@/lib/data"

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="relative min-h-screen flex items-start justify-center overflow-hidden bg-background pt-32 pb-20 scroll-mt-24">
      {/* Background Ambient Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -z-10" />

      <div className="container px-6 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="flex flex-col space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4 lg:space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-secondary text-secondary-foreground text-xs font-semibold tracking-wide w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for new opportunities
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Hari Narayan <br />
                <span className="text-muted-foreground">Srivatsan</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                I love building <strong className="font-semibold text-foreground">Secure</strong> & <strong className="font-semibold text-foreground">Intelligent</strong> Systems.
                I'm a product engineer and a security enthusiast architecting scalable solutions that drive impact at real organizations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollTo('projects')}
                className="gap-2 text-base font-medium px-8 h-11 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                View My Work
                <ArrowRight size={18} />
              </Button>


            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-8 sm:gap-12 pt-6 lg:pt-8 border-t border-border/50"
            >
              {HERO_STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex flex-col items-center justify-center order-1 lg:order-2 gap-6"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] rounded-full sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-muted">
              <Image
                src="/images/professional-headshot.jpg"
                alt="Hari Narayan Srivatsan"
                fill
                className="object-cover object-top scale-105"
                priority
              />
              {/* Overlay Gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Social Icons moved here */}
            <div className="flex gap-4 relative z-10">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-11 w-11 hover:scale-105 shadow-sm hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-800 dark:hover:text-white transition-all"
              >
                <a
                  href="mailto:harinarayan.professional@gmail.com"
                  aria-label="Email Me"
                >
                  <Mail size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-11 w-11 border-[#0077b5] bg-[#0077b5] text-white hover:bg-[#006396] hover:text-white hover:border-[#006396] hover:scale-105 shadow-sm border-0"
              >
                <a
                  href="https://linkedin.com/in/harinarayansrivatsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="h-11 w-11 border-[#333] bg-[#333] text-white hover:bg-[#24292e] hover:text-white hover:border-[#24292e] hover:scale-105 shadow-sm border-0"
              >
                <a
                  href="https://github.com/harinarayansrivatsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full sm:rounded-[2.5rem] blur-2xl -z-10" />
            <div className="absolute top-10 -right-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl -z-10 animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
