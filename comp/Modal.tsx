'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  modalContentClasses?: string;
  onClose?: () => void;
  title: ReactNode;
  noPadding?: boolean;
  footer?: ReactNode;
};

function Modal({
  children,
  isOpen = false,
  modalContentClasses,
  onClose,
  title,
  noPadding,
  footer,
}: Props) {
  const [modalElement, setModalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setModalElement(document.getElementById('mainModalContainer'));
  }, []);

  if (!modalElement) return null;

  return createPortal(
    <div className="">
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[40]"
          >
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <div
              className="flex items-center justify-center w-full h-full bg-opacity-20 bg-black"
              onClick={onClose}
            >
              {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
              <motion.div
                initial={{
                  scale: 0.8,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.2,
                  ease: 'easeOut',
                }}
                exit={{
                  scale: 0.8,
                  opacity: 0,
                }}
                onClick={(ev) => ev.stopPropagation()}
                className={`rounded-xl max-h-[95vh] max-w-[calc(100%-2rem)] lg:max-w-6xl bg-white border ${
                  !noPadding && 'py-4'
                } shadow-2xl flex flex-col ${modalContentClasses}`}
              >
                <h4 className="text-2xl font-bold text-slate-700 px-4 sm:px-6 mb-4">
                  {title}
                </h4>
                <div
                  className={`max-h-full overflow-y-auto scrollbar-thin px-4 sm:px-6 pb-1 ${
                    footer && 'mb-4'
                  }`}
                >
                  {children}
                </div>
                {footer && <div className="px-4 sm:px-6">{footer}</div>}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    modalElement,
  );
}

export default Modal;
