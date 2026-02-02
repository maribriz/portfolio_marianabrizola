const projects = [
  {
    number: "01",
    title: "Redesign de Checkout",
    category: "E-commerce",
    metric: "+45% conversão",
    description: "Simplificação do fluxo de compra resultando em aumento significativo nas vendas.",
  },
  {
    number: "02",
    title: "App de Fidelidade",
    category: "Mobile",
    metric: "2M+ usuários",
    description: "Programa de fidelidade gamificado com engagement rate 3x acima do mercado.",
  },
  {
    number: "03",
    title: "Dashboard Analytics",
    category: "B2B SaaS",
    metric: "NPS 72",
    description: "Ferramenta de BI self-service que democratizou o acesso a dados na organização.",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-sm tracking-editorial text-muted-foreground mb-4">
            04
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-light">
            Projetos em Destaque
          </h2>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group py-12 border-t border-border first:border-t-0 cursor-pointer"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className="md:col-span-1">
                  <span className="text-xs text-muted-foreground">
                    {project.number}
                  </span>
                </div>
                
                <div className="md:col-span-5">
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-light mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.category}
                  </p>
                </div>
                
                <div className="md:col-span-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-block px-4 py-2 bg-card text-sm font-medium text-accent">
                    {project.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
