import type { Variants, Transition } from "framer-motion";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const t = (duration: number, delay = 0): Transition => ({
  duration,
  ease: EASE,
  delay,
});

export const fadeUp = (duration = 0.65): Variants => ({
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: t(duration, delay),
  }),
});

export const fadeIn = (duration = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: t(duration, delay),
  }),
});

export const scaleIn = (duration = 0.4): Variants => ({
  hidden: { opacity: 0, scale: 0.93 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: t(duration, delay),
  }),
});

export const cardVariant = (duration = 0.6): Variants => ({
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: t(duration, i * 0.1),
  }),
});

export const VIEWPORT = { once: true, margin: "-60px" } as const;
