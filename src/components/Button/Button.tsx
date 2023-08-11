import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge(
        'border-none bg-red-500 text-white font-bold p-4 rounded-xl hover:bg-red-600 transition-colors ease-in-out',
        className
      )}
      {...props}
    />
  );
}
