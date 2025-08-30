import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Photography = () => {
  const photoProjects = [
    {
      title: 'Urban Portraits',
      date: '2023',
      location: 'City Center',
      description: 'A series capturing the essence of urban life through intimate portraits',
      category: 'Portrait'
    },
    {
      title: 'Nature\'s Canvas',
      date: '2023',
      location: 'National Park',
      description: 'Landscape photography showcasing natural beauty and wilderness',
      category: 'Landscape'
    },
    {
      title: 'Product Showcase',
      date: '2022',
      location: 'Studio',
      description: 'Commercial photography for luxury brands and products',
      category: 'Commercial'
    },
    {
      title: 'Wedding Memories',
      date: '2022',
      location: 'Various Venues',
      description: 'Capturing love stories and precious moments',
      category: 'Wedding'
    },
    {
      title: 'Street Stories',
      date: '2021',
      location: 'Downtown',
      description: 'Documentary-style photography of everyday life',
      category: 'Street'
    },
    {
      title: 'Fashion Forward',
      date: '2021',
      location: 'Studio & Outdoors',
      description: 'High-fashion photography with creative styling',
      category: 'Fashion'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <Link to="/works">
                <Button variant="ghost" className="mb-6 hover:bg-accent/30">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Works
                </Button>
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mr-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    Photography Portfolio
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Capturing moments, telling stories through the lens
                  </p>
                </div>
              </div>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoProjects.map((project, index) => (
                <Card key={index} className="group overflow-hidden paper-texture hover:shadow-ink transition-all duration-300 cursor-pointer hover:scale-105">
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-primary/30" />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-foreground">{project.category}</span>
                    </div>
                    {/* Decorative spots */}
                    <div className="absolute top-6 left-6 w-3 h-3 bg-accent/40 rounded-full blur-sm"></div>
                    <div className="absolute bottom-8 right-8 w-2 h-2 bg-primary/30 rounded-full blur-sm"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="inline-block p-8 paper-texture">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in a Photo Session?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let's create beautiful memories together. Contact me to discuss your photography needs.
                </p>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
                    Get in Touch
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Photography;