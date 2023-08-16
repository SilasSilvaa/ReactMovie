import React from 'react';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { MoviesProps } from '../../context/MovieContext';

interface dataProps {
  data: MoviesProps;
}

export function Banner({ data }: dataProps) {
  return (
    <div className="flex w-full relative items-center flex-col justify-center lg:h-auto">
      <Filter />
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt=""
        className=" object-cover w-full min-h-[55vh] max-h-[65vh]"
      />

      <div className="absolute left-10 bottom-10 flex flex-col">
        <h3 className="text-white font-bold text-3xl">{data?.title}</h3>
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
