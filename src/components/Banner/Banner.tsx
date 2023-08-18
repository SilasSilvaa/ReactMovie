import React, { useState, useContext, useEffect } from 'react';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { MovieContext, MoviesProps } from '../../context/MovieContext';

interface dataProps {
  data: MoviesProps;
}

export function Banner({ data }: dataProps) {
  const { movies } = useContext(MovieContext);
  const filterArrayMovies = movies.slice(0, 3);
  const [filteredMovies, setFilteredMovies] = useState<MoviesProps[]>([]);

  useEffect(() => {
    if (filterArrayMovies) {
      setFilteredMovies(filterArrayMovies);
    }
  }, []);

  console.log(filterArrayMovies);

  const [index, setIndex] = useState(0);

  function handleChangeBanner(i: number) {
    setIndex(i);
  }

  return (
    <div className="flex w-full relative items-center flex-col justify-center lg:h-auto">
      <Filter />
      <img
        src={
          movies &&
          `https://image.tmdb.org/t/p/original${filteredMovies[index]?.backdrop_path}`
        }
        alt=""
        className=" object-cover w-full min-h-[55vh] max-h-[65vh]"
      />

      <div className="absolute left-10 bottom-10 flex flex-col">
        <h3 className="text-white font-bold text-3xl">
          {movies !== undefined && filteredMovies[index]?.title}
        </h3>
        <span className="text-light-gray">2022 | Comedy horror | 1h30 </span>
        <div className="flex pt-10 gap-4">
          <Button>Watch trailer now</Button>
          <Button>
            <Heart size={25} className="fill-white " />
          </Button>
        </div>
      </div>
      <div className="flex gap-2 absolute bottom-2">
        <div
          className="w-2 h-2 bg-white rounded-full cursor-pointer"
          onClick={() => handleChangeBanner(0)}
        ></div>
        <div
          className="w-2 h-2 bg-gray rounded-full cursor-pointer"
          onClick={() => handleChangeBanner(1)}
        ></div>
        <div
          className="w-2 h-2 bg-gray rounded-full cursor-pointer"
          onClick={() => handleChangeBanner(2)}
        ></div>
      </div>
    </div>
  );
}
