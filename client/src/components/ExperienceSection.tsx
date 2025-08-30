import { Card } from '@/components/ui/card';

const ExperienceSection = () => {
  const experiences = [
    {
      year: '2020',
      title: 'Started Photography',
      company: 'Freelance',
      description: 'Began my journey in photography, learning the fundamentals and developing my artistic eye.',
      type: 'start'
    },
    {
      year: '2021',
      title: 'Video Production',
      company: 'Freelance',
      description: 'STARTED EDITING MONTAGES ON MY MOMS PHONE FOR YOUTUBE LOL',
      type: 'milestone'
    },
    {
      year: '2022',
      title: 'LA DÉMOCRATIE',
      company: 'Production House',
      description: 'STARTED A PRODUCTION HOUSE WITH TWO OF MY FRIENDS IN COLLEGE, MAKING AWARD WINNING SHORTFILMS',
      type: 'milestone'
    },
    {
      year: '2023',
      title: '3D Artist',
      company: 'Media Company',
      description: 'TRANSITIONED INTO 3D ART AND VISUALIZATION, CREATING STUNNING DIGITAL ARTWORK',
      type: 'milestone'
    },
    {
      year: '2023',
      title: 'Media Lead',
      company: 'Media Head',
      description: 'BECAME THE LEAD OF GDSC IIITN, A CLUB IN COLLEGE, WHERE I LED THE TEAM ASSIGNED TO ME TO COMPLETE 3 COMPLETE COLLEGE EVENTS OVER THE COURSE OF A YEAR',
      type: 'current'
    },
    {
      year: '2024',
      title: 'SMMA Video editor',
      company: 'Video editing intern',
      description: 'WORKED FOR WASSUP BHOPAL, AN INSTAGRAM PAGE WITH OVER 150K FOLLOWERS, HELPED THEM SCORE PARTNERSHIPS AND LOADS OF VIEWS AND LIKES OVER THE COURSE OF A YEAR',
      type: 'milestone'
    },
    {
      year: '2025+',
      title: 'Future Goals',
      company: 'Expanding Horizons',
      description: 'PLANNING TO EXPLORE AI-ASSISTED CREATIVE WORKFLOWS AND INTERNATIONAL COLLABORATIONS.',
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
                  <div className="group relative aspect-auto p-8 cursor-pointer brutal-card brutal-texture pixelated-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold font-mono tracking-wider text-foreground">
                        {exp.year}
                      </span>
                      <span className="px-4 py-2 text-sm font-mono uppercase bg-accent border border-foreground text-accent-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 font-mono tracking-wider uppercase">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-mono text-base">
                      {exp.description.toUpperCase()}
                    </p>
                    
                    {/* Brutal decorative element */}
                    <div className="absolute top-3 right-3 w-4 h-4 bg-accent border border-foreground group-hover:bg-primary transition-colors"></div>
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