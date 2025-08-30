import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Palette, Eye, Calendar, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThreeDArt = () => {
  const artProjects = [
    {
      title: 'Abstract Dimensions',
      date: '2023',
      software: 'Blender',
      description: 'Exploration of geometric forms and color in virtual space',
      category: 'Abstract Art',
      complexity: 'High'
    },
    {
      title: 'Character Design',
      date: '2023',
      software: 'Cinema 4D',
      description: 'Stylized character models for animation and games',
      category: 'Character',
      complexity: 'High'
    },
    {
      title: 'Product Visualization',
      date: '2022',
      software: 'KeyShot',
      description: 'Photorealistic rendering of consumer products',
      category: 'Commercial',
      complexity: 'Medium'
    },
    {
      title: 'Architectural Space',
      date: '2022',
      software: 'SketchUp',
      description: 'Interior and exterior architectural visualizations',
      category: 'Architecture',
      complexity: 'High'
    },
    {
      title: 'Digital Sculpture',
      date: '2021',
      software: 'ZBrush',
      description: 'Organic forms and detailed digital sculptures',
      category: 'Sculpture',
      complexity: 'High'
    },
    {
      title: 'Motion Graphics',
      date: '2021',
      software: 'After Effects',
      description: '3D animated elements for video projects',
      category: 'Animation',
      complexity: 'Medium'
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
                  <Palette className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                    3D Art Portfolio
                  </h1>
                  <p className="text-lg text-muted-foreground mt-2">
                    Creating immersive digital worlds and experiences
                  </p>
                </div>
              </div>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artProjects.map((project, index) => (
                <Card key={index} className="group overflow-hidden paper-texture hover:shadow-ink transition-all duration-300 cursor-pointer hover:scale-105">
                  {/* 3D Art Preview */}
                  <div className="aspect-square bg-gradient-to-br from-primary/15 to-accent/25 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Palette className="w-20 h-20 text-primary/30" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-accent/30 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
                      <span className="text-xs font-medium text-foreground">{project.category}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full">
                      <div className="flex items-center text-xs font-medium text-foreground">
                        <Layers className="w-3 h-3 mr-1" />
                        {project.complexity}
                      </div>
                    </div>
                    {/* Decorative 3D elements */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-accent/40 rounded-full blur-sm transform rotate-45"></div>
                    <div className="absolute bottom-12 right-12 w-3 h-3 bg-primary/30 rounded-full blur-sm"></div>
                    <div className="absolute top-1/2 right-8 w-2 h-2 bg-accent/50 rounded-full blur-sm"></div>
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
                        {project.software}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full group-hover:bg-primary/10 transition-colors">
                      <Eye className="w-4 h-4 mr-2" />
                      View 3D Model
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to Action */}
            <div className="text-center mt-16">
              <Card className="inline-block p-8 paper-texture">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Interested in 3D Art?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  From concept design to final renders, let's bring your ideas to life in three dimensions.
                </p>
                <Link to="/contact">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
                    Commission Artwork
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

export default ThreeDArt;