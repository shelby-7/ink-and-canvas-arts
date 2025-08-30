import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { ArrowLeft, Calendar, X, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import bmwYamahaRender from '@assets/3d_renders/bmw_yamaha_render.jpg';
import ferrariChandelier from '@assets/3d_renders/ferrari_chandelier.jpg';
import porscheFeudalJapan from '@assets/3d_renders/porsche_feudal_japan.jpg';
import mercedesSpace from '@assets/3d_renders/mercedes_space.jpg';
import bmwYamahaThumbnail from '@assets/3d_renders/bmw_yamaha_thumbnail.jpg';
import ferrariChandelierThumbnail from '@assets/3d_renders/ferrari_chandelier_thumbnail.jpg';
import porscheFeudalThumbnail from '@assets/3d_renders/porsche_feudal_thumbnail.jpg';
import mercedesSpaceThumbnail from '@assets/3d_renders/mercedes_space_thumbnail.jpg';

const ThreeDArt = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const artProjects = [
    {
      title: 'BMW & Yamaha 3D Render',
      date: '2024',
      software: 'Blender',
      description: 'High-quality 3D renders showcasing automotive and motorcycle design',
      image: bmwYamahaRender,
      thumbnail: bmwYamahaThumbnail,
      link: 'https://drive.google.com/file/d/1PzANLTOJiqmh872DfuxZ1G3M5Bwa9SGJ/view?usp=drive_link'
    },
    {
      title: 'Ferrari Chandelier',
      date: '2024',
      software: 'Cinema 4D',
      description: 'A 3D model of Ferrari reimagined as an elegant chandelier in a home setting',
      image: ferrariChandelier,
      thumbnail: ferrariChandelierThumbnail,
      link: 'https://drive.google.com/file/d/1DIwd845OkcfNsZMngDd6bvJOo2fpNGXC/view?usp=drive_link'
    },
    {
      title: 'Porsche in Feudal Japan',
      date: '2024',
      software: 'Blender',
      description: 'Porsche render set in the atmospheric environment of feudal Japan',
      image: porscheFeudalJapan,
      thumbnail: porscheFeudalThumbnail,
      link: 'https://drive.google.com/file/d/1g7gX8SDcuBI5plHAVhFXTO8MqX28EPtq/view?usp=drive_link'
    },
    {
      title: 'Mercedes in Space',
      date: '2024',
      software: 'KeyShot',
      description: 'A Mercedes reimagined in the vastness of space with cosmic elements',
      image: mercedesSpace,
      thumbnail: mercedesSpaceThumbnail,
      link: 'https://drive.google.com/file/d/1PHqYnk1aBLmopdydRYfmnHVlwGbsmsqo/view?usp=drive_link'
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artProjects.map((project, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Card className="group overflow-hidden paper-texture hover:shadow-ink transition-all duration-300 cursor-pointer hover:scale-105">
                      {/* 3D Art Preview */}
                      <div className="aspect-square bg-gradient-to-br from-primary/15 to-accent/25 relative overflow-hidden">
                        <img 
                          src={project.thumbnail} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
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
                        
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.date}
                          </div>
                          <div className="text-accent font-medium">
                            {project.software}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-background border-2 border-foreground">
                    <DialogTitle className="sr-only">{project.title}</DialogTitle>
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-auto max-h-[70vh] object-contain"
                      />
                      <div className="p-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2 font-mono tracking-wider uppercase">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.date}
                          </div>
                          <div className="text-accent font-medium">
                            {project.software}
                          </div>
                        </div>
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
                              View Full Resolution
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
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