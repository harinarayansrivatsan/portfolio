"use client"

export function HeroSection() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative mb-12 animate-slide-in">
            <div className="w-56 h-56 mx-auto bg-white border-4 border-muted rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/professional-headshot.jpg"
                alt="Hari Narayan Srivatsan"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-foreground leading-tight animate-slide-in">
            Hari Narayan Srivatsan
          </h1>

          <h2 className="text-xl md:text-2xl font-sans font-medium mb-8 text-muted-foreground max-w-3xl mx-auto animate-slide-in">
            MS in MIS Student at Texas A&M (Class of 2026)
          </h2>

          <p className="text-lg md:text-xl font-sans italic mb-8 text-muted-foreground max-w-4xl mx-auto animate-slide-in whitespace-nowrap">
            "Bridging AI innovation with business strategy: building intelligent systems that drive meaningful impact"
          </p>

          <div className="max-w-2xl mx-auto mb-12 animate-slide-in">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Graduate student with expertise in developing secure systems and technology applications. Currently
              pursuing MS in MIS at Texas A&M University (GPA: 3.85/4.00) while gaining hands-on experience in
              enterprise solutions and product development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-in">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium text-lg min-w-[200px] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View My Work
              </span>
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-white border-2 border-primary text-primary px-8 py-4 rounded-2xl font-medium text-lg min-w-[200px] hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center justify-center">
                <svg
                  className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </span>
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 animate-bounce hover:bg-muted hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        aria-label="Scroll to My Journey section"
      >
        <svg className="h-6 w-6 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
