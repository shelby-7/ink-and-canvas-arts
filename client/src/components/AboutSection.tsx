import { Card } from '@/components/ui/card';
import profileImage from '@assets/IMG_8505_1756588754250.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-harsh brutal-card brutal-texture overflow-hidden pixelated-hover">
                <img 
                  src={profileImage} 
                  alt="Aditya Bagde - The_Maskedgrapher"
                  className="w-full h-full object-cover pixelated-profile"
                />
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
                "I make dreams real and reality dreams"
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-4 font-mono">
                Hey, I am Aditya Bagde, Your Photographer, Videographer and 3D artist, all in one, i keep the power of my past 6 years of creative work in the palm of your hand, salute to whoever gets that reference, i can color grade like you can only see in your dreams and make 3d scenes feel so real they might as well be your background.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed font-mono">
                "lets tell your next story together", sounds fun? contact me below
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