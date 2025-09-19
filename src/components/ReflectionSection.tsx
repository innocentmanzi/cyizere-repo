import { BookOpen, Brain, Compass, Rocket } from 'lucide-react';

const ReflectionSection = () => {
  const reflectionTopics = [
    {
      icon: BookOpen,
      title: "Foundation & Early Development",
      content: "Challenges, progress, and an ongoing process of self-discovery have shaped my leadership development at African Leadership University. Since receiving a MasterCard Foundation Scholarship at African Leadership University in May 2023, I've had a strong interest in environmental sustainability and community empowerment. Even yet, I wasn't sure how to put my devotion into action. Over time, I learned to apply both theory and practice, transforming leadership from a concept to a skill based on accountability, resilience, and deliberate action."
    },
    {
      icon: Brain,
      title: "Professional Experience & Learning",
      content: "My first professional experience came in January 2024, when I interned at the Rwanda Revenue Authority (RRA). Working for this institution taught me the value of responsibility, efficiency, and transparency in public service. I learnt how data influences decision-making and how government leadership is linked to systems that impact millions of people. This early experience taught me discipline, attention to detail, and an understanding of how structure fosters good leadership. Based on that foundation, my second internship in January 2025 with the Wetland Protection Network in Gatsibo brought me closer to my goal. There, I worked directly with communities on conservation and awareness projects. Translating technical principles into relatable messaging pushed me to simplify communication while maintaining meaning. More importantly, I saw the power of community-led solutions and discovered how inclusive involvement promotes the adoption of sustainable practices."
    },
    {
      icon: Compass,
      title: "Leadership Models & Personal Growth",
      content: "Several leadership models guided me in these roles. By applying Servant Leadership, I learned to center the needs of community members in the Eastern part of Rwanda, Gatsibo, ensuring their concerns shaped the conservation strategies. Transformational Leadership proved helpful in inspiring others to stay motivated during group assignments and awareness campaigns. Inclusive Leadership, meanwhile, reminded me to value diverse opinions and encourage collaboration, especially when engaging teams with different backgrounds and expertise. Each of these approaches enriched my leadership practice and taught me the importance of adapting style to context. Reflecting on these situations, I realize how much I've developed personally and professionally. I built confidence in working with communities, enhanced my teamwork and facilitation skills, and expanded my research and analytical talents. I also learnt that leadership is more than just task management; it is about developing connections, creating long-lasting processes, and viewing setbacks as learning opportunities. My approach has moved from focusing exclusively on outputs to prioritizing long-term sustainability and the larger processes that drive change."
    },
    {
      icon: Rocket,
      title: "Mission & Future Vision",
      content: "My mission is to strengthen agriculture and environmental stewardship by empowering farmers and communities with sustainable practices that promote long-term resilience. The projects and artifacts I have worked on, such as stakeholder mapping and impact gap analysis, show the practical progress I have made toward this goal. Looking ahead, I aspire to promote permaculture, design scalable sustainable farming initiatives, and advocate for policies that integrate ecological care with food security. The leadership lessons I now carry—empathy, adaptability, and resilience- will be crucial in advancing this mission and creating solutions that are inclusive and enduring. Overall, my journey has been about transformation. Through field experiences, internships, and scholarly study, I've come to see leadership as both a responsibility and an opportunity to make a real difference. I leave this stage of my education without all of the answers, but with the confidence, values, and passion required to continue leading with purpose in the service of sustainable agriculture and environmental protection."
    }
  ];

  return (
    <div className="reflection-page">
      {/* Section Header */}
      <div className="reflection-header">
        <h2 className="reflection-title">
          Leadership <span className="accent-text">Reflection</span>
        </h2>
        <p className="reflection-description">
          A thoughtful examination of my leadership development journey, exploring transformative 
          experiences, theoretical applications, and the evolution of my capabilities and aspirations.
        </p>
      </div>

      {/* Reflection Essay */}
      <div>
        {reflectionTopics.map((topic, index) => (
          <div 
            key={index}
            className="reflection-section"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="reflection-content">
              {/* Topic Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', 
                  borderRadius: '0.75rem', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <topic.icon size={24} style={{ color: 'white' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)' }}>{topic.title}</h3>
              </div>

              {/* Content */}
              <div className="reflection-text">
                <p>
                  {topic.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reflection Summary */}
      <div style={{ marginTop: '4rem', animation: 'fadeIn 0.8s ease-out' }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '1.5rem', 
          padding: '2rem', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          backgroundImage: 'linear-gradient(135deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.05))'
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '1.5rem', textAlign: 'center' }}>
            Key Insights & Future Commitment
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--foreground)', marginBottom: '0.75rem' }}>Core Learnings</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Leadership requires adapting style to context and community needs</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Community-led solutions are more effective than top-down approaches</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Leadership is about developing connections and long-lasting processes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--accent)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Setbacks are learning opportunities that build resilience</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.125rem', fontWeight: '600', color: 'var(--foreground)', marginBottom: '0.75rem' }}>Future Commitments</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Promote permaculture and sustainable farming initiatives</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Advocate for policies integrating ecological care with food security</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Empower farmers and communities with sustainable practices</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <div style={{ width: '0.5rem', height: '0.5rem', background: 'var(--primary)', borderRadius: '50%', marginTop: '0.5rem', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--muted-foreground)' }}>Lead with empathy, adaptability, and resilience in service of environmental protection</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--muted)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
            <blockquote style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontStyle: 'italic', color: 'var(--foreground)', marginBottom: '1rem' }}>
                "Leadership is both a responsibility and an opportunity to make a real difference. 
                It's about empowering communities and creating sustainable solutions that endure."
              </p>
              <footer style={{ color: 'var(--muted-foreground)' }}>
                Personal Leadership Philosophy - Elie Cyizere
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReflectionSection;