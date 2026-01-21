import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wallet, Share, Coins } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Wallet,
    title: 'Connect',
    description: 'Create your secure HealthKey wallet and link your health data sources. Simple setup takes just minutes.',
    color: 'from-primary to-cyan-400',
  },
  {
    number: '02',
    icon: Share,
    title: 'Consent & Share',
    description: 'Choose exactly what data you want to share, with whom, and for how long. Complete granular control.',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    number: '03',
    icon: Coins,
    title: 'Reward & Control',
    description: 'Earn $HEALTH tokens for your contributions. Monitor access, revoke permissions, and stay in control.',
    color: 'from-blue-500 to-primary',
  },
];

export const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            How It Works
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Three Simple{' '}
            <span className="gradient-text">Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with HealthKey is easy. Here's how you can take control of your health data.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-cyan-400 to-primary -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                <div className="glass-card-hover p-8 text-center h-full">
                  {/* Step Number */}
                  <motion.div
                    className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="font-display text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                    {/* Glow */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} blur-xl opacity-50`} />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-2xl bg-secondary/50 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  <h3 className="font-display text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
