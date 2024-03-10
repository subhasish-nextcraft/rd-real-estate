'use client';

import {
  ReactNode,
  Ref,
  forwardRef,
  useEffect,
  useState,
  MouseEvent,
} from 'react';

import { motion } from 'framer-motion';
import Spinner from './Spinner';

type Props = {
  children: ReactNode;
  className?: string;
  curved?: boolean;
  gradient?: boolean;
  shadow?: boolean;
  bold?: boolean;
  white?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  submit?: boolean;
  isLoading?: boolean;
};

const Button = forwardRef<HTMLElement | undefined, Props>(
  (
    {
      children,
      className,
      white,
      curved,
      gradient,
      shadow,
      bold,
      disabled,
      onClick = () => {},
      submit,
      isLoading = false,
    },
    ref,
  ) => {
    const [shouldShowSpinner, setShouldShowSpinner] = useState(!!isLoading);

    useEffect(() => {
      setShouldShowSpinner(isLoading);
      return () => setShouldShowSpinner(false);
    }, [isLoading]);

    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
      if (shouldShowSpinner) return;
      setShouldShowSpinner(true);
      await onClick(event);
      setShouldShowSpinner(false);
    };

    return (
      <motion.button
        {...(!disabled && {
          whileHover: {
            scale: 1.05,
          },
        })}
        {...(!disabled && {
          whileTap: {
            scale: 0.95,
          },
        })}
        ref={ref as Ref<HTMLButtonElement>}
        layout
        className={`${
          shadow
          && 'drop-shadow-[0px_6px_13.6px_rgba(0,0,0,0.25)] hover:drop-shadow-[0px_10px_20px_rgba(0,0,0,0.25)] active:drop-shadow-sm transition-shadow'
        } cursor-pointer ${className}`}
        transition={{ duration: 0.1, ease: 'easeOut' }}
        onClick={handleClick}
        disabled={disabled}
        type={submit ? 'submit' : 'button'}
        style={{
          ...(!gradient && {
            background: '#0A76EB',
          }),
          ...(gradient && {
            background:
              'radial-gradient(75.8% 167.21% at 24.2% 48.57%, #0A76EB 0%, #06407D 100%)',
          }),
          ...(white
            ? {
              background: '#fff',
              color: '#254E7A',
            }
            : { color: '#fff' }),
          border: '0.5px solid rgba(255, 255, 255, 0.4)',
          ...(curved
            ? { borderRadius: '50px 10px', padding: '0.75rem 2.5rem' }
            : { borderRadius: '7px', padding: '0.75rem 1.75rem' }),
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          ...(bold && { fontWeight: '600' }),
          ...(white && { padding: '0.4rem 0.75rem' }),
          fontSize: '16px',
          lineHeight: '24px',
          ...(bold && { letterSpacing: '0.15em' }),
          ...(bold && { textTransform: 'uppercase' }),
        }}
      >
        <div className="flex gap-2 items-center text-inherit">
          {shouldShowSpinner && <Spinner clear={white} />}
          {children}
        </div>
      </motion.button>
    );
  },
);

export default Button;
