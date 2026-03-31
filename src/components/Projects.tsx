import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI PERSONALIZATION MODEL",
    category: "QUINTOANDAR",
    metric: "+13%",
    metricLabel: "CONVERSION",
    description: "Built a personalized property recommendation model using Embeddings, deployed in email marketing and an on-site carousel. The new model drove 13% more clicks (an importante signal of user intent) compared to the previous recommendation approach.",
  },
  {
    number: "02",
    title: "MVP LANDING PAGE",
    category: "QUINTOANDAR",
    metric: "+30%",
    metricLabel: "CONVERSION",
    description: "End-to-end leadership of a desktop website MVP that increased property views by ~30% among potential renters and buyers compared to the traditional flow.",
  },
  {
    number: "03",
    title: "AI PROPERTY LIQUIDITY MODEL",
    category: "LOFT",
    metric: "+60%",
    metricLabel: "CONVERSION",
    description: "Led the squad that developed and integrated data models to measure and improve the liquidity of low-demand properties. This solution increased the efficiency of internal teams, resulting in a 60% growth in successful contacts with property owners compared to the period before its implementation.",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projetos" className="py-24 md:py-32 px-4 md:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
            FEATURED PROJECTS
          </p>
        </div>
        
        <div className="space-y-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group py-12 md:py-16 border-t border-foreground/10 last:border-b cursor-pointer"
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className="grid grid-cols-12 gap-4 items-start md:items-center">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                    {project.number}
                  </span>
                </div>
                
                <div className="col-span-10 md:col-span-7">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-4xl md:text-6xl lg:text-7xl group-hover:translate-x-4 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 shrink-0 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`} 
                    />
                  </div>
                  <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2">
                    {project.category}
                  </p>
                </div>
                
                <div className="col-span-12 md:col-span-4 md:text-right mt-4 md:mt-0">
                  <div className="inline-block">
                    <span className="font-display text-5xl md:text-6xl block leading-none">
                      {project.metric}
                    </span>
                    <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index ? "max-h-40 opacity-100 mt-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-start-2 md:col-span-7">
                    <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
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
