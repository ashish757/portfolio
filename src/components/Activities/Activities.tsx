import { motion } from 'framer-motion';
import { socialLinks, activities } from '../../data/portfolioData';
import styles from './Activities.module.css';

interface ActivitiesProps {
  isActive: boolean;
  direction: 'up' | 'down' | null;
}

const Activities = ({ isActive, direction }: ActivitiesProps) => {
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
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'backOut' as const,
      },
    },
  };

  return (
    <motion.section
      className={styles.activities}
      initial="hidden"
      animate={isActive ? 'visible' : 'exit'}
      variants={containerVariants}
      aria-label="Activities and Social section"
    >
      <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
        Connect & Follow
      </motion.h2>

      <motion.div className={styles.socialGrid} variants={itemVariants}>
        {socialLinks.map((link, idx) => (
          <motion.a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialCard}
            variants={socialVariants}
            custom={idx}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Visit ${link.platform}`}
          >
            <span className={styles.socialIcon}>{link.icon}</span>
            <span className={styles.socialName}>{link.platform}</span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div className={styles.activitiesSection} variants={itemVariants}>
        <h3 className={styles.subsectionTitle}>Achievements & Activities</h3>
        <div className={styles.activitiesList}>
          {activities.map((activity, idx) => (
            <motion.div
              key={activity.title}
              className={styles.activityCard}
              variants={itemVariants}
              custom={idx}
              whileHover={{
                x: 10,
                transition: { duration: 0.2 },
              }}
            >
              <div className={styles.activityDot} />
              <div className={styles.activityContent}>
                <h4 className={styles.activityTitle}>{activity.title}</h4>
                <p className={styles.activityDescription}>{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Activities;
