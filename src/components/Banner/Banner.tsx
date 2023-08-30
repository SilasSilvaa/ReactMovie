import React, { useState, useContext } from 'react';
import { Filter } from '../Filter/Filter';
import { Button } from '../Button/Button';
import { Heart } from '@phosphor-icons/react';
import { MovieContext } from '../../context/MovieContext';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';

export function Banner() {
  const [index, setIndex] = useState(0);

  const { data } = useQuery('bannermovies', () =>
    useGetAllMovies('movie/upcoming')
  );

  async function handleChangeBanner(i: number) {
    setIndex(i);
  }

  return (
    <div className="flex w-full relative items-center flex-col justify-center lg:h-auto">
      <Filter />
      <img
        src={`https://image.tmdb.org/t/p/original${
          data && data[index]?.backdrop_path
        }`}
        alt=""
        className=" object-cover w-full min-h-[55vh] max-h-[75vh]"
      />

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
