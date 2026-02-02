const About = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Photo Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[3/4] bg-background/10 overflow-hidden group">
              {/* Placeholder - substituir pela sua foto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[10px] tracking-[0.3em] text-background/40 text-center px-8">
                  SUA FOTO AQUI
                </p>
              </div>
              {/* Uncomment and add your photo:
              <img 
                src="/your-photo.jpg" 
                alt="Seu Nome"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-[10px] tracking-[0.3em] text-background/60">
                  SEU NOME
                </p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-background/60 mb-8">
                SOBRE
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-12">
                CRIANDO PRODUTOS QUE IMPORTAM
              </h2>
            </div>
            
            <div>
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
      </div>
    </section>
  );
};

export default About;
