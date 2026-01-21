import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is HealthKey?',
    answer: 'HealthKey is a blockchain-powered platform that gives you complete ownership and control over your personal health data. You decide who can access it, for how long, and you get rewarded for sharing.',
  },
  {
    question: 'How does HealthKey protect my data?',
    answer: 'Your data is encrypted and stored on a decentralized blockchain network. Only you hold the keys to access it. All data sharing requires your explicit consent and can be revoked at any time.',
  },
  {
    question: 'What is the $HEALTH token?',
    answer: '$HEALTH is our utility token that rewards you for contributing your health data to research. You can use it for premium features, marketplace purchases, or governance participation.',
  },
  {
    question: 'Who can access my health data?',
    answer: 'Only you and parties you explicitly authorize. You have granular control over what data to share, with whom, and for how long. Every access is logged and visible to you on the blockchain.',
  },
  {
    question: 'Is HealthKey HIPAA compliant?',
    answer: 'Yes, HealthKey is designed with HIPAA compliance in mind. We exceed standard requirements by giving you direct control over your data and providing complete transparency through blockchain verification.',
  },
  {
    question: 'When will HealthKey launch?',
    answer: 'We\'re currently in private beta. Join our waitlist to be among the first to access the platform when we launch publicly. Early waitlist members will receive exclusive benefits.',
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up for our waitlist above! Once we launch, you\'ll create a secure HealthKey wallet, connect your health data sources, and start taking control of your health information.',
  },
  {
    question: 'Can I revoke access to my data?',
    answer: 'Absolutely. One of our core features is the ability to revoke access at any time with a single click. Once revoked, the authorized party can no longer access your data.',
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
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
            FAQ
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, reach out to us.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              className="faq-accordion"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="font-display font-semibold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center"
                >
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
