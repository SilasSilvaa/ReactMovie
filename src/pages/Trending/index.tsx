import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Filter } from '../../components/Filter/Filter';
// import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { Card } from '../../components/Card/Card';

export function Trending() {
  const { data } = useQuery('trendingMovies', () =>
    useGetAllMovies('movie/popular')
  );

  return (
    <section className="flex flex-col pt-20 lg:pt-0">
      <div className="relative pb-10">
        <Filter />
      </div>

      <div className="flex  flex-col gap-4 p-4 pt-20 justify-center items-center md:items-start">
        <h3 className="mediumTitle">Trending</h3>

        <div className="flex flex-col w-full gap-6 flex-wrap md:flex md:flex-row ">
          <div className="max-w-4xl">
            <img
              src={`https://image.tmdb.org/t/p/original/${
                data && data[0]?.backdrop_path
              }`}
              alt=""
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center flex-1 gap-4">
            <h3 className="mediumTitle">{data && data[0]?.title}</h3>
            <span className="text-white">2022 | Action comedy</span>
            {/* <p className="text-white text-start py-6 flex-1">
              {data && data[0]?.}
            </p> */}
            <div className="flex gap-4">
              <Link
                to={`https://www.youtube.com/results?search_query=${
                  data && data[0]?.title + 'Trailer'
                }`}
              >
                <Button>Watch Trailer</Button>
              </Link>

              <Button>
                <Heart size={25} className="fill-white " />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full py-4 px-6 justify-start md:items-start">
          <h3 className="mediumTitle">Recently released</h3>
        </div>
        <div className=" carousel max-w-full gap-6 rounded-box">
          {data?.map((trendindMovie) => (
            <Card
              detail={trendindMovie}
              key={trendindMovie.id}
              className="carousel-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
