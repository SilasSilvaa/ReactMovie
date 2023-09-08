import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Heart } from '@phosphor-icons/react';
import { Card } from '../../components/Card/Card';
import { useQuery } from 'react-query';
import { useGetDetails } from '../../hooks/useGetDetails';
import { useGetAllMovies } from '../../hooks/useGetAllMovies';
import { BannerSkeleton } from '../../components/SkeletonComponents/BannerSkeleton/BannerSkeleton';
import { CardSkeleton } from '../../components/SkeletonComponents/CardSkeleton/CardSkeleton';

export function Details() {
  const { id } = useParams();

  const {
    data: detail,
    refetch: refechaDetails,
    isLoading: isLoadingDetails,
  } = useGetDetails('details', `movie/${id}`);

  const {
    data: recomendations,
    refetch: refechRecomendatiion,
    isLoading: isLoadingRecomendations,
  } = useGetAllMovies('recomendations', `movie/${id}/recommendations`);

  useEffect(() => {
    refechaDetails();
    refechRecomendatiion();
  }, [id]);

  return (
    <>
      <section className="contentCard pt-20 md:pt-0 md:p-4">
        <div className="flex flex-col w-full justify-between gap-6 p-6 md:flex ">
          <div className="flex-1">
            <div className="flex relative flex-col w-full rounded-lg">
              <div className="absolute top-2 left-2">
                <Link to={'/'}>
                  <Button className="px-4 py-2">Voltar</Button>
                </Link>
              </div>
              {isLoadingDetails ? (
                <BannerSkeleton contents={false} />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/original/${detail?.backdrop_path}`}
                  alt=""
                  className="max-h-[75vh] object-cover rounded-lg"
                />
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 gap-6">
            <div className="w-full flex justify-between flex-wrap gap-6">
              <div className="flex flex-col gap-1">
                <div>
                  <h3 className="mediumTitle">{detail?.title}</h3>
                </div>

                <span className="font-bold text-white">
                  Avaliação: {detail && Math.floor(detail?.vote_average)} / 10
                </span>
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
              <div className="flex gap-4 flex-wrap  max-w-3xl">
                {detail?.production_companies?.map((company) => (
                  <span
                    key={company.id}
                    className="font-bold text-white text-center p-2 bg-red-500 rounded-lg "
                  >
                    {company.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <span className="mediumTitle pt-10 md:text-start">
              Similar movies
            </span>

            <div className=" carousel max-w-full gap-6 rounded-box">
              {isLoadingRecomendations ? (
                <>
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                  <CardSkeleton />
                </>
              ) : (
                recomendations?.map((similarMovie) => (
                  <Card
                    detail={similarMovie}
                    key={similarMovie.id}
                    className="carousel-item"
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
