const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg font-bold">
            <span className="text-foreground">ARJUN</span>
            <span className="text-primary">.</span>
          </div>

          <div className="text-sm text-muted-foreground text-center">
            © {currentYear} Arjun MM. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <span className="text-border">|</span>
            <a href="#projects" className="hover:text-foreground transition-colors">Cases</a>
            <span className="text-border">|</span>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
