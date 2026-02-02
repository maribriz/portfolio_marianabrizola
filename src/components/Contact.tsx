const Contact = () => {
  return (
    <section id="contato" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-charcoal text-primary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="text-sm tracking-editorial text-primary-foreground/60 mb-4">
              05
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-8">
              Vamos criar algo
              <br />
              <span className="italic">extraordinário</span>
              <br />
              juntos?
            </h2>
          </div>
          
          <div className="md:col-span-6 md:flex md:flex-col md:justify-end">
            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-editorial text-primary-foreground/60 mb-3">
                  EMAIL
                </p>
                <a 
                  href="mailto:seu@email.com" 
                  className="editorial-link text-lg md:text-xl font-display after:bg-primary-foreground"
                >
                  seu@email.com
                </a>
              </div>
              
              <div>
                <p className="text-xs tracking-editorial text-primary-foreground/60 mb-3">
                  LINKEDIN
                </p>
                <a 
                  href="https://linkedin.com/in/seuprofile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="editorial-link text-lg md:text-xl font-display after:bg-primary-foreground"
                >
                  /in/seuprofile
                </a>
              </div>
              
              <div>
                <p className="text-xs tracking-editorial text-primary-foreground/60 mb-3">
                  LOCALIZAÇÃO
                </p>
                <p className="text-lg md:text-xl font-display">
                  São Paulo, Brasil
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            © 2024 — Todos os direitos reservados
          </p>
          <p className="text-xs text-primary-foreground/60 tracking-editorial">
            DESIGNED WITH INTENTION
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
