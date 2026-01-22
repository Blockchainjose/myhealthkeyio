import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Coins, Sparkles, ShoppingCart, Zap } from 'lucide-react';
import { HealthToken3D } from './HealthToken3D';

const tokenUseCases = [
  {
    icon: Coins,
    title: 'Earn Rewards',
    description: 'Get compensated for sharing your anonymized health data with researchers and healthcare organizations.',
  },
  {
    icon: Sparkles,
    title: 'Premium Access',
    description: 'Unlock exclusive features, personalized health insights, and priority support with your tokens.',
  },
  {
    icon: ShoppingCart,
    title: 'Marketplace',
    description: 'Exchange tokens for health-related products, services, and discounts from partner companies.',
  },
  {
    icon: Zap,
    title: 'Governance',
    description: 'Participate in platform decisions and vote on the future direction of HealthKey.',
  },
];

export const RewardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="rewards" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-gold/5 to-background" />

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
            className="text-gold font-semibold text-sm uppercase tracking-wider"
          >
            $HEALTH Token
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Get Rewarded for{' '}
            <span className="bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">Sharing Data</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your health data has value. With HealthKey, you finally get to benefit from it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Token Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <HealthToken3D className="w-80 h-80 sm:w-96 sm:h-96" />
          </motion.div>

          {/* Use Cases */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tokenUseCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-card-hover p-6 cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"
                  animate={hoveredCard === index ? { scale: 1.1, rotate: 10 } : {}}
                >
                  <useCase.icon className="w-6 h-6 text-gold" />
                </motion.div>
                <h3 className="font-display text-lg font-semibold mb-2">{useCase.title}</h3>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredCard === index ? { opacity: 1, height: 'auto' } : { opacity: 0.7, height: 'auto' }}
                  className="text-sm text-muted-foreground"
                >
                  {useCase.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
