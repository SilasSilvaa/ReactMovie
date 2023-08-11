import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type InputProps = ComponentProps<'input'> & {
  className?: string;
};

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray outline-none',
        className
      )}
      {...props}
    />
  );
}
