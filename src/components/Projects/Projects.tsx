import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/portfolioData';
import styles from './Projects.module.css';

interface ProjectsProps {
  isActive: boolean;
  direction: 'up' | 'down' | null;
}

const Projects = ({ isActive, direction }: ProjectsProps) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const project = projects[currentProject];

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      rotateY: dir < 0 ? 15 : -15,
      transition: {
        duration: 0.5,
        ease: 'easeInOut' as const,
      },
    }),
  };

  const [[imageIndex, imageDirection], setImageIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newIndex = (currentImage + newDirection + project.images.length) % project.images.length;
    setImageIndex([newIndex, newDirection]);
    setCurrentImage(newIndex);
  };

  const changeProject = (index: number) => {
    setCurrentProject(index);
    setCurrentImage(0);
    setImageIndex([0, 0]);
  };

  return (
    <motion.section
      className={styles.projects}
      initial="hidden"
      animate={isActive ? 'visible' : 'exit'}
      variants={containerVariants}
      aria-label="Projects section"
    >
      <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
        Featured Projects
      </motion.h2>

      <div className={styles.projectContainer}>
        <motion.div className={styles.imageSection} variants={itemVariants}>
          <div className={styles.imageWrapper}>
            <AnimatePresence initial={false} custom={imageDirection} mode="wait">
              <motion.img
                key={imageIndex}
                src={project.images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                className={styles.projectImage}
                custom={imageDirection}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                loading="lazy"
              />
            </AnimatePresence>
          </div>
          <div className={styles.imageControls}>
            <button
              onClick={() => paginate(-1)}
              className={styles.imageNav}
              aria-label="Previous image"
            >
              ←
            </button>
            <div className={styles.imageDots}>
              {project.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${idx === currentImage ? styles.activeDot : ''}`}
                  onClick={() => {
                    setImageIndex([idx, idx > currentImage ? 1 : -1]);
                    setCurrentImage(idx);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`View image ${idx + 1}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setImageIndex([idx, idx > currentImage ? 1 : -1]);
                      setCurrentImage(idx);
                    }
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className={styles.imageNav}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        </motion.div>

        <motion.div className={styles.infoSection} variants={itemVariants}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>
          
          <div className={styles.techStack}>
            {project.techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                className={styles.techBadge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className={styles.buttons}>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryBtn}
            >
              Live Demo
            </a>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              View Code
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div className={styles.projectNav} variants={itemVariants}>
        {projects.map((p, idx) => (
          <button
            key={p.id}
            className={`${styles.projectDot} ${idx === currentProject ? styles.activeProject : ''}`}
            onClick={() => changeProject(idx)}
            aria-label={`View project: ${p.title}`}
          >
            {idx + 1}
          </button>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
