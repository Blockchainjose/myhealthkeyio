import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { Mail, Check, ShieldCheck, X, Bell, User } from "lucide-react";
import confetti from "canvas-confetti";

const trustBadges = [
  { icon: ShieldCheck, text: "No spam" },
  { icon: X, text: "Cancel anytime" },
  { icon: Bell, text: "No obligation" },
];

export const WaitlistSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate name
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://api.beehiiv.com/v2/publications/${import.meta.env.VITE_BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_BEEHIIV_API_KEY}`,
          },
          body: JSON.stringify({
            email: email.trim(),
            custom_fields: {
              full_name: name.trim(),
            },
            reactivate_existing: false,
            send_welcome_email: false,
            utm_source: "healthkey-website",
            utm_medium: "waitlist",
            utm_campaign: "landing",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);

      // Fire confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4DD8E6", "#22D3EE", "#0EA5E9", "#FCD34D"],
      });
    } catch (err) {
      setError("There was an issue submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 sm:p-12 text-center">
            {!isSuccess ? (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8"
                >
                  <Mail className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                  Join the <span className="gradient-text">Waitlist</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Be the first to access your health data vault. Early members get exclusive benefits.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name"
                          className="glass-input pl-11 w-full"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="glass-input pl-11 w-full"
                          disabled={isSubmitting}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto sm:px-12 py-3 text-base font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                  >
                    <motion.span
                      className="relative z-10"
                      animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                      transition={{ duration: 0.22, repeat: isSubmitting ? Infinity : 0 }}
                    >
                      {isSubmitting ? "Joining..." : "Join Waitlist"}
                    </motion.span>
                  </motion.button>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-destructive text-sm text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  {/* Privacy Disclaimer */}
                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. No spam. You can unsubscribe anytime.
                  </p>
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
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8 pulse-glow">
                  <Check className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl font-bold mb-4 gradient-text">You're on the list!</h2>
                <p className="text-lg text-muted-foreground">
                  Thank you! You're now on the HealthKey Waitlist. Check your email for confirmation.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
