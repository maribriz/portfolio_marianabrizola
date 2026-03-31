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
    <section id="personal-projects" className="py-24 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <p className="text-[10px] tracking-[0.3em] text-muted-foreground">
            PERSONAL PROJECTS
          </p>
        </div>

        <div className="space-y-0">
          {personalProjects.map((project, index) => (
            <div
              key={index}
              className="group py-12 md:py-16 border-t border-foreground/10 last:border-b"
            >
              <div className="grid grid-cols-12 gap-4 items-start md:items-center">
                <div className="col-span-2 md:col-span-1">
                  <span className="text-[10px] tracking-[0.2em] text-muted-foreground">
                    {project.number}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-7">
                  <h3 className="font-display text-4xl md:text-6xl lg:text-7xl group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-2">
                    {project.category}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-4 md:text-right mt-4 md:mt-0">
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;
