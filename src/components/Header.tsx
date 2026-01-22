import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import healthkeyLogo from '@/assets/healthkey-logo.png';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#problem' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Ask HealthKey', href: '#ask-healthkey' },
  { name: 'Rewards', href: '#rewards' },
  { name: 'FAQ', href: '#faq' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
          <motion.a 
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <img 
                src={healthkeyLogo} 
                alt="HealthKey Logo" 
                className="w-10 h-10 object-contain"
              />
              <div className="absolute inset-0 blur-lg opacity-50 bg-primary/30 rounded-xl" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Health<span className="gradient-text">Key</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="nav-link text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.a
            href="#waitlist"
            onClick={(e) => { e.preventDefault(); scrollToSection('#waitlist'); }}
            className="hidden md:block btn-primary text-sm relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Join Waitlist</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
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
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl font-display font-semibold text-foreground"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#waitlist"
              onClick={(e) => { e.preventDefault(); scrollToSection('#waitlist'); }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="btn-primary mt-4"
            >
              <span className="relative z-10">Join Waitlist</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
