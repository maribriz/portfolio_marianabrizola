import { ArrowUpRight } from "lucide-react";

const personalProjects = [
  {
    number: "01",
    title: "PROJECT NAME",
    category: "CATEGORY",
    description: "Brief description of the personal project and its impact.",
  },
  {
    number: "02",
    title: "PROJECT NAME",
    category: "CATEGORY",
    description: "Brief description of the personal project and its impact.",
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
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-none">
                  {project.title}
                </h3>
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
