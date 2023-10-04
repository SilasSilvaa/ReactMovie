import React from 'react';
import { FilmReel } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export function Title() {
  return (
    <Link to={'/'} className="flex items-center">
      <FilmReel className="w-12 h-12 text-red-500" />
      <h1 className="text-3xl font-bold text-white">ReactFilm</h1>
    </Link>
  );
}
