import React from 'react';
import { useQuery } from 'react-query';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { Card } from '../../components/Card/Card';
import { Banner } from '../../components/Banner/Banner';

export function Trending() {
  const { data } = useQuery('trendingMovies', () =>
    useGetAllMovies('movie/popular')
  );

  return (
    <section className="flex flex-col pt-20 lg:pt-0">
      <div className="flex  flex-col gap-4 p-4 justify-center items-center md:items-start">
        <div className="flex flex-col w-full gap-6 flex-wrap md:flex md:flex-row ">
          {data && <Banner data={data} />}
          <h3 className="mediumTitle py-5">Trending movies</h3>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {data?.map((trendindMovie) => (
            <Card
              detail={trendindMovie}
              key={trendindMovie.id}
              className="w-64 h-64"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
