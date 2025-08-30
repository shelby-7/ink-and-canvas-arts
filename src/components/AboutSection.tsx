import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-paper border-4 border-accent shadow-ink overflow-hidden">
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-6xl font-light">
                  <span className="text-center">Face<br />Picture</span>
                </div>
              </div>
              {/* Decorative ink spots */}
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/30 rounded-full blur-sm"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                About Me
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full"></div>
            </div>
            
            <Card className="p-6 paper-texture">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </Card>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-ink"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;