const Hero = () => {
  return <section className="min-h-screen flex flex-col justify-end px-4 md:px-8 pb-8 pt-24">
      <div className="flex-1 flex items-center">
        <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight fade-in">PRODUCT &
STRATEGY<br />
          MANAGER
        </h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-foreground/20 fade-in fade-in-delay-2">
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">Digital Product
Data Science & AI
CRM & Growth</p>
          <p className="text-sm">Digital Product
Data Science & AI
CRM & Growth</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">EXPERIÊNCIA</p>
          <p className="text-sm">+ 4 Anos em Tech
+10 Anos em Comms/Mkt </p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">+4 Anos em Tech 
+10 Anos em Publicidade</p>
          <p className="text-sm">São Paulo, BR</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">STATUS</p>
          <p className="text-sm">Disponível</p>
        </div>
      </div>
    </section>;
};
export default Hero;