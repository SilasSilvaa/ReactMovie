import React from 'react';
import { HeartIcon } from '../HeartIcon/HeartIcon';

export function Card() {
  return (
    <div className="flex relative flex-col w-80 h-80 rounded-lg">
      <div className="absolute right-4 top-4">
        <HeartIcon />
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
