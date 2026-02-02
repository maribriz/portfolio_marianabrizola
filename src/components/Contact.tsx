const Contact = () => {
  return (
    <section id="contato" className="min-h-screen flex flex-col justify-between px-4 md:px-8 py-24 md:py-32 bg-foreground text-background">
      <div>
        <p className="text-[10px] tracking-[0.3em] text-background/60 mb-16">
          CONTATO
        </p>
        
        <h2 className="font-display text-[12vw] md:text-[10vw] leading-[0.85]">
          VAMOS
          <br />
          CONVERSAR?
        </h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-24">
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">EMAIL</p>
          <a 
            href="mailto:seu@email.com" 
            className="editorial-link text-lg after:bg-background"
          >
            seu@email.com
          </a>
        </div>
        
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">LINKEDIN</p>
          <a 
            href="https://linkedin.com/in/seuprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link text-lg after:bg-background"
          >
            /in/seuprofile
          </a>
        </div>
        
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">BASEADO EM</p>
          <p className="text-lg">São Paulo, Brasil</p>
        </div>
      </div>
      
      <div className="flex justify-between items-end mt-24 pt-8 border-t border-background/20">
        <p className="text-[10px] tracking-[0.2em] text-background/40">
          © 2024
        </p>
        <p className="text-[10px] tracking-[0.3em] text-background/40">
          PORTFOLIO
        </p>
      </div>
    </section>
  );
};

export default Contact;
