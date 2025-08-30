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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Experience Timeline
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent rounded-full hidden md:block">
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-primary/60 to-accent"></div>
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-primary/60 to-accent"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <Card className={`p-6 paper-texture shadow-soft hover:shadow-ink transition-all duration-300 ${
                    exp.type === 'current' ? 'border-primary/50 bg-primary/5' : 
                    exp.type === 'future' ? 'border-accent/50 bg-accent/10' : ''
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-2xl font-bold ${
                        exp.type === 'current' ? 'text-primary' : 
                        exp.type === 'future' ? 'text-accent' : 'text-muted-foreground'
                      }`}>
                        {exp.year}
                      </span>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        exp.type === 'current' ? 'bg-primary/20 text-primary' :
                        exp.type === 'future' ? 'bg-accent/20 text-accent' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div className={`w-6 h-6 rounded-full border-4 border-background shadow-ink ${
                    exp.type === 'current' ? 'bg-primary' :
                    exp.type === 'future' ? 'bg-accent' :
                    'bg-muted'
                  }`}>
                    {exp.type === 'current' && (
                      <div className="w-full h-full rounded-full bg-primary animate-pulse"></div>
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