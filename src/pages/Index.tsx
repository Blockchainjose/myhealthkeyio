import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { AskHealthKeySection } from '@/components/AskHealthKeySection';
import { RewardsSection } from '@/components/RewardsSection';
import { WaitlistSection } from '@/components/WaitlistSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AskHealthKeySection />
        <RewardsSection />
        <WaitlistSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
