'use client';

import {
  motion, useScroll, useSpring, useTransform,
} from 'framer-motion';
import { useRef } from 'react';

export default function ViewBased() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scrollYSpringed = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['#f00', '#0f0', '#00f'],
  );

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYSpringed, background }}
        className="fixed z-50 w-full left-0 top-0 h-4"
      />
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="h-[50vh]" />
      </motion.div>
      <div ref={ref} className="h-[50rem] bg-cyan-500" />
    </>
  );
}
