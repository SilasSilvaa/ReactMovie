import React, { useState } from 'react';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { MoviesProps } from '../../Interfaces/IMoviesProps';

interface BannerProps {
  isFilter?: boolean;
  data: MoviesProps[];
}

export function Banner({ isFilter, data }: BannerProps) {
  const [index, setIndex] = useState(0);

  async function handleChangeBanner(i: number) {
    setIndex(i);
  }

  return (
    <div className="flex relative items-center flex-col justify-center">
      {isFilter && <Filter />}

      <Link className="flex w-full" to={`/details/${data[index].id}`}>
        <img
          src={`https://image.tmdb.org/t/p/original${
            data && data[index]?.backdrop_path
          }`}
          alt={`poster of movie ${data[index].title}`}
          className="object-cover bg-darkGray w-full h-[75vh] md:rounded-lg"
        />
      </Link>

      <div className="absolute left-10 bottom-10 flex flex-col">
        {data && (
          <h3 className="text-white font-bold text-3xl">
            {data[index]?.title}
          </h3>
        )}
        <span className="text-light-gray">
          {data && data[index]?.release_date} |{' '}
          {data && data[index]?.vote_average}
        </span>
        <div className="flex pt-10 gap-4">
          <Link
            to={`https://www.youtube.com/results?search_query=${
              data && data[index]?.title
            }`}
            target="_blank"
          >
            <Button>Watch trailer now</Button>
          </Link>
          <Button>
            <Heart size={25} className="fill-white " />
          </Button>
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2">
        <div
          className={`w-2 h-2 ${
            index === 0 ? 'bg-white' : 'bg-gray'
          }  rounded-full cursor-pointer`}
          onClick={() => handleChangeBanner(0)}
        ></div>
        <div
          className={`w-2 h-2 ${
            index === 1 ? 'bg-white' : 'bg-gray'
          }  rounded-full cursor-pointer`}
          onClick={() => handleChangeBanner(1)}
        ></div>
        <div
          className={`w-2 h-2 ${
            index === 2 ? 'bg-white' : 'bg-gray'
          }  rounded-full cursor-pointer`}
          onClick={() => handleChangeBanner(2)}
        ></div>
      </div>
    </div>
  );
}
