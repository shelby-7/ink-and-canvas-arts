import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import SoftwareSection from '@/components/SoftwareSection';
import ExperienceSection from '@/components/ExperienceSection';
import WorksSection from '@/components/WorksSection';
import ClientsSection from '@/components/ClientsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <AboutSection />
        <ExperienceSection />
        <WorksSection />
        <ClientsSection />
        <SoftwareSection />
      </main>
    </div>
  );
};

export default Index;
