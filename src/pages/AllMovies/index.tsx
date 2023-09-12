import React, { useState, useEffect } from 'react';
import { Filter } from '../../components/Filter/Filter';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { useTeste } from '../../hooks/useTeste';
import { Card } from '../../components/Card/Card';

export function AllMovies() {
  const [page, setPage] = useState<number>(1);

  const { data } = useGetAllMovies('nowPlayingMovies', 'movie/now_playing');

  const { data: testeData, refetch } = useTeste(
    'nowPlay',
    'movie/now_playing',
    page
  );

  console.log(testeData);

  useEffect(() => {
    refetch();
    console.log(testeData);
    console.log(page);
  }, [page]);

  return (
    <section className="flex flex-col pt-20 lg:pt-0">
      <div className="relative pb-20 md:pb-10">
        <Filter />
      </div>
      <div className="flex flex-col gap-4 p-4 pt-20 items-center md:flex-row">
        <div className="flex flex-1 items-center justify-between">
          <h3 className="mediumTitle">All Movies</h3>
          <div className="flex gap-4 items-center">
            <div>
              <select
                name="All movies"
                id="allmovies"
                className="bg-red-500 text-white px-2 py-1 font-bold rounded-lg border-none
                outline-none"
              >
                <option className="bg-black " value="All ">
                  All movies
                </option>
                <option className="bg-black " value="Top rated ">
                  Top Rated movies
                </option>
                <option className="bg-black " value="Up Coming ">
                  Upcoming movies
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4 pt-10 justify-center">
        {testeData?.map((movie) => (
          <Card detail={movie} key={movie.id} className="w-56 h-56 text-xs" />
        ))}
      </div>
      <div className="flex gap-2 items-center justify-center py-10">
        {/* <button className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{'<'} </span>
        </button> */}
        <button className="w-8 h-8  bg-red-900 rounded-lg flex items-center justify-center ">
          <span className="text-white font-bold">1</span>
        </button>
        <button
          className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center"
          onClick={() => setPage((state) => state + 1)}
        >
          <span className="text-white font-bold">2</span>
        </button>
        <button className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">3</span>
        </button>

        <button className="w-8 h-8  bg-red-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{'>'}</span>
        </button>
      </div>
    </section>
  );
}
