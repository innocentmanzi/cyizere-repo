import { Download, Linkedin } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const HeroSection = () => {
  const handleDownloadCV = async () => {
    console.log('Download CV button clicked!');
    
    try {
      // Show loading state
      const downloadBtn = document.querySelector('.btn-primary') as HTMLButtonElement;
      if (downloadBtn) {
        downloadBtn.innerHTML = '<div>Generating PDF...</div>';
        downloadBtn.disabled = true;
      }

      // Create PDF with your actual resume content
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = 210;
      const pageHeight = 295;
      let yPosition = 20;
      const lineHeight = 6;
      const margin = 20;

      // Helper function to add text with word wrapping
      const addText = (text: string, fontSize: number, isBold: boolean = false, color: string = '#000000') => {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');
        pdf.setTextColor(color);
        
        const maxWidth = pageWidth - (margin * 2);
        const lines = pdf.splitTextToSize(text, maxWidth);
        
        for (const line of lines) {
          if (yPosition > pageHeight - 20) {
            pdf.addPage();
            yPosition = 20;
          }
          pdf.text(line, margin, yPosition);
          yPosition += lineHeight;
        }
        yPosition += 2;
      };

      // Header
      addText('Elie Cyizere', 20, true, '#2c3e50');
      addText('Kigali, Rwanda | KK 509 ST', 12, false, '#34495e');
      addText('+250 780 709 101 | cyizereelie5@gmail.com', 12, false, '#34495e');
      addText('LinkedIn: linkedin.com/in/eliecyizere', 12, false, '#34495e');
      
      yPosition += 5;

      // Summary
      addText('Summary', 16, true, '#2c3e50');
      addText('Mission-driven Entrepreneurial Leadership student with practical experience in community engagement, communication, and project management. Passionate about leveraging digital tools, marketing, and leadership to design sustainable solutions for community development and environmental stewardship. Skilled at translating ideas into actionable projects that create measurable social impact.', 11, false, '#34495e');
      
      yPosition += 5;

      // Education
      addText('Education', 16, true, '#2c3e50');
      addText('African Leadership University (ALU) – Kigali, Rwanda', 12, true, '#2c3e50');
      addText('Bachelor of Entrepreneurial Leadership | May 2023 – Apr 2027', 11, false, '#34495e');
      addText('Relevant Coursework: Global Challenges & Opportunities, Leadership Principles', 10, false, '#7f8c8d');
      
      yPosition += 5;

      // Professional Experience
      addText('Professional Experience', 16, true, '#2c3e50');
      
      // RRA Experience
      addText('Community Engagement Intern – Rwanda Revenue Authority (RRA) | Kigali, Rwanda', 12, true, '#2c3e50');
      addText('Jan 2024 – May 2024', 10, false, '#7f8c8d');
      addText('• Designed communication strategies to engage the public and promote awareness of revenue and compliance programs.', 10, false, '#34495e');
      addText('• Coordinated small team projects to analyze community challenges and propose practical solutions.', 10, false, '#34495e');
      addText('• Developed leadership, organizational, and problem-solving skills within a structured institutional setting.', 10, false, '#34495e');
      
      yPosition += 3;

      // Wetland Protection Network Experience
      addText('Environmental Communications Intern – Wetland Protection Network | Gatsibo, Rwanda', 12, true, '#2c3e50');
      addText('Jan 2025 – Jun 2025', 10, false, '#7f8c8d');
      addText('• Led awareness campaigns on wetland conservation and sustainable resource use for local communities.', 10, false, '#34495e');
      addText('• Simplified complex environmental issues into accessible messages, strengthening public understanding.', 10, false, '#34495e');
      addText('• Built skills in inclusive leadership, public speaking, and stakeholder engagement.', 10, false, '#34495e');
      
      yPosition += 5;

      // Extracurricular Activities
      addText('Extracurricular Activities', 16, true, '#2c3e50');
      addText('• Peer Mentor – Youth Mentorship Program (2020–2022)', 10, false, '#34495e');
      addText('• Football Team Member – School Team (2019–2022)', 10, false, '#34495e');
      
      yPosition += 5;

      // Skills
      addText('Skills', 16, true, '#2c3e50');
      addText('• Community Engagement & Stakeholder Collaboration', 10, false, '#34495e');
      addText('• Project Management & Critical Thinking', 10, false, '#34495e');
      addText('• Digital Marketing & Communications', 10, false, '#34495e');
      addText('• Leadership & Team Facilitation', 10, false, '#34495e');
      addText('• Innovation & Design Thinking', 10, false, '#34495e');
      
      yPosition += 5;

      // Languages
      addText('Languages', 16, true, '#2c3e50');
      addText('• English – Professional', 10, false, '#34495e');
      addText('• Kinyarwanda – Native', 10, false, '#34495e');

      // Download the PDF
      pdf.save('Elie_Cyizere_CV.pdf');

      // Reset button state
      if (downloadBtn) {
        downloadBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download CV';
        downloadBtn.disabled = false;
      }

      console.log('PDF generated and downloaded successfully!');

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const handleLinkedInClick = () => {
    console.log('LinkedIn button clicked!');
    window.open('https://www.linkedin.com/in/elie-cyizere-a1670227a', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="hero-section">
      {/* Background overlay */}
      <div className="hero-background"></div>
      
      {/* Subtle pattern overlay */}
      <div className="hero-pattern"></div>

      {/* Floating geometric shapes */}
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>

      {/* Main Content */}
      <div className="hero-content">
        <div className="animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="hero-profile">
            <div className="hero-profile-image">CE</div>
          </div>

          {/* Name with elegant typography */}
          <div>
            <h1 className="hero-title">
              Cyizere <span className="accent">Elie</span>
            </h1>
            
            {/* Professional title with elegant styling */}
            <div>
              <p className="hero-subtitle">
                Aspiring Entrepreneurial Leader
              </p>
              <div className="hero-tags">
                <span className="hero-tag">Innovator</span>
                <span className="hero-tag-dot"></span>
                <span className="hero-tag">Change-Maker</span>
                <span className="hero-tag-dot"></span>
                <span className="hero-tag">Future Business Leader</span>
              </div>
            </div>
          </div>

          {/* Mission statement */}
          <div>
            <p className="hero-description">
              I'm a passionate entrepreneur and leader dedicated to creating innovative solutions and driving positive change. 
              With experience in project management, strategic planning, and team leadership, I bring a unique perspective to every challenge I encounter.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleDownloadCV}>
              <Download size={18} />
              Download CV
            </button>
            <button className="btn-outline" onClick={handleLinkedInClick}>
              <Linkedin size={18} />
              View LinkedIn
            </button>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="hero-scroll">
            <span className="hero-scroll-text">Discover More</span>
            <button 
              onClick={scrollToAbout}
              className="hero-scroll-btn"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;