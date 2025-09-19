import { useState } from 'react';
import { 
  Home, 
  User, 
  FileText, 
  Briefcase, 
  Clock, 
  MessageSquare, 
  Mail,
  Menu,
  X
} from 'lucide-react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import CVSection from './cvSection';
import ArtefactsSection from './ArtifactsSection';
import TimelineSection from './TimelineSection';
import ReflectionSection from './ReflectionSection';
import ContactSection from './ContactSection';

const Layout = () => {
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'cv', label: 'CV', icon: FileText },
    { id: 'artefacts', label: 'Artefacts', icon: Briefcase },
    { id: 'timeline', label: 'Journey', icon: Clock },
    { id: 'reflection', label: 'Reflection', icon: MessageSquare },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (pageId: string) => {
    setActivePage(pageId);
    setIsMobileMenuOpen(false);
  };

  const renderPageContent = () => {
    switch (activePage) {
      case 'home':
        return <HeroSection />;
      case 'about':
        return <AboutSection />;
      case 'cv':
        return <CVSection />;
      case 'artefacts':
        return <ArtefactsSection />;
      case 'timeline':
        return <TimelineSection />;
      case 'reflection':
        return <ReflectionSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };


  return (
    <div className="layout">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">CE</div>
            <div className="logo-text">
              <h1>Cyizere Elie</h1>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`nav-item ${activePage === item.id ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <p>© 2024 Cyizere Elie</p>
          <p>Aspiring Entrepreneurial Leader</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Mobile Header */}
        <header className="mobile-header">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            title={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {renderPageContent()}
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <div className="logo">
                <div className="logo-icon">CE</div>
                <div className="logo-text">
                  <h1>Cyizere Elie</h1>
                  <p>Leadership Portfolio</p>
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-close-btn"
                aria-label="Close menu"
                title="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-item ${activePage === item.id ? 'active' : ''}`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;