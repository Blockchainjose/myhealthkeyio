import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Eye, Shield, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: 'Data Brokers',
    description: 'Your medical records are bought and sold by companies you\'ve never heard of, generating billions in profit without your knowledge.',
  },
  {
    icon: Eye,
    title: 'Hidden Tracking',
    description: 'Every doctor visit, prescription, and lab result is tracked and aggregated into detailed profiles about your health.',
  },
  {
    icon: Shield,
    title: 'HIPAA Gaps',
    description: 'Current regulations have massive loopholes that allow third parties to access your sensitive health information.',
  },
  {
    icon: DollarSign,
    title: 'Zero Payoff',
    description: 'While companies profit from your data, you receive nothing in return. Your health information has value—you should benefit.',
  },
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            The Problem
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Who Profits From{' '}
            <span className="gradient-text">Your Health Data?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            95% of consumers don't know their medical data is being sold. Here's what's happening behind the scenes.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.12, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-150"
                    whileHover={{ rotate: 10, transition: { duration: 0.18 } }}
                  >
                    <problem.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
