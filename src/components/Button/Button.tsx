import React, { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'> & {
  text: string;
  onClick?: () => void;
};

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="border-none bg-red-500 text-white font-bold p-4 rounded-xl hover:bg-red-600 transition-colors ease-in-out"
    >
      {text}
    </button>
  );
}
