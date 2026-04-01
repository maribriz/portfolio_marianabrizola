import { useState } from "react";

const experiences = [
  {
    period: "2024 - 2025",
    role: "STRATEGY MANAGER",
    company: "Wieden&Kennedy",
    scope: "B2B SaaS",
    description: "Led brand and communication strategy for agency clients, combining audience research, data analysis and digital medianplanning to drive acquisition and creative briefs.",
  },
  {
    period: "2023 - 2024",
    role: "SENIOR PRODUCT MANAGER",
    company: "Skeelo",
    scope: "+300% ARR",
    description: "Led the Retention Squad and managed the Premium Business Unit, owning discovery, roadmap and delivery of product initiatives, including a gamification MVP that increased MAU and user retention.",
  },
  {
    period: "2022",
    role: "SENIOR DATA PRODUCT MANAGER",
    company: "Loft",
    scope: "Conversion",
    description: "Led data science squads building ML models for media investment optimization and property liquidity scoring, helping internal teams prioritize and accelerate the sale of low-demand properties.",
  },
  {
    period: "2020 - 2022",
    role: "ASSOCIATE PM/CRM SPECIALIST",
    company: "QuintoAndar",
    scope: "Product",
    description: "Led hybrid squads (Data Science + Engineering) to build ML models for property ranking and personalization, and managed CRM governance across email, SMS, push and in-app channels via Braze.",
  },
  {
    period: "2011 - 2019",
    role: "STRATEGIST",
    company: "Advertising Agencies",
    scope: "Data",
    description: "Spent nearly a decade in strategic planning roles at top agencies (AlmapBBDO, Tribal Worldwide, GTB WPP, JWT WPP), leading CRM, digital performance and brand strategy for global clients like Volkswagen, Ford and Santander.",
  },
];


const Experience = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experiencia" className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-16">
          PROFESSIONAL EXPERIENCE
        </p>
        
        <div className="space-y-0 mb-24">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="hover-fill group py-6 md:py-8 border-b border-foreground/10 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  hoveredIndex === index ? "max-h-24 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-start-3 md:col-span-7">
                    <p className="text-xs md:text-sm leading-relaxed text-muted-foreground group-hover:text-background/60">
                      {exp.description}
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

export default Experience;
