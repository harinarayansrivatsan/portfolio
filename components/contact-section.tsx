"use client"

import { SectionLayout } from "./layout/section-layout"
import { SectionHeader } from "./ui/section-header"
import { motion } from "framer-motion"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

const CONTACT_METHODS = [
  {
    title: "LinkedIn",
    subtitle: "Let's connect professionally",
    description: "I'm always open to discussing new opportunities, sharing insights, and expanding my network.",
    contact: "linkedin.com/in/harinarayansrivatsan",
    href: "https://linkedin.com/in/harinarayansrivatsan",
    icon: Linkedin,
    color: "bg-[#0077b5]"
  },
  {
    title: "Email",
    subtitle: "Drop me a line directly",
    description: "Whether you have a question, a project proposal, or just want to say hi, my inbox is open.",
    contact: "harinarayan.professional@gmail.com",
    href: "mailto:harinarayan.professional@gmail.com",
    icon: Mail,
    color: "bg-red-500"
  }
]

export function ContactSection() {
  return (
    <SectionLayout id="contact" className="bg-transparent">
      <SectionHeader
        title="Get In Touch"
        subtitle="Ready to start the next big project? Let's talk."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {CONTACT_METHODS.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            target={method.href.includes('linkedin') ? '_blank' : undefined}
            rel={method.href.includes('linkedin') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 flex flex-col items-center text-center hover:bg-white/5 transition-colors group relative overflow-hidden"
          >
            <div className={`p-4 rounded-full ${method.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
              <method.icon size={32} />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-2">{method.title}</h3>
            <p className="text-primary font-medium mb-4">{method.subtitle}</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {method.description}
            </p>

            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
              <span>Connect Now</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        ))}
      </div>
    </SectionLayout>
  )
}
