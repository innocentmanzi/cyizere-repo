import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Users,
      title: "Community Engagement",
      description: "Building meaningful connections with stakeholders and communities to drive sustainable development and social impact."
    },
    {
      icon: Target,
      title: "Environmental Stewardship",
      description: "Committed to protecting natural resources and promoting sustainable practices for future generations."
    },
    {
      icon: Lightbulb,
      title: "Digital Innovation",
      description: "Leveraging technology and digital tools to create accessible solutions for complex community challenges."
    },
    {
      icon: Award,
      title: "Social Impact",
      description: "Dedicated to translating ideas into actionable projects that create measurable positive change in communities."
    }
  ];

  return (
    <div className="about-page">
      {/* Section Header */}
      <div className="about-header">
        <div className="section-badge">
          <div className="badge-line"></div>
          About Me
          <div className="badge-line"></div>
        </div>
        <h2 className="about-title">
          About <span className="accent-text">Me</span>
        </h2>
        <p className="about-description">
          Mission-driven <span className="highlight">Entrepreneurial Leadership</span> student with practical experience in 
          <span className="highlight"> community engagement</span>, <span className="highlight">communication</span>, and 
          <span className="highlight"> project management</span>. Passionate about leveraging digital tools, marketing, and leadership to design sustainable solutions for community development and environmental stewardship.
        </p>
      </div>

      {/* Personal Statement Card */}
      <div className="philosophy-card">
        <div className="card-decoration card-decoration-1"></div>
        <div className="card-decoration card-decoration-2"></div>
        
        <div className="philosophy-content">
          <div className="philosophy-header">
            <div className="philosophy-icon">
              <Target size={24} />
            </div>
            <h3 className="philosophy-title">My Leadership Philosophy</h3>
          </div>
          
          <div className="philosophy-text">
            <p>
              Skilled at translating ideas into <span className="highlight">actionable projects</span> that create measurable social impact. 
              My experience spans from <span className="accent-highlight">community engagement</span> at Rwanda Revenue Authority to 
              <span className="accent-highlight"> environmental communications</span> with Wetland Protection Network, demonstrating my commitment to sustainable development.
            </p>
            <p>
              I am passionate about <span className="highlight">leveraging digital tools and marketing</span> to design sustainable solutions for 
              community development and environmental stewardship. Through my studies at African Leadership University and hands-on experience, 
              I aim to create meaningful change in communities across Rwanda and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Grid */}
      <div className="values-grid">
        {values.map((value, index) => (
          <div 
            key={index}
            className="value-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="value-card-bg"></div>
            
            <div className="value-content">
              <div className="value-icon-container">
                <div className="value-icon">
                  <value.icon size={32} />
                </div>
              </div>
              <div className="value-text">
                <h4 className="value-title">
                  {value.title}
                </h4>
                <p className="value-description">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;