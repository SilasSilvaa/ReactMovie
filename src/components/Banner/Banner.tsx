import React from 'react';
import { Filter } from '../Filter/Filter';
import { HeartIcon } from '../HeartIcon/HeartIcon';
import { Button } from '../Button/Button';

export function Banner() {
  return (
    <div className="flex w-full relative items-center flex-col justify-center md:h-auto">
      <Filter />
      <img
        src="/src/assets/background.png"
        alt=""
        className=" object-cover w-full min-h-[55vh]"
      />

      <div className="absolute left-10 bottom-10 flex flex-col">
        <h3 className="text-white font-bold text-3xl">New movie</h3>
        <span className="text-light-gray">2022 | Comedy horror | 1h30 </span>
        <div className="flex pt-10 gap-4">
          <Button>Watch trailer now</Button>
          <HeartIcon />
        </div>
      </div>
    </div>
  );
}
