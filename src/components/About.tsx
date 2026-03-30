import profilePhoto from "@/assets/profile-photo.jpg";
const About = () => {
  return <section id="sobre" className="py-24 md:py-32 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Photo Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[3/4] bg-background/10 overflow-hidden group">
              <img src={profilePhoto} alt="Foto de perfil" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                <p className="text-[10px] tracking-[0.3em] text-background/60">
                  FOTO POR HELENA YOSHIOKA
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
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-12">DESENVOLVO SOLUÇÕES TECNOLÓGICAS COM UMA PERSPECTIVA HUMANA</h2>
            </div>
            
          </div>
        </div>
      </div>
    </section>;
};
export default About;