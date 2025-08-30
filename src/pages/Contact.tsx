import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Get In Touch
              </h1>
              <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to collaborate? Let's discuss your creative vision and bring it to life together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 paper-texture shadow-soft">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Type</Label>
                    <Input id="project" placeholder="Photography, Videography, 3D Art..." />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project..." 
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-ink">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-6 paper-texture shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">hello@portfolio.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 paper-texture shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 paper-texture shadow-soft">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Location</h3>
                      <p className="text-muted-foreground">Creative District, City</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 paper-texture shadow-soft bg-gradient-to-br from-primary/5 to-accent/10">
                  <h3 className="font-bold text-foreground mb-3">Let's Create Together</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Whether you need stunning photography, compelling videography, or immersive 3D art, 
                    I'm here to bring your vision to life with creativity and professionalism.
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-primary/40 rounded-full blur-sm"></div>
                    <div className="w-2 h-2 bg-accent/50 rounded-full blur-sm"></div>
                    <div className="w-4 h-4 bg-primary/30 rounded-full blur-sm"></div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;