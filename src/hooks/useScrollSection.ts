import { useState, useEffect, useCallback, useRef } from 'react';

interface UseScrollSectionOptions {
  totalSections: number;
  threshold?: number;
}

interface UseScrollSectionReturn {
  currentSection: number;
  direction: 'up' | 'down' | null;
  progress: number;
  goToSection: (index: number) => void;
}

export const useScrollSection = ({
  totalSections,
  threshold = 50,
}: UseScrollSectionOptions): UseScrollSectionReturn => {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState<'up' | 'down' | null>(null);
  const [progress, setProgress] = useState(0);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const accumulatedDelta = useRef(0);

  const goToSection = useCallback((index: number) => {
    if (index >= 0 && index < totalSections) {
      setDirection(index > currentSection ? 'down' : 'up');
      setCurrentSection(index);
    }
  }, [totalSections, currentSection]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeDiff = now - lastScrollTime.current;
      
      // Reset accumulated delta if too much time has passed
      if (timeDiff > 200) {
        accumulatedDelta.current = 0;
      }
      
      accumulatedDelta.current += e.deltaY;
      lastScrollTime.current = now;

      // Only trigger section change if not currently scrolling
      if (isScrolling.current) return;

      if (Math.abs(accumulatedDelta.current) >= threshold) {
        isScrolling.current = true;
        
        if (accumulatedDelta.current > 0 && currentSection < totalSections - 1) {
          setDirection('down');
          setCurrentSection((prev) => prev + 1);
        } else if (accumulatedDelta.current < 0 && currentSection > 0) {
          setDirection('up');
          setCurrentSection((prev) => prev - 1);
        }
        
        accumulatedDelta.current = 0;

        // Cooldown period to prevent rapid section changes
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }

      // Update progress within section
      setProgress(Math.min(1, Math.abs(accumulatedDelta.current) / threshold));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        if (currentSection < totalSections - 1) {
          isScrolling.current = true;
          setDirection('down');
          setCurrentSection((prev) => prev + 1);
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        if (currentSection > 0) {
          isScrolling.current = true;
          setDirection('up');
          setCurrentSection((prev) => prev - 1);
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSection(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSection(totalSections - 1);
      }
    };

    // Touch handling for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        isScrolling.current = true;
        if (diff > 0 && currentSection < totalSections - 1) {
          setDirection('down');
          setCurrentSection((prev) => prev + 1);
        } else if (diff < 0 && currentSection > 0) {
          setDirection('up');
          setCurrentSection((prev) => prev - 1);
        }
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentSection, totalSections, threshold, goToSection]);

  return { currentSection, direction, progress, goToSection };
};
