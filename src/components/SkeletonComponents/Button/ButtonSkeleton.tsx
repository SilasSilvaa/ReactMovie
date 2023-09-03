import React, { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = ComponentProps<'button'> & {
  className?: string;
};

export function ButtonSkeleton({ className, ...props }: ButtonProps) {
  return (
    <button
      className={twMerge('border-none bg-zinc-700 rounded-xl', className)}
      {...props}
    />
  );
}
