import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="border-none bg-red-500 text-white font-bold p-4 rounded-xl hover:bg-red-600 transition-colors ease-in-out"
      {...props}
    />
  );
}
