import { Mail, Linkedin, MapPin, Phone, Send, User, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "cyizereelie5@gmail.com",
      link: "mailto:cyizereelie5@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/elie-cyizere",
      link: "https://www.linkedin.com/in/elie-cyizere-a1670227a"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+250 780 709 101",
      link: "tel:+250780709101"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kigali, Rwanda | KK 509 ST",
      link: null
    }
  ];

  return (
    <div className="contact-page">
      {/* Section Header */}
      <div className="contact-header">
        <h2 className="contact-title">
          Let's <span className="accent-text">Connect</span>
        </h2>
        <p className="contact-description">
          I'm always interested in discussing leadership opportunities, collaboration on innovative projects, 
          or simply connecting with like-minded professionals. Reach out to start a conversation.
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Information */}
        <div style={{ animation: 'slideUp 0.8s ease-out' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '2rem' }}>Get In Touch</h3>
          
          {/* Contact Methods */}
          <div className="contact-info">
            {contactInfo.map((contact, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">
                  <contact.icon size={24} />
                </div>
                <div className="contact-details">
                  <h4>{contact.label}</h4>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : undefined}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p>{contact.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Professional Networks */}
          <div className="networks-section">
            <h4 className="networks-title">Professional Networks</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href="https://www.linkedin.com/in/elie-cyizere-a1670227a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="network-link"
              >
                <div className="network-icon">
                  <Linkedin size={20} />
                </div>
                <span className="network-text">Connect on LinkedIn for professional updates</span>
              </a>
              <div className="network-link">
                <div className="network-icon">
                  <User size={20} />
                </div>
                <span style={{ color: 'var(--muted-foreground)' }}>Available for mentorship and collaboration</span>
              </div>
              <div className="network-link">
                <div className="network-icon">
                  <MessageSquare size={20} />
                </div>
                <span style={{ color: 'var(--muted-foreground)' }}>Open to speaking engagements and interviews</span>
              </div>
            </div>
          </div>

          {/* Availability Notice */}
          <div style={{ 
            marginTop: '2rem', 
            padding: '1rem', 
            background: 'rgba(255, 193, 7, 0.1)', 
            border: '1px solid rgba(255, 193, 7, 0.2)', 
            borderRadius: '0.75rem' 
          }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--accent-foreground)' }}>
              <strong>Current Status:</strong> Actively seeking opportunities in social entrepreneurship 
              and leadership development. Available for internships, graduate programs, and professional discussions.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ animation: 'slideUp 0.8s ease-out' }}>
          <div style={{ 
            background: 'white', 
            borderRadius: '1.5rem', 
            padding: '2rem', 
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '1.5rem' }}>Send a Message</h3>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Name Field */}
              <div>
                <label htmlFor="name" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '1px solid var(--border)', 
                    borderRadius: '0.5rem', 
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="Your full name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '1px solid var(--border)', 
                    borderRadius: '0.5rem', 
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '1px solid var(--border)', 
                    borderRadius: '0.5rem', 
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="mentorship">Mentorship Request</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="networking">Professional Networking</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: 'var(--foreground)', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    border: '1px solid var(--border)', 
                    borderRadius: '0.5rem', 
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    resize: 'none'
                  }}
                  placeholder="Tell me about your project, opportunity, or how we might collaborate..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{ 
                  width: '100%', 
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', 
                  color: 'var(--primary-foreground)', 
                  padding: '1rem 2rem', 
                  border: 'none', 
                  borderRadius: '0.75rem', 
                  fontWeight: '600', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                <Send size={20} />
                Send Message
              </button>
            </form>

            {/* Response Time Notice */}
            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--muted)', borderRadius: '0.5rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
                I typically respond to messages within 24-48 hours. 
                For urgent matters, please connect via LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;