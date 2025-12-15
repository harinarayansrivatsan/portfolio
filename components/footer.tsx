import { Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Hari Narayan Srivatsan
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-xs">
              Crafting secure, intelligent, and scalable digital experiences for the future.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/harinarayansrivatsan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:harinarayan.professional@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white mb-6">Explore</h4>
            <ul className="space-y-3">
              {["Journey", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="/resume" className="text-muted-foreground hover:text-primary transition-colors">Resume</a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-bold text-white mb-6">Status</h4>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-500">Available for hire</span>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              Open to Security Engineering and AI/ML roles.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Hari Narayan Srivatsan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
