import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';

interface CardProps {
  className?: string;
}

export function Card({ className }: CardProps) {
  return (
    <div
      className={twMerge(
        'flex relative flex-col w-80 h-80 rounded-lg',
        className
      )}
    >
      <div className="absolute right-4 top-4">
        <Button className="p-2">
          <Heart size={25} className="fill-white " />
        </Button>
      </div>
      <img
        src="/src/assets/film.jpg"
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="flex absolute bottom-0 bg-opacity-95 flex-col items-start text-center w-full p-4 bg-white rounded-b-lg ">
        <span className="font-bold">New Film</span>
        <span>2022 | Action comedy</span>
      </div>
    </div>
  );
}
