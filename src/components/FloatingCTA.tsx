const FloatingCTA = () => {
  const scrollToContact = () => {
    const el = document.getElementById("contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-foreground text-background font-display text-lg tracking-[0.15em] px-10 py-5 hover:scale-105 transition-transform duration-300 shadow-lg"
      aria-label="Go to contact section"
    >
      LET'S TALK →
    </button>
  );
};

export default FloatingCTA;
