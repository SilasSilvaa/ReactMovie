import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { MovieContext } from '../../context/MovieContext';
import { Card } from '../../components/Card/Card';

export function Details() {
  const { id } = useParams();
  const { detailMovie, similarMovies, getDetails, getSimilarMovies } =
    useContext(MovieContext);

  useEffect(() => {
    if (id) {
      getDetails(id);
      getSimilarMovies(id);
    }
  }, []);

  console.log(detailMovie?.production_companies);

  return (
    <>
      <section className="contentCard pt-20 md:pt-0 md:p-12">
        <div className="flex flex-col w-full justify-between gap-6 p-6 md:flex ">
          <div className="flex-1">
            <div className="flex relative flex-col w-full rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}`}
                alt=""
                className="max-h-[75vh] object-cover rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 gap-6">
            <div className="w-full flex justify-between flex-wrap gap-6">
              <div className="flex flex-col gap-1">
                <div>
                  <h3 className="mediumTitle">{detailMovie?.title}</h3>
                </div>

                <span className="font-bold">
                  Avaliação:{' '}
                  {detailMovie && Math.floor(detailMovie?.vote_average)} / 10
                </span>
              </div>

              <div className="flex gap-4">
                <Button>
                  <Link
                    to={`https://www.youtube.com/results?search_query=${detailMovie?.title}`}
                    target="_blank"
                  >
                    Watch Trailer
                  </Link>
                </Button>

                <Button>
                  <Heart size={25} className="fill-white " />
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              {detailMovie?.genres?.map((gender) => (
                <span
                  key={gender.id}
                  className="px-2 py-1 rounded-lg bg-red-500 text-white font-bold"
                >
                  {gender.name}
                </span>
              ))}
            </div>
            <div className="flex flex-col pt-10 gap-6">
              <span className="mediumTitle">Overview</span>

              <p className="text-white leading-6 max-w-4xl">
                {detailMovie?.overview}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-white font-bold text-xl">Created By</span>
              <div className="flex gap-4 flex-wrap  max-w-3xl">
                {detailMovie?.production_companies?.map((company) => (
                  <span className="font-bold text-white text-center p-2 bg-red-500 rounded-lg ">
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <span className="mediumTitle text-center pt-10 md:text-start">
              Similar movies
            </span>

            <div className=" carousel max-w-full gap-6 rounded-box">
              {similarMovies.map((similarMovie) => (
                <Card
                  detail={similarMovie}
                  key={similarMovie.id}
                  className="carousel-item"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
