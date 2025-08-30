import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      year: '2019',
      title: 'Started Photography',
      company: 'Freelance',
      description: 'Began my journey in photography, learning the fundamentals and developing my artistic eye.',
      type: 'start'
    },
    {
      year: '2020',
      title: 'Video Production',
      company: 'Creative Studio',
      description: 'Expanded into video production, working with local businesses and events.',
      type: 'milestone'
    },
    {
      year: '2021',
      title: '3D Artist',
      company: 'Design Agency',
      description: 'Transitioned into 3D art and visualization, creating stunning digital artwork.',
      type: 'milestone'
    },
    {
      year: '2022',
      title: 'Senior Creative',
      company: 'Media Company',
      description: 'Led creative projects combining photography, videography, and 3D art.',
      type: 'milestone'
    },
    {
      year: '2023',
      title: 'Art Director',
      company: 'Innovation Lab',
      description: 'Currently directing visual campaigns and mentoring upcoming artists.',
      type: 'current'
    },
    {
      year: '2024',
      title: 'Future Goals',
      company: 'Expanding Horizons',
      description: 'Planning to explore AI-assisted creative workflows and international collaborations.',
      type: 'future'
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-mono tracking-wider uppercase">
            EXPERIENCE TIMELINE
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="relative">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <div className="group relative aspect-auto p-6 cursor-pointer brutal-card brutal-texture pixelated-hover">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold font-mono tracking-wider text-foreground">
                        {exp.year}
                      </span>
                      <span className="px-3 py-1 text-xs font-mono uppercase bg-accent border border-foreground text-accent-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 font-mono tracking-wider uppercase">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground leading-tight font-mono text-sm">
                      {exp.description.toUpperCase()}
                    </p>
                    
                    {/* Brutal decorative element */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-accent border border-foreground group-hover:bg-primary transition-colors"></div>
                  </div>
                </div>

                {/* Timeline dot - fixed positioning */}
                <div className="hidden md:flex w-2/12 justify-center items-center relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>
                  <div className={`relative z-10 w-6 h-6 border-4 border-foreground ${
                    exp.type === 'current' ? 'bg-primary' :
                    exp.type === 'future' ? 'bg-accent' :
                    'bg-muted'
                  }`}>
                    {exp.type === 'current' && (
                      <div className="w-full h-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;