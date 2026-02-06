import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import healthkeyLogo from '@/assets/healthkey-app-logo.svg';

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: XIcon, href: 'https://x.com/HealthKeyPro', label: 'X' },
  { icon: Github, href: 'https://github.com/Blockchainjose/Healthkey-Protocol', label: 'GitHub' },
];

const footerLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Security', href: '/security' },
];

export const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden border-t border-white/10">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-cyan-400/5"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="relative">
                <img 
                  src={healthkeyLogo} 
                  alt="HealthKey Logo" 
                  className="w-12 h-12 object-contain"
                />
                <div className="absolute inset-0 blur-xl opacity-60 bg-primary/40 rounded-xl" />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Health<span className="gradient-text">Key</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Empowering individuals to own, control, and benefit from their personal health data through blockchain technology.
            </p>
            <a
              href="mailto:contact@myhealthkey.io"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              contact@myhealthkey.io
            </a>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} HealthKey. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with 💚 for a healthier future
          </p>
        </div>
      </div>
    </footer>
  );
};
