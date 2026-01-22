import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import dataOrb from '@/assets/data-orb.png';

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient opacity-60" />

      {/* Content */}
      <div className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-12 pt-24">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Own Your{' '}
            <span className="gradient-text glow-text">Health Data</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
          >
            Take back control of your personal health information with HealthKey. 
            Secure. Private. Yours forever.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.25, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => scrollToSection('#waitlist')}
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <span className="relative z-10">Join the Waitlist</span>
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#how-it-works')}
              className="btn-secondary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
            >
              See How It Works
            </motion.button>
          </motion.div>
        </div>

        {/* Data Orb Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="flex-1 flex justify-center"
        >
          <div className="relative">
            <motion.img
              src={dataOrb}
              alt="HealthKey Data Vault"
              className="w-72 h-72 sm:w-96 sm:h-96 object-contain"
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#problem')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};
