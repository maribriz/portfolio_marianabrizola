import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Sobre", href: "#sobre" },
    { label: "Experiência", href: "#experiencia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 bg-background/80 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <a href="#" className="font-display text-xl">
          <span className="font-light">Seu</span>
          <span className="font-medium">Nome</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="editorial-link text-xs tracking-editorial text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`block w-6 h-[1px] bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-background transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-3xl font-light hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
