import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Lock, Share2, RotateCcw, Eye, Check } from 'lucide-react';

const benefits = [
  { icon: Lock, text: 'You own it', description: 'Your data belongs to you, stored securely on blockchain' },
  { icon: Share2, text: 'You choose what to share', description: 'Granular control over every piece of information' },
  { icon: RotateCcw, text: 'Revoke anytime', description: 'Take back access with a single click' },
  { icon: Eye, text: 'View everything on blockchain', description: 'Complete transparency and audit trail' },
];

const beforeAfter = {
  before: [
    'Data sold without consent',
    'No visibility into usage',
    'Zero compensation',
    'Complex opt-out processes',
  ],
  after: [
    'Complete ownership control',
    'Real-time access logs',
    'Earn $HEALTH tokens',
    'One-click revocation',
  ],
};

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSlide, setActiveSlide] = useState<'before' | 'after'>('before');

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
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
            The Solution
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            HealthKey's{' '}
            <span className="gradient-text">Simple Promise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We put you in complete control of your health data. No exceptions.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
              className="glass-card-hover p-6 text-center group"
            >
              <motion.div
                className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{ 
                  boxShadow: ['0 0 20px hsl(174 72% 56% / 0.3)', '0 0 40px hsl(174 72% 56% / 0.5)', '0 0 20px hsl(174 72% 56% / 0.3)']
                }}
                transition={{ 
                  boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                }}
              >
                <benefit.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2">{benefit.text}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-8 sm:p-12"
        >
          {/* Toggle Buttons */}
          <div className="flex justify-center mb-10">
            <div className="glass-card p-1 flex gap-1">
              <button
                onClick={() => setActiveSlide('before')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSlide === 'before'
                    ? 'bg-destructive/80 text-destructive-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Before HealthKey
              </button>
              <button
                onClick={() => setActiveSlide('after')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeSlide === 'after'
                    ? 'bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                After HealthKey
              </button>
            </div>
          </div>

          {/* Content */}
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {beforeAfter[activeSlide].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: activeSlide === 'before' ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 rounded-xl ${
                  activeSlide === 'before' 
                    ? 'bg-destructive/10 border border-destructive/20' 
                    : 'bg-primary/10 border border-primary/20'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activeSlide === 'before' ? 'bg-destructive/20' : 'bg-primary/20'
                }`}>
                  {activeSlide === 'after' ? (
                    <Check className="w-4 h-4 text-primary" />
                  ) : (
                    <span className="text-destructive font-bold">✕</span>
                  )}
                </div>
                <span className={`font-medium ${
                  activeSlide === 'before' ? 'text-destructive/80' : 'text-primary'
                }`}>
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
