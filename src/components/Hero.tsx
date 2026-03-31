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
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">SPECIALLITY</p>
          <p className="text-xs md:text-sm whitespace-pre-line leading-relaxed">{"・Product Management\n・Data Science\n・Artificial Intelligence\n・CRM\n・Growth\n・Advertising & Media Strategy"}</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">EXPERIENCE</p>
          <p className="text-sm">+ 5 years in Tech<br />+10 years in Advertising/Mkt</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">LANGUAGES</p>
          <p className="text-sm whitespace-pre-line">{"・Portuguese: Native/Fluent\n\n・English: Advanced\n・Spanish: Intermediate"}</p>
        </div>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground mb-2">STATUS</p>
          <p className="text-sm whitespace-pre-line">{"Open to new opportunities.\n・On site\n・Hybrid\n・Remote"}</p>
        </div>
      </div>
    </section>;
};
export default Hero;