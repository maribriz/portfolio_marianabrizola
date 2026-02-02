const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="text-sm tracking-editorial text-muted-foreground mb-4">
              01
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light">
              Sobre
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed mb-8 text-foreground/90">
              Sou Product Manager com paixão por criar produtos que 
              <span className="italic text-accent"> fazem a diferença</span>. 
              Combino visão estratégica com execução meticulosa.
            </p>
            
            <div className="section-divider mb-8" />
            
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Com mais de 5 anos de experiência em tecnologia, 
              já liderei o desenvolvimento de produtos digitais que impactaram 
              milhões de usuários. Acredito que grandes produtos nascem da 
              interseção entre necessidades reais e soluções elegantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
