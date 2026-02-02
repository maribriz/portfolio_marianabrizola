const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        <p className="text-sm tracking-editorial text-muted-foreground mb-6 fade-in">
          PRODUCT MANAGER
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 fade-in fade-in-delay-1">
          Transformando
          <br />
          <span className="italic">visão</span> em
          <br />
          <span className="text-accent">produto.</span>
        </h1>
        
        <p className="max-w-md text-muted-foreground text-base md:text-lg leading-relaxed mb-12 fade-in fade-in-delay-2">
          Criando experiências digitais que conectam pessoas 
          e negócios através de estratégia, design e tecnologia.
        </p>
        
        <div className="flex items-center gap-8 fade-in fade-in-delay-3">
          <a 
            href="#contato" 
            className="editorial-link text-sm tracking-editorial"
          >
            ENTRE EM CONTATO
          </a>
          <span className="text-muted-foreground/40">—</span>
          <a 
            href="#projetos" 
            className="editorial-link text-sm tracking-editorial"
          >
            VER PROJETOS
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 fade-in fade-in-delay-4">
        <p className="text-xs tracking-editorial text-muted-foreground rotate-0 md:-rotate-90 md:origin-left">
          SCROLL
        </p>
      </div>
    </section>
  );
};

export default Hero;
