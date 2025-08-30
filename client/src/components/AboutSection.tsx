import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-harsh brutal-card brutal-texture overflow-hidden pixelated-hover">
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-6xl font-bold font-mono">
                  <span className="text-center tracking-wider">FACE<br />PICTURE</span>
                </div>
              </div>
              {/* Brutal decorative elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary border-2 border-foreground"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-accent border-2 border-foreground"></div>
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
            
            <div className="bg-gradient-harsh brutal-card brutal-texture p-6">
              <p className="text-lg text-foreground leading-relaxed mb-4 font-mono">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-4 font-mono">
                DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE EU FUGIAT NULLA PARIATUR.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-mono">
                SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT VOLUPTATEM ACCUSANTIUM DOLOREMQUE LAUDANTIUM.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-primary text-primary-foreground font-bold font-mono tracking-wider brutal-card pixelated-hover uppercase"
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;