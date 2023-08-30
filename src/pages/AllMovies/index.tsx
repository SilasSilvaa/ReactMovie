import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { useQuery } from 'react-query';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { Card } from '../../components/Card/Card';

export function AllMovies() {
  const { data } = useQuery('nowPlayingMovies', () =>
    useGetAllMovies('movie/now_playing')
  );

  return (
    <section className="flex flex-col pt-20 lg:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>
      <div className="flex flex-col gap-4 p-4 pt-20 items-center md:flex-row">
        <h3 className="mediumTitle">All Movies</h3>
        <div className="flex items-center gap-4">
          <span className="text-center">Filter By</span>
          <div>
            <select name="All movies" id="allmovies">
              <option value="All "> All</option>
              <option value="All "> top rated</option>
              <option value="All "> upcoming</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center p-4">
        {data?.map((movie) => (
          <Card detail={movie} key={movie.id} className="w-64 h-64" />
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center py-10">
        <div className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{'<'} </span>
        </div>
        <div className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center ">
          <span className="text-white font-bold">1</span>
        </div>
        <div className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">2</span>
        </div>
        <div className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">3</span>
        </div>

        <div className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{'>'}</span>
        </div>
      </div>
    </section>
  );
}
