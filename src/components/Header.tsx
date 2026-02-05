import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import healthkeyLogo from '@/assets/healthkey-app-logo.png';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'About', href: '#problem', isRoute: false },
  { name: 'How It Works', href: '#how-it-works', isRoute: false },
  { name: 'Ask HealthKey', href: '#ask-healthkey', isRoute: false },
  { name: 'Rewards', href: '#rewards', isRoute: false },
  { name: 'FAQ', href: '#faq', isRoute: false },
];

// Logo spin animation variants
const logoSpinVariants = {
  initial: { rotateY: 0 },
  spin: {
    rotateY: 360,
    transition: {
      duration: 3.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [shouldSpin, setShouldSpin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Periodic spin animation every 8-12 seconds
  useEffect(() => {
    const triggerSpin = () => {
      setShouldSpin(true);
      setTimeout(() => setShouldSpin(false), 3500);
    };
    
    // Initial spin after 3 seconds
    const initialTimeout = setTimeout(triggerSpin, 3000);
    
    // Then spin every 8-12 seconds randomly
    const interval = setInterval(() => {
      triggerSpin();
    }, 8000 + Math.random() * 4000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (isRoute) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <motion.button 
            onClick={handleLogoClick}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="relative"
              style={{ perspective: 800 }}
            >
              <motion.img 
                src={healthkeyLogo} 
                alt="HealthKey - Own Your Health Data" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain relative z-10"
                loading="eager"
                variants={logoSpinVariants}
                initial="initial"
                animate={shouldSpin ? "spin" : "initial"}
                style={{ transformStyle: "preserve-3d" }}
              />
              <div className="absolute inset-0 blur-xl opacity-60 bg-primary/40 rounded-xl scale-110" />
            </motion.div>
            <span className="font-display font-bold text-xl text-foreground">
              Health<span className="gradient-text">Key</span>
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            onClick={() => handleNavClick('#waitlist', false)}
            className="hidden md:block btn-primary text-sm relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join Waitlist</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-menu md:hidden flex flex-col items-center justify-center gap-8"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href, link.isRoute)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-display font-semibold text-foreground"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavClick('#waitlist', false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="btn-primary mt-4"
            >
              <span className="relative z-10">Join Waitlist</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
