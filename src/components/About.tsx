import profilePhoto from "@/assets/profile-photo.jpg";
const About = () => {
  return <section id="sobre" className="py-24 md:py-32 px-4 md:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Photo Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[3/4] bg-background/10 overflow-hidden group">
              <img src={profilePhoto} alt="Foto de perfil" className="w-full h-full object-cover object-[center_15%] scale-[2] grayscale group-hover:grayscale-0 transition-all duration-700" />
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
            
            <div>
              <p className="text-background/80 text-lg leading-relaxed mb-8">Product Manager with 15 years of experience across Advertising, Technology, and AI. I've led data science and machine learning squads at Brazilian unicorns like QuintoAndar and Loft, building models for personalization, ranking, and predictive analytics — always with a clear focus on user behavior and business impact. I bring the full stack of product thinking — from defining the real problem and discovery, through roadmap prioritization, to go-to-market and team leadership. My background in brand strategy gives me something most technical PMs don't have: a deep understanding of why people do what they do.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;};
export default About;