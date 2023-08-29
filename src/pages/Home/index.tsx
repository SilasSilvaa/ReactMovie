import React, { useContext, useEffect } from 'react';
import { Banner } from '../../components/Banner/Banner';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { MovieContext, MoviesProps } from '../../context/MovieContext';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';

export function Home() {
  const { getMovies } = useContext(MovieContext);

  const { data, error } = useQuery('movies', getMovies);

  return (
    <>
      <section className="flex flex-col gap-4 pt-20 lg:pt-0">
        {/* <ButtonToggleTheme /> */}
        <Banner />

        <div className="containerCard">
          <p className="mediumTitle">Trending</p>
          <div className="contentCard">
            <div className="carousel max-w-full gap-6 rounded-box">
              {data?.map((movie) => (
                <Card detail={movie} key={movie.id} className="carousel-item" />
              ))}
            </div>
            <div className="w-full flex justify-end p-2">
              <Button>
                <NavLink to={'/all/trending'}>View All</NavLink>
              </Button>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <p className="mediumTitle">In High</p>
          <div className="contentCard">
            {/* <div className="carousel max-w-full gap-6 rounded-box">
              {nowPlayingMovies.map((movie) => (
                <Card detail={movie} key={movie.id} className="carousel-item" />
              ))}
            </div> */}
            <Button>
              <NavLink to={'/all/in_high'}>View All</NavLink>
            </Button>
          </div>
        </div>

        <div className="containerCard">
          <p className="mediumTitle">Top films</p>
          <div className="contentCard">
            {/* <div className="carousel max-w-full gap-6 rounded-box">
              {nowPlayingMovies.map((movie) => (
                <Card detail={movie} key={movie.id} className="carousel-item" />
              ))}
            </div> */}
            <div className="w-full flex justify-end p-2">
              <Button>
                <NavLink to={'/all/top_films'}>View All</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
