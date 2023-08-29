import React from 'react';
import { FilmReel } from '@phosphor-icons/react';

export function Title() {
  return (
    <header className="flex items-center">
      <FilmReel className="w-12 h-12 text-red-500" />
      <h1 className="text-3xl font-bold text-white">ReactMovie</h1>
    </header>
  );
}
