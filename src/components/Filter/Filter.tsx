import React from 'react';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

export function Filter() {
  return (
    <div className="w-full absolute flex flex-col flex-wrap justify-center top-5 px-6 md:flex-row md:justify-around">
      <div className="textCss text-white p-2 flex-1 justify-center md:justify-start">
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
      <div className="flex p-2 flex-1 items-center justify-between gap-4">
        <Input
          placeholder="movies, series, documentaries..."
          className="bg-black"
        />
        <Button className="p-2">
          {/* <div className="border-2 border-red-500 p-2 rounded-lg hover:bg-red-500 transition-colors ease-in-out cursor-pointer"> */}
          <MagnifyingGlass size={25} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
