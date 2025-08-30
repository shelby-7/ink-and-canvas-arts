import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Camera, Video, Palette, ArrowRight } from 'lucide-react';

const WorksSection = () => {
  const workCategories = [
    {
      title: 'Photography',
      description: 'Capturing moments and telling stories through the lens',
      icon: Camera,
      path: '/works/photography',
      color: 'from-primary/20 to-accent/20',
      projects: 24
    },
    {
      title: 'Videography',
      description: 'Bringing narratives to life through motion and sound',
      icon: Video,
      path: '/works/videography',
      color: 'from-accent/20 to-primary/20',
      projects: 18
    },
    {
      title: '3D Art',
      description: 'Creating immersive digital worlds and experiences',
      icon: Palette,
      path: '/works/3d-art',
      color: 'from-primary/15 to-accent/25',
      projects: 12
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-mono tracking-wider uppercase">
            FEATURED WORKS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono uppercase tracking-wide">
            EXPLORE MY CREATIVE PORTFOLIO ACROSS DIFFERENT MEDIUMS AND DISCIPLINES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={category.path}>
                <div className="group relative aspect-square p-6 cursor-pointer brutal-card brutal-texture pixelated-hover">
                  {/* Content */}
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="w-16 h-16 bg-gradient-harsh border-2 border-foreground flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors font-mono tracking-wider uppercase">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-tight mb-4 font-mono text-sm">
                        {category.description.toUpperCase()}
                      </p>
                      
                      <div className="text-sm text-accent font-bold font-mono tracking-wider uppercase">
                        {category.projects} PROJECTS
                      </div>
                    </div>
                    
                    <div className="inline-block px-4 py-2 bg-primary text-primary-foreground font-bold font-mono tracking-wider brutal-card pixelated-hover uppercase text-sm">
                      VIEW PORTFOLIO
                    </div>
                  </div>
                  
                  {/* Brutal decorative element */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-accent border border-foreground group-hover:bg-primary transition-colors"></div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/works">
            <div className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold font-mono tracking-wider brutal-card pixelated-hover uppercase">
              VIEW ALL WORKS
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;