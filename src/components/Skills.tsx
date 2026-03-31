const skills = [
  "PRODUCT STRATEGY",
  "USER RESEARCH", 
  "DATA ANALYSIS",
  "OKRs",
  "STAKEHOLDER MGT",
  "A/B TESTING",
  "AGILE/SCRUM",
  "SQL",
  "PYTHON",
  "JIRA",
  "LOVABLE",
  "N8N",
  "CLAUDE",
  "CHATGPT",
  "GEMINI",
];

const Skills = () => {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
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

export default Skills;
