import React, { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {};

export function Input({ ...props }: InputProps) {
  return (
    <input
      className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray outline-none"
      {...props}
    />
  );
}
