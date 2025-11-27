import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import styles from './Skills.module.css';

interface SkillsProps {
  isActive: boolean;
  direction: 'up' | 'down' | null;
}

const Skills = ({ isActive, direction }: SkillsProps) => {
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
        staggerChildren: 0.15,
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut' as const,
      },
    },
  };

  const getCategoryIcon = (category: string): string => {
    const icons: Record<string, string> = {
      Frontend: '🎨',
      Backend: '⚙️',
      'UI/UX': '✨',
      DSA: '🧩',
    };
    return icons[category] || '💡';
  };

  return (
    <motion.section
      className={styles.skills}
      initial="hidden"
      animate={isActive ? 'visible' : 'exit'}
      variants={containerVariants}
      aria-label="Skills section"
    >
      <motion.h2 className={styles.sectionTitle} variants={categoryVariants}>
        Skills & Expertise
      </motion.h2>

      <div className={styles.skillsGrid}>
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.category}
            className={styles.categoryCard}
            variants={categoryVariants}
            custom={catIdx}
          >
            <div className={styles.categoryHeader}>
              <span className={styles.categoryIcon}>
                {getCategoryIcon(category.category)}
              </span>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>

            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  className={styles.skillItem}
                  variants={skillVariants}
                  whileHover={{
                    scale: 1.05,
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                  custom={skillIdx}
                >
                  <span className={styles.skillName}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
