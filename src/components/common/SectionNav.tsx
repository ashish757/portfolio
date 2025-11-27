import { motion } from 'framer-motion';
import styles from './SectionNav.module.css';

interface SectionNavProps {
  sections: string[];
  currentSection: number;
  onSectionClick: (index: number) => void;
}

const SectionNav = ({ sections, currentSection, onSectionClick }: SectionNavProps) => {
  return (
    <nav className={styles.nav} aria-label="Section navigation">
      <ul className={styles.navList}>
        {sections.map((section, index) => (
          <li key={section} className={styles.navItem}>
            <button
              className={`${styles.navButton} ${index === currentSection ? styles.active : ''}`}
              onClick={() => onSectionClick(index)}
              aria-label={`Go to ${section} section`}
              aria-current={index === currentSection ? 'true' : undefined}
            >
              <motion.span
                className={styles.dot}
                animate={{
                  scale: index === currentSection ? 1.5 : 1,
                  backgroundColor: index === currentSection ? '#7c3aed' : 'rgba(255, 255, 255, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
              <span className={styles.label}>{section}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNav;
