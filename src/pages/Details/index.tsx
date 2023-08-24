import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Card } from '../../components/Card/Card';
import { MovieContext } from '../../context/MovieContext';

export function Details() {
  const { id } = useParams();
  const { detailMovie, getDetails } = useContext(MovieContext);

  useEffect(() => {
    if (id) {
      getDetails(id);
    }
  }, []);

  console.log(detailMovie);

  return (
    <>
      <section className="contentCard pt-20 md:pt-0 md:p-12">
        <div className="flex flex-col w-full justify-between gap-6 p-6 md:flex ">
          <div className="flex-1">
            <div className="flex relative flex-col w-full rounded-lg">
              <img
                src={`https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}`}
                alt=""
                className="h-96 object-cover rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 gap-6">
            <div className="w-full flex justify-between flex-wrap gap-6">
              <div>
                <h3 className="mediumTitle">{detailMovie?.original_title}</h3>
                <span className="text-white">2022 | Action comedy</span>
              </div>
              <div className="flex gap-4">
                <Button>Watch Trailer</Button>

                <Button>
                  <Heart size={25} className="fill-white " />
                </Button>
              </div>
            </div>
            <div className="flex flex-col pt-10 gap-6">
              <span className="mediumTitle">Overview</span>

              <p className="text-white leading-6 max-w-4xl">
                {detailMovie?.overview}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <span className="mediumTitle text-center pt-10 md:text-start">
              Similar movies
            </span>

            <div className="contentCard">
              {/* {cards.map((card) => (
                <Card detail={card} />
              ))} */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
