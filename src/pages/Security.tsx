import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Database, Ban, CheckCircle } from 'lucide-react';

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your Data. Your Rules. Our Security Commitment.
            </p>

            <div className="glass-card p-8 mb-8">
              <p className="text-foreground/90 leading-relaxed text-lg">
                At HealthKey, we implement privacy by design. Our security framework ensures your health data is encrypted, user-controlled, and never exposed without consent.
              </p>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">How We Protect You</h2>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <Lock className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">End-to-End Encryption</h3>
                      <p className="text-foreground/70">All health data is encrypted in transit and at rest.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <Database className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Off-Chain Storage</h3>
                      <p className="text-foreground/70">Sensitive data is never stored directly on the blockchain.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <Shield className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">On-Chain Ledger</h3>
                      <p className="text-foreground/70">The blockchain records only permissions and revocations — not personal data.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5">
                    <Ban className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Revocation by Design</h3>
                      <p className="text-foreground/70">You can terminate access instantly. Every action is logged and auditable.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Ban className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">Zero Data Selling Policy</h2>
                </div>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    We do not sell, trade, or monetize your health data.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    Data is only shared when you authorize it, for the specific purposes you approve.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-card p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-semibold">Compliance & Standards</h2>
                </div>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    We align with HIPAA and GDPR best practices.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    We regularly audit our systems for vulnerabilities.
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    We enforce strict partner requirements: No consent = No access.
                  </li>
                </ul>
              </motion.div>

              <div className="glass-card p-6 text-center">
                <p className="text-foreground/80">
                  Questions about security? Contact us at:{' '}
                  <a href="mailto:contact@myhealthkey.io" className="text-primary hover:underline">
                    contact@myhealthkey.io
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Security;
