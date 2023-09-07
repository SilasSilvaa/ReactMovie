import React from 'react';
import { Filter } from '../../components/Filter/Filter';
import { Card } from '../../components/Card/Card';
import { useQuery } from 'react-query';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';

export function Favourites() {
  const { data } = useQuery('favourites', () =>
    useGetAllMovies('movie/now_playing')
  );

  return (
    <section className="flex flex-col pt-20 lg:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex  flex-col gap-4 p-4 pt-20 items-center md:items-start">
        <h3 className="mediumTitle">Favourites</h3>

        <div className="flex flex-wrap gap-4 p-4 pt-10 justify-center">
          {data?.map((movie) => (
            <Card detail={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
