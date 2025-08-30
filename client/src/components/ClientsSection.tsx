import { Card } from '@/components/ui/card';

const ClientsSection = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'Creative Studio', logo: 'CS' },
    { name: 'Brand Agency', logo: 'BA' },
    { name: 'Media House', logo: 'MH' },
    { name: 'Design Lab', logo: 'DL' },
    { name: 'Innovation Co', logo: 'IC' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Clients
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Collaborating with amazing brands and creative minds
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <Card className="group w-20 h-20 rounded-full paper-texture hover:shadow-ink transition-all duration-300 cursor-pointer hover:scale-110">
                <div className="w-full h-full rounded-full bg-gradient-paper border-2 border-accent/50 flex items-center justify-center group-hover:border-primary/70 transition-colors">
                  <span className="text-sm font-bold text-primary group-hover:text-primary/80">
                    {client.logo}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;