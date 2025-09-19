import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CVSection from '@/components/cvSection';
import ArtefactsSection from '@/components/ArtifactsSection';
import TimelineSection from '@/components/TimelineSection';
import ReflectionSection from '@/components/ReflectionSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section - Full viewport height */}
      <section id="home">
        <HeroSection />
      </section>
      
      {/* About Section */}
      <section id="about" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--background), var(--muted))' }}>
        <div className="container">
          <AboutSection />
        </div>
      </section>
      
      {/* CV Section */}
      <section id="cv" className="section-padding">
        <div className="container">
          <CVSection />
        </div>
      </section>
      
      {/* Artefacts Section */}
      <section id="artefacts" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--background), var(--muted))' }}>
        <div className="container">
          <ArtefactsSection />
        </div>
      </section>
      
      {/* Timeline Section */}
      <section id="timeline" className="section-padding">
        <div className="container">
          <TimelineSection />
        </div>
      </section>
      
      {/* Reflection Section */}
      <section id="reflection" className="section-padding" style={{ background: 'linear-gradient(to bottom, var(--background), var(--muted))' }}>
        <div className="container">
          <ReflectionSection />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
