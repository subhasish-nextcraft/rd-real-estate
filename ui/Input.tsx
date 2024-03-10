'use client';

import {
  ChangeEvent, FocusEvent, FocusEventHandler, useRef,
} from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = {
  placeholder?: string;
  className?: string;
  value: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> &
  FocusEventHandler<HTMLInputElement>;
  type?: string;
  inputIcon?: string;
  inputIconAlt?: string;
  disabled?: boolean;
  onClick?: () => void;
  onFocus?: (
    event: FocusEvent<HTMLInputElement> & FocusEvent<HTMLTextAreaElement>,
  ) => void;
  errorMsg?: string;
  rows?: number;
  [key: string]: any; // Rest of the props
};

export default function Input({
  placeholder = '',
  className,
  value,
  onChange = () => {},
  onBlur = () => {},
  type,
  inputIcon,
  inputIconAlt = '',
  disabled,
  onClick,
  onFocus = () => {},
  errorMsg,
  rows,
  ...rest
}: InputProps) {
  const inputRef = useRef<HTMLTextAreaElement & HTMLInputElement>(null);

  const Component = rows ? 'textarea' : 'input';

  return (
    <div className="relative w-full">
      <Component
        onClick={onClick}
        disabled={disabled}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type || 'text'}
        placeholder={placeholder}
        className={twMerge(
          `w-full ${
            !disabled && ''
          } focus:outline-none rounded-md focus:border-pry-500 p-2 bg-white border border-solid border-slate-300 overflow-ellipsis ${
            inputIcon && 'pr-8'
          } ${className}`,
        )}
        {...rest}
        ref={inputRef}
        onFocus={onFocus}
        rows={rows}
      />
      {inputIcon && (
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, @next/next/no-img-element
        <img
          className="absolute w-4 h-4 -translate-y-1/2 right-3 top-1/2 cursor-pointer"
          src={inputIcon}
          alt={inputIconAlt || ''}
          onKeyDown={() => {
            inputRef.current?.focus();
          }}
          onClick={() => {
            inputRef.current?.focus();
          }}
        />
      )}

      {errorMsg && (
        <p className="text-red-600 text-sm font-semibold mt-1">{errorMsg}</p>
      )}
    </div>
  );
}
