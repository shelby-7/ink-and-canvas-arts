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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Featured Works
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my creative portfolio across different mediums and disciplines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={category.path}>
                <Card className="group relative overflow-hidden h-80 paper-texture hover:shadow-ink transition-all duration-500 cursor-pointer hover:scale-105">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-80 transition-opacity`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mb-6 group-hover:border-primary/70 transition-colors">
                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {category.description}
                      </p>
                      
                      <div className="text-sm text-accent font-medium">
                        {category.projects} Projects
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="self-start group-hover:bg-primary/10 transition-colors">
                      View Portfolio
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full blur-sm group-hover:bg-primary/50 transition-colors"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-accent/40 rounded-full blur-sm"></div>
                </Card>
              </Link>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/works">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
              View All Works
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;