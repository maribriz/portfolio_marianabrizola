import { useState } from "react";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "AI PERSONALIZATION MODEL",
    category: "QUINTOANDAR",
    metric: "+13%",
    metricLabel: "CONVERSION",
    situation: "We had been using the same recommendation model for a long time, based only on property similarity, which limited the ability to deliver more relevant and personalized suggestions.",
    task: "Improve recommendation quality to increase user intent signals.",
    action: "Led the development of a personalized recommendation model using embeddings, incorporating both user and property similarity. The model was implemented across email marketing and on-site experiences.",
    result: "Achieved +13% increase in clicks, improving user engagement",
  },
  {
    number: "02",
    title: "MVP LANDING PAGE",
    category: "QUINTOANDAR",
    metric: "+30%",
    metricLabel: "CONVERSION",
    situation: "We saw an opportunity to make the property search experience more exploratory, increasing the number of properties users viewed and, in turn, the likelihood of scheduling visits.",
    task: "Improve initial user interaction and increase property views.",
    action: "Led the end-to-end development of a new desktop landing page MVP, from problem definition to launch, including experimentation and performance tracking.",
    result: "Increased property views by ~30% compared to the previous experience.",
  },
  {
    number: "03",
    title: "AI PROPERTY LIQUIDITY MODEL",
    category: "LOFT",
    metric: "+60%",
    metricLabel: "CONVERSION",
    situation: "Low-demand properties were taking too long to sell, reducing operational efficiency and increasing costs.",
    task: "Develop a data-driven solution to identify and improve property liquidity.",
    action: "Led a data squad to build and integrate AI models combining pricing, demand signals, and liquidity algorithms. Worked closely with stakeholders to operationalize the solution quickly and improve the effectiveness of the property owner contact team.",
    result: "Increased internal team efficiency and drove a 60% increase in successful contacts with property owners.",
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
                  expandedIndex === index ? "max-h-96 opacity-100 mt-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-start-2 md:col-span-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "SITUATION", text: project.situation },
                        { label: "TASK", text: project.task },
                        { label: "ACTION", text: project.action },
                        { label: "RESULT", text: project.result },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="text-[9px] tracking-[0.2em] text-muted-foreground/60 mb-1">{item.label}</p>
                          <p className="text-xs leading-relaxed text-muted-foreground">{item.text}</p>
                        </div>
                      ))}
                    </div>
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
