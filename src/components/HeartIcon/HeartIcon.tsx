import React from 'react';
import { Heart } from '@phosphor-icons/react';

export function HeartIcon() {
  return (
    <button className="border-none bg-light-gray text-white font-bold p-3 rounded-xl">
      <Heart size={25} className="fill-red-500 " />
    </button>
  );
}
