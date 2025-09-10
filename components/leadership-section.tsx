"use client"

export function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "President",
      organization: "Business Information Technology Students",
      timeframe: "2024 - Present",
      achievement:
        "Collaborated with local business owners in College Station TX sourcing & interviewing candidates for volunteering opportunities converting into business development summer internships",
      metric: "Ongoing partnerships with 3+ local businesses",
      icon: () => (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Co-Founder",
      organization: "ACM Student Chapter - SASTRA University",
      timeframe: "2018 - 2020",
      achievement:
        "Co-founded ACM student chapter at SASTRA University, hosted online coding competitions, conducted in-person workshops and conducted classes on programming concepts",
      metric: "200+ students participated in events",
      icon: () => (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section id="leadership" className="h-screen flex flex-col bg-white relative">
      <div className="container mx-auto px-6 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white mb-16">
            <h2 className="text-4xl font-sans font-bold text-center text-black">Leadership Positions</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {leadershipRoles.map((item, index) => (
              <div
                key={index}
                className="bg-muted rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    {item.icon()}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <h4 className="text-base font-medium text-primary mb-2">{item.organization}</h4>
                    <p className="text-sm text-muted-foreground mb-3 flex items-center">
                      <svg
                        className="h-4 w-4 mr-2 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {item.timeframe}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{item.achievement}</p>
                    <div className="bg-white rounded-md px-3 py-2 border-l-4 border-primary">
                      <p className="text-xs font-medium text-primary">{item.metric}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById("interests")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 bg-white border-2 border-muted rounded-full p-4 animate-bounce hover:bg-muted hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
        aria-label="Scroll to Interests section"
      >
        <svg className="h-6 w-6 mx-auto text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  )
}
