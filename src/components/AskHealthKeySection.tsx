import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Stethoscope, Activity, FileText, TrendingUp, Heart } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'Symptom Insights',
    description: 'Understand your symptoms in plain language with context from your health history.',
  },
  {
    icon: FileText,
    title: 'Lab Results Explained',
    description: 'Get clear explanations of your blood work, scans, and other diagnostic results.',
  },
  {
    icon: Activity,
    title: 'Wearable Metrics',
    description: 'Make sense of data from your fitness trackers, smartwatches, and health devices.',
  },
  {
    icon: TrendingUp,
    title: 'Health Trends',
    description: 'Discover patterns in your health data over time with personalized insights.',
  },
];

// Animated AI pulse component
const AIPulse = () => {
  return (
    <div className="relative w-32 h-32 mx-auto mb-8">
      {/* Outer rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{
            scale: [1, 1.5 + i * 0.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Center icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
          <Brain className="w-10 h-10 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Glow */}
      <div className="absolute inset-0 blur-2xl bg-primary/30 rounded-full" />
    </div>
  );
};

export const AskHealthKeySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="ask-healthkey" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <AIPulse />
          
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.12, duration: 0.45 }}
            className="text-primary font-semibold text-sm uppercase tracking-wider"
          >
            AI-Powered Health Understanding
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6"
          >
            Ask HealthKey —{' '}
            <span className="gradient-text">Your Personal AI Health Companion</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32, duration: 0.45 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            HealthKey includes a powerful AI companion that helps you understand YOUR OWN health 
            in a personalized and accessible way. From symptoms to lab results, wearable metrics 
            to medical records — get clarity when you need it most.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="glass-card-hover p-6 text-center"
              whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
            >
              <motion.div
                className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.18 }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA and Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="text-center"
        >
          <motion.button
            className="btn-primary text-lg mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const waitlist = document.querySelector('#waitlist');
              waitlist?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Learn More About Ask HealthKey
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.3 }}
            className="text-sm text-muted-foreground/70 flex items-center justify-center gap-2"
          >
            <span className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center text-[10px]">⚠</span>
            Not a substitute for professional medical advice. Ask HealthKey is designed to empower—not replace—your healthcare provider.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
