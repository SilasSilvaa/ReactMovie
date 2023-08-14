import React from 'react';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';

export function Banner() {
  return (
    <div className="flex w-full relative items-center flex-col justify-center lg:h-auto">
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
          <Button>
            <Heart size={25} className="fill-white " />
          </Button>
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2">
        <div className="w-2 h-2 bg-white rounded-full cursor-pointer"></div>
        <div className="w-2 h-2 bg-gray rounded-full cursor-pointer"></div>
        <div className="w-2 h-2 bg-gray rounded-full cursor-pointer"></div>
      </div>
    </div>
  );
}
