'use client';

import { isSidebarOpenAtom } from 'context/atoms';
import { motion, AnimatePresence } from 'framer-motion';
import { useAtom } from 'jotai';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function TopWrapper({ children }: Props) {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  return (
    <div>
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.3,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setIsSidebarOpen(false)}
            className="bg-black min-h-screen w-full fixed z-40 cursor-pointer pb-[0.75rem] md:pb-[1.5rem] lg:pb-[2.5rem]"
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
}
