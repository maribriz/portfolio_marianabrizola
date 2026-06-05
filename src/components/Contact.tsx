const Contact = () => {
  return <section id="contato" className="min-h-screen flex flex-col justify-between px-4 md:px-8 py-24 md:py-32 bg-foreground text-background">
      <div>
        <p className="text-[10px] tracking-[0.3em] text-background/60 mb-16">
          CONTACT
        </p>
        
        <div className="flex items-center justify-between gap-8 flex-wrap">
          <h2 className="font-display text-[12vw] md:text-[10vw] leading-[0.85]">
            LET'S
            <br />
            TALK?
          </h2>

          <div id="r" className="shrink-0">
            <style>{`@import url("https://use.typekit.net/kmj5qkr.css");#r{--h:polygon(50% 0,100% 24%,100% 76%,50% 100%,0 76%,0 24%);font-family:proxima-nova,Arial,sans-serif}#r .h{display:inline-block;background:#25a9ef;padding:6px;clip-path:var(--h)}#r .a{width:200px;height:230px;padding:48px 0 40px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#204ecf;text-align:center;background:radial-gradient(circle at 20% -10%,#00c3ff -80%,#fff 30%),radial-gradient(circle at -20% 20%,#00c3ff -80%,#fff 30%),radial-gradient(circle at 70% 100%,#00c3ff -80%,#fff 30%),radial-gradient(circle at 120% 80%,#00c3ff -80%,#fff 30%);background-blend-mode:multiply;clip-path:var(--h);box-shadow:0 28px 50px rgba(6,30,96,.35)}#r .b{margin:0;font-size:13px;font-weight:700;line-height:1;letter-spacing:.15em}#r .c{width:110px;height:1px;background:#25a9ef;margin:2px 0}#r .d{font-size:13px;opacity:.9;margin:0}#r .e{display:flex;align-items:center;gap:5px;color:#204ecf;font-weight:700;font-size:20px;letter-spacing:-.02em;line-height:1}#r .e svg{width:18px;height:18px}#r .f{display:inline-flex;align-items:center;justify-content:center;padding:4px 20px;border-radius:6px;background:#296bff;color:#fff;font-size:13px;font-weight:500;text-decoration:none;margin-top:2px}`}</style>
            <span className="h">
              <span className="a">
                <p className="b">TOP 3% TALENT</p>
                <span className="c"></span>
                <p className="d">Vetted by</p>
                <span className="e">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h18l-7 14L3 5z" fill="#204ecf"/></svg>
                  Toptal
                </span>
                <a className="f" href="https://www.toptal.com/product-managers/resume/mariana-brizola" target="_blank" rel="noopener noreferrer">Hire me</a>
              </span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 md:gap-16 mt-24">
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">EMAIL</p>
          <a className="editorial-link text-lg after:bg-background" href="mailto:mari.brizola@gmail.com">
            mari.brizola@gmail.com
          </a>
        </div>
        
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">LINKEDIN</p>
          <a target="_blank" rel="noopener noreferrer" className="editorial-link text-lg after:bg-background" href="http://www.linkedin.com/in/marianabrizola/">
            /in/marianabrizola
          </a>
        </div>
        
        <div>
          <p className="text-[10px] tracking-[0.3em] text-background/40 mb-4">BASED IN</p>
          <p className="text-lg">São Paulo, Brazil</p>
          <p className="text-sm text-background/60 mt-2">
            → Willing to relocate<br />
            → Open to remote work opportunities
          </p>
        </div>
      </div>


      <div className="flex justify-between items-end mt-24 pt-8 border-t border-background/20">
        <p className="text-[10px] tracking-[0.2em] text-background/40">
          © 2026
        </p>
        <p className="text-[10px] tracking-[0.3em] text-background/40">
          PORTFOLIO
        </p>
      </div>
    </section>;
};
export default Contact;