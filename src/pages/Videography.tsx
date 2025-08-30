import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video, Play, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Videography = () => {
  const videoProjects = [
    {
      title: 'Brand Commercial',
      duration: '2:30',
      date: '2023',
      description: 'High-energy commercial showcasing innovative tech products',
      category: 'Commercial',
      client: 'TechCorp'
    },
    {
      title: 'Music Video',
      duration: '3:45',
      date: '2023',
      description: 'Artistic music video with creative cinematography and effects',
      category: 'Music Video',
      client: 'Independent Artist'
    },
    {
      title: 'Documentary Short',
      duration: '15:20',
      date: '2022',
      description: 'Compelling documentary about local artisans and their craft',
      category: 'Documentary',
      client: 'Cultural Foundation'
    },
    {
      title: 'Wedding Film',
      duration: '8:15',
      date: '2022',
      description: 'Emotional wedding story capturing special moments',
      category: 'Wedding',
      client: 'Private'
    },
    {
      title: 'Corporate Video',
      duration: '4:10',
      date: '2021',
      description: 'Professional corporate presentation and company overview',
      category: 'Corporate',
      client: 'Media House'
    },
    {
      title: 'Event Highlight',
      duration: '5:30',
      date: '2021',
      description: 'Dynamic event coverage with multiple camera angles',
      category: 'Event',
      client: 'Event Agency'
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
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    Videography Portfolio
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Bringing stories to life through motion and sound
                  </p>
                </div>
              </div>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoProjects.map((project, index) => (
                <Card key={index} className="group overflow-hidden paper-texture hover:shadow-ink transition-all duration-300 cursor-pointer hover:scale-105">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-foreground">{project.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
                      <div className="flex items-center text-xs font-medium text-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {project.duration}
                      </div>
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
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.date}
                      </div>
                      <div className="text-accent font-medium">
                        {project.client}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Video
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="inline-block p-8 paper-texture">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Need Video Production?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  From concept to final cut, let's create compelling video content for your brand or event.
                </p>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
                    Start a Project
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

export default Videography;