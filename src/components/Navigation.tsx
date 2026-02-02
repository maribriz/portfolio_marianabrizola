import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "SOBRE", href: "#sobre" },
    { label: "EXPERIÊNCIA", href: "#experiencia" },
    { label: "PROJETOS", href: "#projetos" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 mix-blend-difference">
        <div className="flex justify-between items-center">
          <a href="#" className="font-display text-2xl text-white">
            SEU NOME
          </a>
          
          <button
            className="flex flex-col gap-1.5 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-8 h-[2px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
          </button>
        </div>
      </nav>
      
      {/* Full Screen Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-foreground transition-all duration-700 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="h-full flex flex-col justify-center px-4 md:px-8">
          <div className="space-y-2">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block overflow-hidden"
                style={{ 
                  transitionDelay: isOpen ? `${index * 100}ms` : '0ms' 
                }}
              >
                <span 
                  className={`block font-display text-6xl md:text-8xl lg:text-9xl text-background hover:text-background/60 transition-all duration-500 ${
                    isOpen ? 'translate-y-0' : 'translate-y-full'
                  }`}
                  style={{ 
                    transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms' 
                  }}
                >
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
