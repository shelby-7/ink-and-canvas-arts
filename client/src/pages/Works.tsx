import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Camera, Video, Palette, ArrowRight } from 'lucide-react';

const Works = () => {
  const workCategories = [
    {
      title: 'Photography',
      description: 'Portrait, landscape, and commercial photography showcasing diverse styles and techniques',
      icon: Camera,
      path: '/works/photography',
      color: 'from-primary/20 to-accent/20',
      projects: 24,
      featured: ['Wedding Photography', 'Product Shots', 'Nature Portraits']
    },
    {
      title: 'Videography',
      description: 'Music videos, commercials, and documentary work with cinematic storytelling',
      icon: Video,
      path: '/works/videography',
      color: 'from-accent/20 to-primary/20',
      projects: 18,
      featured: ['Music Videos', 'Brand Commercials', 'Event Coverage']
    },
    {
      title: '3D Art',
      description: 'Digital sculptures, architectural visualizations, and abstract art pieces',
      icon: Palette,
      path: '/works/3d-art',
      color: 'from-primary/15 to-accent/25',
      projects: 12,
      featured: ['Character Design', 'Product Visualization', 'Abstract Art']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                My Works
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive showcase of my creative journey across photography, videography, and 3D art. 
                Each project represents a unique story and artistic vision.
              </p>
            </div>

            <div className="space-y-12">
              {workCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card key={index} className="overflow-hidden paper-texture hover:shadow-ink transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mr-4">
                            <IconComponent className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <h2 className="text-3xl font-bold text-foreground">
                              {category.title}
                            </h2>
                            <span className="text-accent font-medium">
                              {category.projects} Projects
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                          {category.description}
                        </p>
                        
                        <div className="mb-8">
                          <h3 className="font-semibold text-foreground mb-3">Featured Work:</h3>
                          <ul className="space-y-2">
                            {category.featured.map((item, i) => (
                              <li key={i} className="text-muted-foreground flex items-center">
                                <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <Link to={category.path}>
                          <div className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-ink group">
                            View Portfolio
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </div>
                      
                      {/* Visual Side */}
                      <div className={`relative bg-gradient-to-br ${category.color} min-h-[300px] lg:min-h-[400px]`}>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <IconComponent className="w-32 h-32 text-primary/20" />
                        </div>
                        {/* Decorative spots */}
                        <div className="absolute top-6 right-6 w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
                        <div className="absolute bottom-8 left-8 w-6 h-6 bg-accent/40 rounded-full blur-sm"></div>
                        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary/25 rounded-full blur-sm"></div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Works;