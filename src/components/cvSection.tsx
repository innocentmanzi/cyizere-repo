import { Download, ExternalLink, Calendar, MapPin, GraduationCap, Briefcase, Award as AwardIcon, Users } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const CVSection = () => {
  const handleDownloadCV = async () => {
    try {
      // Get the CV section element
      const cvSection = document.querySelector('#cv') as HTMLElement;
      if (!cvSection) {
        console.error('CV section not found');
        return;
      }

      // Show loading state
      const downloadBtn = document.querySelector('.download-btn') as HTMLButtonElement;
      if (downloadBtn) {
        downloadBtn.innerHTML = '<div>Generating PDF...</div>';
        downloadBtn.disabled = true;
      }

      // Create canvas from the CV section
      const canvas = await html2canvas(cvSection, {
        scale: 2, // Higher quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: cvSection.scrollWidth,
        height: cvSection.scrollHeight
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Calculate dimensions to fit the content
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if content is longer than one page
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      pdf.save('Elie_Cyizere_CV.pdf');

      // Reset button state
      if (downloadBtn) {
        downloadBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download Full CV (PDF)';
        downloadBtn.disabled = false;
      }

    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    }
  };

  const education = [
    {
      degree: "Bachelor of Entrepreneurial Leadership",
      institution: "African Leadership University (ALU)",
      year: "May 2023 - Apr 2027",
      location: "Kigali, Rwanda",
      achievements: ["Global Challenges & Opportunities", "Leadership Principles"]
    }
  ];

  const experience = [
    {
      position: "Environmental Communications Intern",
      company: "Wetland Protection Network",
      duration: "Jan 2025 - Jun 2025",
      location: "Gatsibo, Rwanda",
      responsibilities: [
        "Led awareness campaigns on wetland conservation and sustainable resource use for local communities",
        "Simplified complex environmental issues into accessible messages, strengthening public understanding",
        "Built skills in inclusive leadership, public speaking, and stakeholder engagement"
      ]
    },
    {
      position: "Community Engagement Intern",
      company: "Rwanda Revenue Authority (RRA)",
      duration: "Jan 2024 - May 2024",
      location: "Kigali, Rwanda",
      responsibilities: [
        "Designed communication strategies to engage the public and promote awareness of revenue and compliance programs",
        "Coordinated small team projects to analyze community challenges and propose practical solutions",
        "Developed leadership, organizational, and problem-solving skills within a structured institutional setting"
      ]
    }
  ];

  const skills = [
    { category: "Community Engagement", items: ["Stakeholder Collaboration", "Public Awareness Campaigns", "Community Outreach"] },
    { category: "Project Management", items: ["Critical Thinking", "Team Coordination", "Strategic Planning"] },
    { category: "Digital Marketing", items: ["Communications", "Content Creation", "Public Relations"] },
    { category: "Leadership", items: ["Team Facilitation", "Inclusive Leadership", "Innovation & Design Thinking"] }
  ];

  const achievements = [
    "Peer Mentor - Youth Mentorship Program (2020-2022)",
    "Football Team Member - School Team (2019-2022)",
    "Environmental Conservation Advocate - Wetland Protection Network",
    "Community Development Champion - Rwanda Revenue Authority"
  ];

  return (
    <div className="cv-page">
      {/* Section Header */}
      <div className="cv-header">
        <h2 className="cv-title">
          Curriculum <span className="accent-text">Vitae</span>
        </h2>
        <p className="cv-description">
          Comprehensive overview of my academic achievements, professional experience, and leadership development.
        </p>
        
        {/* Download CV Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <button className="download-btn" onClick={handleDownloadCV}>
            <Download size={20} />
            Download Full CV (PDF)
          </button>
          <a 
            href="https://www.linkedin.com/in/elie-cyizere-a1670227a" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              background: 'transparent', 
              border: '2px solid var(--primary)', 
              color: 'var(--primary)', 
              padding: '1rem 2rem', 
              borderRadius: '0.75rem', 
              fontWeight: '600', 
              cursor: 'pointer', 
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}
          >
            <ExternalLink size={20} />
            View LinkedIn Profile
          </a>
        </div>
      </div>

      {/* CV Content Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {/* Left Column - Education & Experience */}
        <div style={{ gridColumn: 'span 2' }}>
          {/* Education */}
          <div className="cv-section">
            <div className="section-header">
              <div className="section-icon">
                <GraduationCap size={24} />
              </div>
              <h3 className="section-title">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <h4 className="item-title">{edu.degree}</h4>
                  <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {edu.year}
                  </span>
                </div>
                <p className="item-meta">{edu.institution}</p>
                {edu.location && <p className="item-meta">{edu.location}</p>}
                <div className="item-tags">
                  {edu.achievements.map((achievement, idx) => (
                    <span key={idx} className="tag">
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="cv-section">
            <div className="section-header">
              <div className="section-icon">
                <Briefcase size={24} />
              </div>
              <h3 className="section-title">Professional Experience</h3>
            </div>
            
            {experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 className="item-title">{exp.position}</h4>
                  <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <p style={{ color: 'var(--muted-foreground)', fontWeight: '500' }}>{exp.company}</p>
                  <span style={{ color: 'var(--muted-foreground)' }}>•</span>
                  <p style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <MapPin size={14} />
                    {exp.location}
                  </p>
                </div>
                <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: 'var(--muted-foreground)' }}>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Skills & Achievements */}
        <div>
          {/* Skills */}
          <div className="cv-section">
            <div className="section-header">
              <div className="section-icon">
                <Users size={24} />
              </div>
              <h3 className="section-title">Core Skills</h3>
            </div>
            
            {skills.map((skillGroup, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--foreground)', marginBottom: '0.75rem' }}>{skillGroup.category}</h4>
                <div className="item-tags">
                  {skillGroup.items.map((skill, idx) => (
                    <span key={idx} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="cv-section">
            <div className="section-header">
              <div className="section-icon">
                <AwardIcon size={24} />
              </div>
              <h3 className="section-title">Key Achievements</h3>
            </div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {achievements.map((achievement, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVSection;