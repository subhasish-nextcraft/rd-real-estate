'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

type Props = {
  label: string;
  items: JSX.Element[];
};

function Dropdown({ label, items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <div className="relative">
      <button
        type="button"
        className={`flex ${
          !isOpen && 'ring-1 ring-pry-500 bg-white'
        } gap-1 items-center py-1 px-2 rounded-xl ${
          isOpen && 'shadow-inner bg-pry-500'
        }`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <p
          className={`text-pry-700 font-medium ${
            isOpen ? 'text-white' : 'text-pry-700'
          }`}
        >
          {label}
        </p>
        {!isOpen ? (
          <svg
            className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-pry-700'}`}
            fill="none"
            strokeWidth={2.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        ) : (
          <svg
            className={`h-5 w-5 ${isOpen ? 'text-white' : 'text-pry-700'}`}
            fill="none"
            strokeWidth={2.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-10 z-40 bg-white rounded-xl shadow-xl overflow-hidden"
            ref={ref}
          >
            {items}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
