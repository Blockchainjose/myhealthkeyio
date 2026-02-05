import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const BASE_URL = 'https://myhealthkey.io';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy - HealthKey Protocol | Your Data Rights"
        description="Learn how HealthKey Protocol protects your health data privacy. We never sell your data. You own and control your personal health information on the blockchain."
        canonicalUrl={`${BASE_URL}/privacy-policy`}
        keywords="health data privacy, HIPAA compliant, data protection, blockchain privacy, health records security"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Privacy Policy', url: `${BASE_URL}/privacy-policy` },
        ]}
      />
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-2">Effective Date: 10/01/2025</p>
            <p className="text-muted-foreground mb-8">Last Updated: October 2025</p>

            <div className="glass-card p-8 space-y-8">
              <p className="text-foreground/90 leading-relaxed">HealthKey Protocol website is owned by HealthK Labs, LLC, at HealthKey Protocol ("HealthKey," "we," "our," "us"). Your privacy is our highest priority. We believe that you own and control your health data. Our role is to provide the technology that enables you to decide when, how, and with whom your data is shared.</p>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">1. Data We Do Not Collect</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    We do not collect or sell your personal health data.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    We do not track your activity across apps or websites.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">HealthKey Protocol website is owned by HealthKey Labs, LLC, at HealthKey Protocol ("HealthKey," "we," "our," "us"). Your privacy is our highest priority. We believe that you own and control your health data. Our role is to provide the technology that enables you to decide when, how, and with whom your data is shared.</span>
                    We do not store unencrypted personal information on our servers.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">2. Data Storage & Encryption</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Health data linked through wearables, apps, or other sources is encrypted and stored securely.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    The blockchain is used only as a ledger of permissions (recording that consent was granted or revoked).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    No raw health data is ever visible on the blockchain.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">3. Your Control</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You choose which data to share and for what purpose.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You can revoke access at any time.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    When revoked, access is immediately terminated and logged on-chain.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">4. Third Parties</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    No third party can access your data without your explicit, prior authorization.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Approved research or service partners receive only the data you consent to share.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">5. Compliance</h2>
                <p className="text-foreground/80">
                  We align our practices with HIPAA principles and applicable global privacy laws (e.g., GDPR), even where not strictly required.
                </p>
              </section>

              <section className="pt-4 border-t border-white/10">
                <p className="text-foreground/80">
                  Questions? Contact us at:{' '}
                  <a href="mailto:contact@healthkeyprotocol.com" className="text-primary hover:underline">
                    contact@healthkeyprotocol.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PrivacyPolicy;