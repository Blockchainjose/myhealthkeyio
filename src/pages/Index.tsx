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
import { SEOHead } from '@/components/SEOHead';
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData';

const BASE_URL = 'https://myhealthkey.io';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="HealthKey - Own Your Health Data | Secure Blockchain Health Platform"
        description="Take control of your personal health information with HealthKey. Own, control, and benefit from your health data through secure blockchain technology. Join the Web3 health revolution."
        canonicalUrl={BASE_URL}
      />
      <OrganizationSchema
        name="HealthKey"
        url={BASE_URL}
        logo="https://storage.googleapis.com/gpt-engineer-file-uploads/XgUFzih4Xrhjpq4kYIcgapwLciy1/uploads/1769133142361-HealthKey app logo (1024 x 1024 px).png"
        description="HealthKey is a blockchain-powered platform that gives you complete ownership and control over your personal health data."
        sameAs={[
          'https://x.com/HealthKeyPro',
          'https://github.com/Blockchainjose/Healthkey-Protocol',
        ]}
      />
      <WebsiteSchema url={BASE_URL} name="HealthKey" />
      
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
