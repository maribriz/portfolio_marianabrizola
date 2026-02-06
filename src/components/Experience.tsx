const experiences = [
  {
    period: "2022 — NOW",
    role: "STRATEGY MANAGER",
    company: "Wieden&Kennedy",
    scope: "B2B SaaS",
  },
  {
    period: "2020 — 2022",
    role: "SENIOR PM",
    company: "Skeelo",
    scope: "+300% ARR",
  },
  {
    period: "2018 — 2020",
    role: "SENIOR DATA PM",
    company: "E-commerce",
    scope: "Conversão",
  },
];

const skills = [
  "PRODUCT STRATEGY",
  "USER RESEARCH", 
  "DATA ANALYSIS",
  "ROADMAPPING",
  "STAKEHOLDER MGT",
  "A/B TESTING",
  "AGILE/SCRUM",
  "SQL & ANALYTICS",
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-16">
          EXPERIÊNCIA
        </p>
        
        <div className="space-y-0 mb-24">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="hover-fill group py-6 md:py-8 border-b border-foreground/10 cursor-pointer"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-3 md:col-span-2">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground group-hover:text-background/60">
                    {exp.period}
                  </span>
                </div>
                <div className="col-span-6 md:col-span-7">
                  <h3 className="font-display text-2xl md:text-4xl">
                    {exp.role}
                  </h3>
                </div>
                <div className="col-span-3 text-right">
                  <span className="text-xs text-muted-foreground group-hover:text-background/60">
                    {exp.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-8">
          SKILLS
        </p>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 border border-foreground/20 text-[10px] tracking-[0.15em] hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
