const Marquee = () => {
  const text = "PRODUCT MANAGEMENT • INTELIGÊNCIA ARTIFICIAL • MACHINE LEARNING • CRM • GROWTH • ESTRATÉGIA • ";
  
  return (
    <div className="py-6 border-y border-foreground/10 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="font-display text-4xl md:text-5xl tracking-wide mx-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
