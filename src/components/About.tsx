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
                  PHOTO BY HELENA YOSHIOKA
                </p>
              </div>
            </div>
          </div>
          
          {/* Text Column */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-background/60 mb-8">
                ABOUT
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-12">
                Making products make sense,<br />for people and for business.
              </h2>
            </div>
            
            <div className="text-background/80 text-lg leading-relaxed space-y-6">
              <p>Product Manager with 15 years of experience across Advertising and Technology. I’ve led multidisciplinary squads in fast-paced environments like QuintoAndar and Loft, Brazilian unicorns, building products for different contexts such as acquisition, retention and operational efficiency.</p>
              <p>I work across the entire product lifecycle, from defining the real problem and running discovery, to prioritizing roadmaps, launching solutions, and leading teams. My core expertise is in Data, AI and ML products, Growth and CRM.</p>
              <p>My background in Brand Strategy gives me a different perspective from most technical PMs: a strong understanding of human behavior and why people make the decisions they do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;};
export default About;