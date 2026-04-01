const FloatingCTA = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-foreground text-background font-display text-sm tracking-[0.15em] px-6 py-3 hover:scale-105 transition-transform duration-300 shadow-lg"
      aria-label="Go to contact section"
    >
      LET'S TALK →
    </button>
  );
};

export default FloatingCTA;
