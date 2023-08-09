import React, { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  type: string;
  value?: string;
  placeholder: string;
};

export function Input({ value, type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      className="flex-1 bg-transparent border-2 border-red-500 rounded-lg p-2 text-white placeholder:text-gray "
      value={value}
      placeholder={placeholder}
    />
  );
}
