import { FileText, ExternalLink, Download, Eye } from 'lucide-react';

const ArtefactsSection = () => {
  const artefacts = [
    {
      title: "Sustainable Campus Initiative Report",
      description: "Comprehensive analysis and implementation plan for the university-wide sustainability program that achieved 30% waste reduction and engaged 500+ students.",
      type: "Research Report",
      date: "March 2022",
      tags: ["Environmental Leadership", "Project Management", "Data Analysis"],
      preview: "A detailed 25-page report documenting the strategic planning, implementation process, and measurable outcomes of the campus sustainability initiative. Includes stakeholder analysis, budget allocation, and impact assessment.",
      highlights: [
        "30% reduction in campus waste generation",
        "500+ student participants engaged",
        "Implementation across 15 campus buildings",
        "Cost savings of $12,000 annually"
      ]
    },
    {
      title: "Social Enterprise Business Plan",
      description: "Award-winning business proposal for a social enterprise focused on providing digital literacy training to underserved communities while generating sustainable revenue.",
      type: "Business Plan",
      date: "September 2023",
      tags: ["Entrepreneurship", "Social Impact", "Strategic Planning"],
      preview: "A comprehensive 40-page business plan that secured seed funding and won the university business competition. Features market analysis, financial projections, and social impact metrics.",
      highlights: [
        "Won University Business Competition",
        "Secured $15,000 seed funding",
        "Projected to serve 1,000+ beneficiaries",
        "Sustainable revenue model developed"
      ]
    },
    {
      title: "Leadership Development Portfolio",
      description: "Personal reflection and documentation of leadership growth through various roles, challenges, and learning experiences during university tenure.",
      type: "Professional Portfolio",
      date: "December 2023",
      tags: ["Personal Development", "Leadership", "Reflection"],
      preview: "An extensive portfolio documenting leadership journey, including self-assessments, peer feedback, mentor evaluations, and personal reflection essays spanning two years of development.",
      highlights: [
        "360-degree feedback analysis",
        "Leadership competency mapping",
        "Personal development planning",
        "Peer leadership recognition"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Research Report': 'bg-blue-500',
      'Business Plan': 'bg-green-500',
      'Professional Portfolio': 'bg-purple-500'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div className="artefacts-page">
      {/* Section Header */}
      <div className="artefacts-header">
        <h2 className="artefacts-title">
          Professional <span className="accent-text">Artefacts</span>
        </h2>
        <p className="artefacts-description">
          A curated collection of significant projects and deliverables that demonstrate 
          leadership capabilities, strategic thinking, and tangible impact across various domains.
        </p>
      </div>

      {/* Artefacts Grid */}
      <div>
        {artefacts.map((artefact, index) => (
          <div 
            key={index}
            className="artefact-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {/* Left Column - Main Info */}
              <div style={{ gridColumn: 'span 2' }}>
                {/* Header */}
                <div className="artefact-header">
                  <div className="artefact-icon">
                    <FileText size={24} />
                  </div>
                  <div className="artefact-info">
                    <h3 className="artefact-title">{artefact.title}</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <span style={{ 
                        padding: '0.25rem 0.75rem', 
                        background: getTypeColor(artefact.type).replace('bg-', 'var(--') + ')',
                        color: 'white', 
                        borderRadius: '9999px', 
                        fontSize: '0.875rem', 
                        fontWeight: '500' 
                      }}>
                        {artefact.type}
                      </span>
                      <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{artefact.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="artefact-summary">
                  {artefact.description}
                </p>

                {/* Preview */}
                <div className="artefact-preview">
                  <h4 className="preview-title">Document Preview:</h4>
                  <p className="preview-description">
                    {artefact.preview}
                  </p>
                </div>

                {/* Tags */}
                <div className="preview-tags">
                  {artefact.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <button className="view-btn">
                    <Eye size={16} />
                    View Document
                  </button>
                  <button style={{ 
                    background: 'transparent', 
                    border: '2px solid var(--primary)', 
                    color: 'var(--primary)', 
                    padding: '0.75rem 1.5rem', 
                    borderRadius: '0.5rem', 
                    fontWeight: '600', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <Download size={16} />
                    Download PDF
                  </button>
                  <button style={{ 
                    background: 'transparent', 
                    border: '2px solid var(--accent)', 
                    color: 'var(--accent)', 
                    padding: '0.75rem 1.5rem', 
                    borderRadius: '0.5rem', 
                    fontWeight: '600', 
                    cursor: 'pointer', 
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <ExternalLink size={16} />
                    External Link
                  </button>
                </div>
              </div>

              {/* Right Column - Highlights */}
              <div>
                <div style={{ background: 'var(--muted)', borderRadius: '0.75rem', padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--foreground)', marginBottom: '1rem' }}>Key Highlights</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {artefact.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                        <span style={{ color: 'var(--muted-foreground)', fontSize: '0.875rem' }}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{ marginTop: '4rem', textAlign: 'center', animation: 'fadeIn 0.8s ease-out' }}>
        <div style={{ background: 'white', borderRadius: '1.5rem', padding: '2rem', maxWidth: '800px', margin: '0 auto', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '1rem' }}>
            Interested in My Work?
          </h3>
          <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            Each artefact represents a significant learning milestone and demonstrates 
            my commitment to excellence, innovation, and measurable impact. 
            I'm happy to discuss any of these projects in detail.
          </p>
          <button style={{ 
            background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', 
            color: 'var(--accent-foreground)', 
            padding: '1rem 2rem', 
            border: 'none', 
            borderRadius: '0.75rem', 
            fontWeight: '600', 
            cursor: 'pointer', 
            transition: 'all 0.3s ease'
          }}>
            Request Detailed Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtefactsSection;