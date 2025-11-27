import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolioData';
import styles from './Hero.module.css';

interface HeroProps {
  isActive: boolean;
  direction: 'up' | 'down' | null;
}

const Hero = ({ isActive, direction }: HeroProps) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    hidden: {
      opacity: 0,
      y: 50,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  return (
    <motion.section
      className={styles.hero}
      initial="hidden"
      animate={isActive ? 'visible' : 'exit'}
      variants={containerVariants}
      aria-label="Hero section"
    >
      <div className={styles.content}>
        <motion.div className={styles.greeting} variants={itemVariants}>
          <span className={styles.wave}>👋</span>
          <span>Hello, I'm</span>
        </motion.div>

        <motion.h1 className={styles.name} variants={itemVariants}>
          {personalInfo.name}
        </motion.h1>

        <motion.h2 className={styles.title} variants={itemVariants}>
          {personalInfo.title}
        </motion.h2>

        <motion.p className={styles.tagline} variants={itemVariants}>
          {personalInfo.tagline}
        </motion.p>

        <motion.div className={styles.cta} variants={itemVariants}>
          <motion.span
            className={styles.scrollHint}
            animate={floatingAnimation}
          >
            Scroll to explore ↓
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className={styles.backgroundShapes}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.shape1} />
        <div className={styles.shape2} />
        <div className={styles.shape3} />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
