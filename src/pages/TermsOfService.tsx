import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/StructuredData';

const BASE_URL = 'https://myhealthkey.io';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms of Service | HealthKey - Health Data Ownership Platform"
        description="Read HealthKey's Terms of Service. Understand your rights as a user, our data policies, $HEALTH token rewards, and how we protect your health information."
        canonicalUrl={`${BASE_URL}/terms-of-service`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Terms of Service', url: `${BASE_URL}/terms-of-service` },
        ]}
      />
      
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">Effective Date: 10/01/2025</p>

            <div className="glass-card p-8 space-y-8">
              <p className="text-foreground/90 leading-relaxed">
                Welcome to HealthKey Protocol. By accessing or using our services, you agree to these Terms.
              </p>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">1. User Control & Responsibility</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You own and control your health data at all times.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You are responsible for deciding whether and how to share your data.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">2. No Medical Advice</h2>
                <p className="text-foreground/80">
                  HealthKey is a data management and rewards platform. We do not provide medical advice, diagnosis, or treatment.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">3. Rewards & Tokens</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Where permitted by law, you may receive $HEALTH tokens for data sharing.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Availability of rewards may vary by region, compliance, and eligibility.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Rewards are not guaranteed and may be subject to change.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">4. Prohibited Uses</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You may not use HealthKey to share data unlawfully or in violation of third-party rights.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    You may not attempt to access data without consent or tamper with the platform.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">5. Disclaimer of Liability</h2>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    HealthKey provides technology "as is," without warranties of any kind.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    We are not liable for misuse of data by third parties once you have authorized its release.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">6. Governing Law</h2>
                <p className="text-foreground/80">
                  These Terms are governed by the laws of the State of Florida.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4 text-primary">7. Cookies</h2>
                <p className="text-foreground/80 mb-4">
                  The website uses cookies to help personalize your online experience. By accessing HealthKey Protocol, you agree to use the required cookies.
                </p>
                <p className="text-foreground/80 mb-4">
                  A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
                </p>
                <p className="text-foreground/80">
                  We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You can accept or decline optional Cookies. Some required Cookies are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
                </p>
              </section>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
