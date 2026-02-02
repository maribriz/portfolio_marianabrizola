const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-background/60 mb-8">
              SOBRE
            </p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
              CRIANDO PRODUTOS QUE IMPORTAM
            </h2>
          </div>
          
          <div className="flex flex-col justify-end">
            <p className="text-background/80 text-lg leading-relaxed mb-8">
              Product Manager com obsessão por experiências digitais excepcionais. 
              Transformo complexidade em simplicidade, dados em decisões, 
              e visão em realidade.
            </p>
            <p className="text-background/60 leading-relaxed">
              Já liderei produtos que impactaram milhões de usuários. 
              Minha abordagem combina rigor analítico com sensibilidade para design 
              e profundo entendimento do comportamento humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
