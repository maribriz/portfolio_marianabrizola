import { ArrowUpRight } from "lucide-react";

const personalProjects = [
  {
    number: "01",
    title: "LINKEDIN PROFILE OPTIMIZER",
    subtitle: "PrograMaria x Zup Innovation Sprint | Dec/2025",
    category: "AI AGENT",
    description: "Built an AI agent using GPT-4.1 on StackSpot to help job seekers improve their LinkedIn presence. Users upload their LinkedIn profile as a PDF and the agent analyzes each section, identifies strengths and gaps, and generates a rewritten, recruiter-ready version with actionable suggestions. The agent was built with a detailed prompt to review each section, flag what could be stronger, and suggest rewritten versions tailored to what recruiters actually look for.",
  },
  {
    number: "02",
    title: "UNDESTOOD, DOCTOR!",
    subtitle: "Hackathon - Mulheres de Produto | Mar/2026",
    category: "MOBILE APP",
    description: "Built and shipped a fully functional AI-powered mobile app in 90 minutes on Replit during a hackathon organized by Mulheres de Produto. Working in a team composed by 4 women, defined the product concept, core use cases, and AI-driven feature set end-to-end.\n\nThe app addresses a real accessibility gap in healthcare: patients, especially elderly and neurodivergent users, leaving consultations without retaining critical information. The solution uses AI audio transcription to automatically generate structured, plain-language summaries of medical appointments.",
  },
];

const PersonalProjects = () => {
  return (
    <section id="personal-projects" className="py-24 md:py-32 px-4 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] text-primary-foreground/50 mb-16">
          PERSONAL PROJECTS
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-primary-foreground/15 p-8 md:p-10 hover:bg-primary-foreground/5 transition-all duration-500 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="text-[10px] tracking-[0.2em] text-primary-foreground/40">
                  {project.number}
                </span>
                <ArrowUpRight className="w-5 h-5 text-primary-foreground/30 group-hover:text-primary-foreground group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>

              <div>
                <p className="text-[10px] tracking-[0.2em] text-primary-foreground/40 mb-3">
                  {project.category}
                </p>
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-2 leading-none">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-[10px] tracking-[0.1em] text-primary-foreground/40 mb-6">
                    {project.subtitle}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-primary-foreground/60">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
