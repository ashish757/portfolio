import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import styles from './Contact.module.css';

interface ContactProps {
  isActive: boolean;
  direction: 'up' | 'down' | null;
}

const Contact = ({ isActive, direction }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'down' ? 100 : -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: direction === 'down' ? -100 : 100,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <motion.section
      className={styles.contact}
      initial="hidden"
      animate={isActive ? 'visible' : 'exit'}
      variants={containerVariants}
      aria-label="Contact section"
    >
      <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
        Get In Touch
      </motion.h2>

      <motion.p className={styles.subtitle} variants={itemVariants}>
        Have a project in mind or just want to say hello? I'd love to hear from you!
      </motion.p>

      <div className={styles.contactContent}>
        <motion.form
          className={styles.contactForm}
          onSubmit={handleSubmit}
          variants={itemVariants}
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input
              type="text"
              id="name"
              className={styles.input}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              placeholder="Your name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              placeholder="Your message..."
              rows={4}
            />
          </div>

          <motion.button
            type="submit"
            className={styles.submitBtn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={submitted}
          >
            {submitted ? 'Message Sent! ✓' : 'Send Message'}
          </motion.button>
        </motion.form>

        <motion.div className={styles.contactInfo} variants={itemVariants}>
          <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Contact Information</h3>
            <a href={`mailto:${personalInfo.email}`} className={styles.email}>
              📧 {personalInfo.email}
            </a>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <p className={styles.footer}>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
