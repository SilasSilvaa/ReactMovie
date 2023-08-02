import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';

export function Filter() {
  return (
    <div className="w-full absolute flex flex-wrap justify-center top-5 first-letter:items-cente md:flex-row md:justify-around">
      <div className="textCss text-white p-2 group-hover:text-red-500 ">
        <span className="cursor-pointer hover:text-red-500 transition-colors ease-in-out">
          Movies
        </span>
        <span className="cursor-pointer hover:text-red-500 transition-colors ease-in-out">
          Serie
        </span>
        <span className="cursor-pointer hover:text-red-500 transition-colors ease-in-out">
          Documentaries
        </span>
      </div>
      <div className="flex p-2 items-center justify-between border-2 rounded-md border-white">
        <input
          type="text"
          className=" bg-transparent text-white outline-none flex-1 placeholder:text-white"
          placeholder="Filmes, series, documentarios..."
        />
        <MagnifyingGlass size={25} className="text-white cursor-pointer" />
      </div>
    </div>
  );
}
