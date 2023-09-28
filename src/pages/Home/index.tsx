import React from 'react';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';

import { Link } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { Banner } from '../../components/Banner/Banner';
import { Button } from '../../components/Button/Button';
import { BannerSkeleton } from '../../components/SkeletonComponents/BannerSkeleton/BannerSkeleton';
import { CardSkeleton } from '../../components/SkeletonComponents/CardSkeleton/CardSkeleton';

export function Home() {
  const { data: nowPlayingMovies, isLoading: isLoagingNowPlaying } =
    useGetAllMovies('nowPlayingMovies', 'movie/now_playing');

  const { data: upComingMovies, isLoading: isLoagingUpComing } =
    useGetAllMovies('upComingMovies', 'movie/upcoming');

  const { data: topRatedMovies, isLoading: isLoadingTopRated } =
    useGetAllMovies('topRatedMovies', 'movie/top_rated');

  return (
    <>
      <section className="relative flex flex-col gap-4 pt-24 lg:pt-0">
        <div className="md:p-2">
          {isLoagingUpComing ? (
            <BannerSkeleton contents />
          ) : (
            upComingMovies && <Banner data={upComingMovies} isFilter />
          )}
        </div>
        <div className="containerCard">
          <p className="mediumTitle">Upcoming</p>
          <div className="contentCard">
            <div className="carousel max-w-full gap-6 rounded-box">
              {isLoagingUpComing ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : (
                upComingMovies?.map((movie) => (
                  <Card
                    detail={movie}
                    key={movie.id}
                    className="carousel-item"
                  />
                ))
              )}
            </div>
            <div className="w-full flex justify-end p-2">
              <Link to={'/all/trending'}>
                <Button>View All</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="containerCard">
          <p className="mediumTitle">Now playing</p>
          <div className="contentCard">
            <div className="carousel max-w-full gap-6 rounded-box">
              {isLoagingNowPlaying ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : (
                nowPlayingMovies?.map((movie) => (
                  <Card
                    detail={movie}
                    key={movie.id}
                    className="carousel-item"
                  />
                ))
              )}
            </div>
            <div className="w-full flex justify-end p-2">
              <Link to={'/all/in_high'}>
                <Button>View All</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="containerCard">
          <p className="mediumTitle">Top films</p>
          <div className="contentCard">
            <div className="carousel max-w-full gap-6 rounded-box">
              {isLoadingTopRated ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : (
                topRatedMovies?.map((movie) => (
                  <Card
                    detail={movie}
                    key={movie.id}
                    className="carousel-item"
                  />
                ))
              )}
            </div>
            <div className="w-full flex justify-end p-2">
              <Link to={'/all/top_films'}>
                <Button>View All</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
