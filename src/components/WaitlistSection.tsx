import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, FormEvent } from 'react';
import { Mail, Check, ShieldCheck, X, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';

const trustBadges = [
  { icon: ShieldCheck, text: 'No spam' },
  { icon: X, text: 'Cancel anytime' },
  { icon: Bell, text: 'No obligation' },
];

export const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);

    // Fire confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4DD8E6', '#22D3EE', '#0EA5E9', '#FCD34D'],
    });
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-12 text-center">
            {!isSuccess ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mb-8"
                >
                  <Mail className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Join the{' '}
                  <span className="gradient-text">Waitlist</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Be the first to access your health data vault. Early members get exclusive benefits.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="glass-input pr-32"
                      disabled={isSubmitting}
                    />
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary py-2 px-6 text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">
                        {isSubmitting ? 'Joining...' : 'Join Now'}
                      </span>
                    </motion.button>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-destructive text-sm"
                    >
                      {error}
                    </motion.p>
                  )}
                </form>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center gap-6 mt-8">
                  {trustBadges.map((badge, index) => (
                    <motion.div
                      key={badge.text}
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <badge.icon className="w-4 h-4 text-primary" />
                      <span>{badge.text}</span>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center mb-8 pulse-glow">
                  <Check className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-4 gradient-text">
                  You're on the list!
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thanks for joining! We'll be in touch soon with exclusive updates and early access.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
