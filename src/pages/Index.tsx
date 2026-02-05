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
import { OrganizationSchema, WebsiteSchema, SoftwareApplicationSchema } from '@/components/StructuredData';

const BASE_URL = 'https://myhealthkey.io';
const OG_IMAGE = 'https://myhealthkey.io/og-image.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEOHead
        title="HealthKey Protocol - Own & Monetize Your Health Data on Solana"
        description="Take control of your health data with HealthKey. Own, monetize, and share your wearable data, lab results, and medical records on Solana blockchain. Join the Web3 health revolution."
        canonicalUrl={BASE_URL}
        ogImage={OG_IMAGE}
        keywords="health data ownership, Web3 health, Solana health data, wearable data monetization, health data wallet, blockchain health records, $HEALTH token, AI health companion"
      />
      <OrganizationSchema
        name="HealthKey Protocol"
        url={BASE_URL}
        logo={`${BASE_URL}/healthkey-logo.png`}
        description="HealthKey Protocol is a Solana-powered platform that gives you complete ownership, control, and monetization of your personal health data."
        sameAs={[
          'https://x.com/HealthKeyPro',
          'https://github.com/Blockchainjose/Healthkey-Protocol',
        ]}
      />
      <WebsiteSchema url={BASE_URL} name="HealthKey Protocol" />
      <SoftwareApplicationSchema
        name="HealthKey"
        description="Your personal health data wallet. Own, control, and monetize your wearable data, lab results, and medical records on Solana blockchain."
        url={BASE_URL}
        applicationCategory="HealthApplication"
      />
      
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
