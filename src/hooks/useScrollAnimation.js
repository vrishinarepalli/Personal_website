import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (ref, threshold = 0.1) => {
  const controls = useAnimation();
  const inView = useInView(ref, {
    once: true,
    amount: threshold
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  return controls;
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5 }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};
