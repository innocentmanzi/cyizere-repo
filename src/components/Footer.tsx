import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Branding */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">CE</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Cyizere Elie</h3>
                  <p className="text-sm text-primary-foreground/80">Leadership Portfolio</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Aspiring Entrepreneurial Leader committed to creating positive change 
                through innovation and strategic leadership.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#cv" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    Curriculum Vitae
                  </a>
                </li>
                <li>
                  <a href="#artefacts" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    Professional Artefacts
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    Leadership Journey
                  </a>
                </li>
                <li>
                  <a href="#reflection" className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth">
                    Leadership Reflection
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="mailto:cyizere.elie@email.com" 
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    cyizere.elie@email.com
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/in/cyizere-elie" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-smooth"
                  >
                    LinkedIn Profile
                  </a>
                </li>
                <li>
                  <span className="text-primary-foreground/70">
                    Kigali, Rwanda
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70 mb-4 md:mb-0">
                <span>© 2024 Cyizere Elie. Crafted with</span>
                <Heart size={16} className="text-accent fill-current" />
                <span>for leadership excellence.</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-smooth group"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} className="group-hover:translate-y-[-2px] transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;