'use client';

import { Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export function FloatingShareBar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [0, 1]);
  const y = useTransform(scrollY, [0, 300], [20, 0]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="hidden lg:flex fixed left-0 top-1/3 flex-col gap-2 bg-surface border border-border-subtle border-l-0 rounded-r-lg p-2 z-40 shadow-xl"
    >
      <button className="p-2 text-text-tertiary hover:text-blue-deep hover:scale-110 transition-all rounded-md hover:bg-surface-hover">
        <Twitter className="w-5 h-5" />
      </button>
      <button className="p-2 text-text-tertiary hover:text-blue-deep hover:scale-110 transition-all rounded-md hover:bg-surface-hover">
        <Linkedin className="w-5 h-5" />
      </button>
      <button className="p-2 text-text-tertiary hover:text-blue-deep hover:scale-110 transition-all rounded-md hover:bg-surface-hover">
        <LinkIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
