import React from 'react';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { MoviesProps } from '../../Interfaces/IMoviesProps';

interface CardProps {
  detail: MoviesProps;
  className?: string;
}

export function Card({ className, detail }: CardProps) {
  const navigate = useNavigate();

  function showMovieDetails() {
    navigate(`/details/${detail.id}`);
  }

  return (
    <div
      className={twMerge(
        'flex relative flex-col w-80 h-80 rounded-lg',
        className
      )}
      onClick={showMovieDetails}
    >
      <div className="absolute right-4 top-4">
        <Button className="p-2">
          <Heart size={25} className="fill-white " />
        </Button>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
        alt=""
        className="w-full h-full object-cover rounded-lg cursor-pointer"
      />
      <div
        className="flex absolute bottom-0 bg-opacity-95 flex-col items-start text-center w-full 
      p-4 bg-white rounded-b-lg "
      >
        <span className="font-bold text-black">{detail.title}</span>
      </div>
    </div>
  );
}
