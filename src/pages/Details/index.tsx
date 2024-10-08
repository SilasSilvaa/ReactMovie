import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Card } from '../../components/Card/Card';
import { useGetDetails } from '../../hooks/useGetDetails';
import { BannerSkeleton } from '../../components/SkeletonComponents/BannerSkeleton/BannerSkeleton';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { MoviesProps } from '../../Interfaces/IMoviesProps';
import { CardSkeleton } from '../../components/SkeletonComponents/CardSkeleton/CardSkeleton';
import { DetailMovieSkeleton } from '../../components/SkeletonComponents/DetailMovieSkeleton/DetailMovieSkeleton';

export function Details() {
  const { id } = useParams();
  const sessionData = sessionStorage.getItem('upComingMovies');
  const upComingMovies: MoviesProps[] = sessionData && JSON.parse(sessionData);
  const bannerRef = useRef<HTMLDivElement | null>(null);

  const {
    data: detail,
    refetch: refechaDetails,
    isLoading: isLoadingDetails,
    isFetching,
  } = useGetDetails('details', `movie/${id}`);

  const { data: recomendations, refetch: refechRecomendatiion } =
    useGetAllMovies('recomendations', `movie/${id}/recommendations`);

  useEffect(() => {
    bannerRef?.current?.focus();

    refechaDetails();
    refechRecomendatiion();
  }, [id]);

  return (
    <>
      <section className="contentCard pt-24 lg:pt-0">
        <div className="flex flex-col w-full justify-between gap-6 md:flex ">
          <div
            className="flex flex-1 outline-none md:p-2"
            ref={bannerRef}
            tabIndex={0}
          >
            <div className="relative flex w-full flex-col items-center justify-center">
              <div className="absolute top-2 left-2">
                <Link to={'/'}>
                  <Button className="px-4 py-2">Voltar</Button>
                </Link>
              </div>

              {isFetching ? (
                <BannerSkeleton contents={false} />
              ) : detail?.backdrop_path === null ? (
                <>
                  <span className="absolute text-white">
                    This movie no has image
                  </span>
                  <img
                    src={'/src/assets/notImageMovie.jpg'}
                    alt=""
                    className="w-full max-h-[75vh] object-cover rounded-lg"
                  />
                </>
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
                  alt=""
                  className="w-full object-cover h-[70vh] md:rounded-lg"
                />
              )}
            </div>
          </div>

          {isFetching ? (
            <DetailMovieSkeleton />
          ) : (
            <div className="flex flex-col justify-center flex-1 gap-6 p-4">
              <div className="w-full flex justify-between flex-wrap gap-6">
                <div className="flex flex-col gap-1">
                  <div>
                    <h3 className="mediumTitle">{detail?.title}</h3>
                  </div>

                  {detail?.vote_average === 0 ? (
                    <span className="font-bold text-white">
                      This movie has no reviews
                    </span>
                  ) : (
                    <span className="font-bold text-white">
                      Rating: {detail && Math.floor(detail?.vote_average)} / 10
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  <Link
                    to={`https://www.youtube.com/results?search_query=${detail?.title}`}
                    target="_blank"
                  >
                    <Button>Watch Trailer</Button>
                  </Link>
                  <div>
                    <Button>
                      <Heart size={25} className="fill-white " />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {detail?.genres?.map((gender) => (
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
                  {detail?.overview}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-white font-bold text-xl">Created By</span>
                <div className="flex gap-4 flex-wrap max-w-3xl">
                  {detail?.production_companies?.length === 0 ? (
                    <span>No creator of this movie found</span>
                  ) : (
                    detail?.production_companies?.map((company) => (
                      <span
                        key={company.id}
                        className="font-bold text-white text-center p-2 bg-red-500 rounded-lg "
                      >
                        {company.name}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col items-center justify-center gap-6 p-4">
            <span className="mediumTitle pt-10 md:text-start">
              {recomendations?.length === 0 ? 'Upcoming' : 'Similar movies'}
            </span>
            <div className=" carousel max-w-full gap-6 rounded-box">
              {recomendations?.length === 0
                ? upComingMovies.map((upComingMoive) => (
                    <Card
                      detail={upComingMoive}
                      key={upComingMoive.id}
                      className="carousel-item"
                    />
                  ))
                : recomendations?.map((similarMovie) => (
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
