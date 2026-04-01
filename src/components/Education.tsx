const education = [
  {
    title: "B.A. IN SOCIAL COMMUNICATION – ADVERTISING & MARKETING",
    institution: "University of São Paulo (USP)",
    period: "2009 – 2013",
  },
  {
    title: "INTENSIVE PROGRAM - DATA SCIENCE & MACHINE LEARNING",
    institution: "Tera",
    period: "2023 (8 months)",
  },
];

const certifications = [
  { title: "Data Analysis - Python", institution: "PrograMaria", year: "2026" },
  { title: "Metrics for Product Managers", institution: "Mulheres de Produto", year: "2025" },
  { title: "AI Agents", institution: "PrograMaria Sprint", year: "2025" },
  { title: "Product Management for AI & Data Science", institution: "Udemy", year: "2025" },
  { title: "Growth Series", institution: "Reforge", year: "2023" },
  { title: "Mastering Product Management", institution: "Reforge", year: "2022" },
  { title: "Data Analytics", institution: "Tera", year: "2021" },
  { title: "FRONT-END - HTML, CSS, JAVASCRIPT", institution: "PrograMaria", year: "2020" },
];

const Education = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Education */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-10">
              EDUCATION
            </p>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="border-l border-foreground/15 pl-6">
                  <h3 className="text-sm tracking-[0.1em] font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs tracking-[0.1em] text-muted-foreground">
                    {item.institution}
                  </p>
                  <p className="text-xs tracking-[0.1em] text-muted-foreground/60 mt-1">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-10">
              CERTIFICATIONS
            </p>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <div key={index} className="flex justify-between items-baseline gap-4 border-b border-foreground/5 pb-3">
                  <div>
                    <h3 className="text-xs tracking-[0.1em] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-[10px] tracking-[0.1em] text-muted-foreground">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-[10px] tracking-[0.1em] text-muted-foreground/60 shrink-0">
                    {item.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
