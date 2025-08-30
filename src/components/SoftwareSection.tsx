import { Card } from '@/components/ui/card';
import { 
  Camera, 
  Video, 
  Palette, 
  Monitor, 
  Edit3, 
  Layers,
  Zap,
  Aperture,
  Film,
  Brush
} from 'lucide-react';

const SoftwareSection = () => {
  const software = [
    { name: 'Photoshop', icon: Camera, category: 'Photo' },
    { name: 'Lightroom', icon: Aperture, category: 'Photo' },
    { name: 'Premiere Pro', icon: Video, category: 'Video' },
    { name: 'After Effects', icon: Film, category: 'Video' },
    { name: 'Cinema 4D', icon: Layers, category: '3D' },
    { name: 'Blender', icon: Monitor, category: '3D' },
    { name: 'Illustrator', icon: Edit3, category: 'Design' },
    { name: 'Figma', icon: Palette, category: 'Design' },
    { name: 'DaVinci', icon: Zap, category: 'Video' },
    { name: 'Procreate', icon: Brush, category: 'Art' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Software & Tools
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {software.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={index} 
                className="group relative aspect-square p-6 hover:shadow-ink transition-all duration-300 cursor-pointer paper-texture hover:scale-105"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center group-hover:border-primary/70 transition-colors">
                    <IconComponent className="w-8 h-8 text-primary group-hover:text-primary/80" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.category}
                    </p>
                  </div>
                </div>
                
                {/* Decorative spot */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-accent/40 rounded-full blur-sm group-hover:bg-primary/40 transition-colors"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;