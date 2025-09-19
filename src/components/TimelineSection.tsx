import { Calendar, Users, Trophy, Lightbulb, Target, Star } from 'lucide-react';

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2023",
      title: "University Journey Begins",
      description: "Started Bachelor of science in Entrepreneurial Leadership, immediately got involved in student organizations and leadership development programs.",
      icon: Star,
      category: "Academic",
      achievements: ["Joined Student Council", "Enrolled in Leadership Program", "Academic Excellence Scholarship"]
    },
    {
      year: "2023",
      title: "First Leadership Challenge",
      description: "Led a campus-wide sustainability initiative that reduced waste by 30% and engaged over 500 students in environmental awareness activities.",
      icon: Target,
      category: "Environmental Leadership",
      achievements: ["500+ Student Engagement", "30% Waste Reduction", "Community Service Award"]
    },
    {
      year: "2024",
      title: "Innovation & Entrepreneurship",
      description: "Developed and pitched a social enterprise proposal that won the university business competition and secured seed funding for implementation.",
      icon: Lightbulb,
      category: "Entrepreneurship",
      achievements: ["Business Competition Winner", "Seed Funding Secured", "Team Leadership"]
    },
    {
      year: "2024",
      title: "Professional Experience",
      description: "Completed transformative internship at Innovation Hub, managing multiple client projects and contributing to strategic business development.",
      icon: Users,
      category: "Professional Growth",
      achievements: ["3 Projects Managed", "25% Process Improvement", "Client Relationship Building"]
    },
    {
      year: "2024",
      title: "Leadership Excellence Recognition",
      description: "Elected as Student Leadership Coordinator, overseeing major campus initiatives and representing student voice in university governance.",
      icon: Trophy,
      category: "Leadership Achievement",
      achievements: ["Student Council Election", "Cross-functional Team Leadership", "Policy Influence"]
    },
    {
      year: "2025",
      title: "Vision for Future",
      description: "Developing comprehensive post-graduation strategy focused on social entrepreneurship and transformative business leadership in emerging markets.",
      icon: Calendar,
      category: "Future Planning",
      achievements: ["Strategic Planning", "Network Development", "Skill Enhancement"]
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Academic': 'bg-blue-500',
      'Environmental Leadership': 'bg-green-500',
      'Entrepreneurship': 'bg-purple-500',
      'Professional Growth': 'bg-orange-500',
      'Leadership Achievement': 'bg-accent',
      'Future Planning': 'bg-primary'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
      {/* Section Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem', animation: 'fadeIn 0.8s ease-out' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '1.5rem' }}>
          Leadership <span className="accent-text">Journey</span>
        </h2>
        <div style={{ width: '6rem', height: '1px', background: 'var(--accent)', margin: '0 auto 2rem' }}></div>
        <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto' }}>
          A chronological showcase of transformative experiences, challenges overcome, 
          and milestones achieved in my entrepreneurial leadership development.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Timeline Line */}
        <div style={{ 
          position: 'absolute', 
          left: '2rem', 
          top: 0, 
          bottom: 0, 
          width: '4px', 
          background: 'linear-gradient(to bottom, var(--primary), var(--accent), var(--primary))',
          borderRadius: '2px'
        }}></div>

        {/* Timeline Events */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {timelineEvents.map((event, index) => (
            <div 
              key={index}
              style={{ 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center',
                animation: 'slideUp 0.8s ease-out',
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '1.5rem', 
                width: '1rem', 
                height: '1rem', 
                background: 'var(--accent)', 
                borderRadius: '50%', 
                border: '4px solid var(--background)', 
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                zIndex: 10
              }}></div>

              {/* Content Card */}
              <div style={{ width: '100%', marginLeft: '4rem' }}>
                <div style={{ 
                  background: 'white', 
                  borderRadius: '1.5rem', 
                  padding: '2rem', 
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease'
                }}>
                  {/* Year Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      padding: '0.5rem 1rem', 
                      background: 'linear-gradient(135deg, var(--primary), var(--primary-light))', 
                      color: 'var(--primary-foreground)', 
                      borderRadius: '9999px', 
                      fontSize: '0.875rem', 
                      fontWeight: 'bold' 
                    }}>
                      {event.year}
                    </span>
                    <span style={{ 
                      padding: '0.25rem 0.75rem', 
                      background: getCategoryColor(event.category).replace('bg-', 'var(--') + ')',
                      color: 'white', 
                      borderRadius: '9999px', 
                      fontSize: '0.75rem', 
                      fontWeight: '500' 
                    }}>
                      {event.category}
                    </span>
                  </div>

                  {/* Icon and Title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      background: 'linear-gradient(135deg, var(--accent), var(--accent-light))', 
                      borderRadius: '0.75rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <event.icon size={24} style={{ color: 'var(--accent-foreground)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--foreground)' }}>{event.title}</h3>
                  </div>

                  {/* Description */}
                  <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    {event.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--foreground)', marginBottom: '0.5rem' }}>Key Achievements:</h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {event.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          style={{ 
                            padding: '0.25rem 0.75rem', 
                            background: 'rgba(0, 0, 0, 0.05)', 
                            color: 'var(--primary)', 
                            borderRadius: '9999px', 
                            fontSize: '0.875rem' 
                          }}
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Summary */}
      <div style={{ marginTop: '4rem', textAlign: 'center', animation: 'fadeIn 0.8s ease-out' }}>
        <div style={{ 
          background: 'white', 
          borderRadius: '1.5rem', 
          padding: '2rem', 
          maxWidth: '800px', 
          margin: '0 auto', 
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' 
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', marginBottom: '1rem' }}>
            Continuous Growth & Learning
          </h3>
          <p style={{ color: 'var(--muted-foreground)', lineHeight: '1.7' }}>
            Each milestone represents not just an achievement, but a learning opportunity 
            that has shaped my understanding of leadership, innovation, and social impact. 
            This journey continues as I work toward creating meaningful change in the business world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimelineSection;