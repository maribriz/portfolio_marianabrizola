const experiences = [
  {
    period: "2022 — Presente",
    role: "Senior Product Manager",
    company: "Tech Company",
    description: "Liderança de squad multidisciplinar, definição de roadmap e estratégia de produto.",
  },
  {
    period: "2020 — 2022",
    role: "Product Manager",
    company: "Startup Digital",
    description: "Gestão de produto B2B SaaS, crescimento de 300% em ARR.",
  },
  {
    period: "2018 — 2020",
    role: "Associate Product Manager",
    company: "E-commerce",
    description: "Otimização de jornada do cliente e aumento de conversão.",
  },
];

const skills = [
  "Product Strategy",
  "User Research",
  "Data Analysis",
  "Agile/Scrum",
  "Roadmap Planning",
  "Stakeholder Management",
  "A/B Testing",
  "SQL",
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-4">
            <p className="text-sm tracking-editorial text-muted-foreground mb-4">
              02
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Experiência
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group pb-12 border-b border-border last:border-0 last:pb-0"
              >
                <p className="text-sm text-muted-foreground mb-3">
                  {exp.period}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-light mb-2 group-hover:text-accent transition-colors">
                  {exp.role}
                </h3>
                <p className="text-accent text-sm tracking-tight-editorial mb-4">
                  {exp.company}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm tracking-editorial text-muted-foreground mb-4">
              03
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Skills
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-5 py-2.5 border border-border text-sm tracking-tight-editorial hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
