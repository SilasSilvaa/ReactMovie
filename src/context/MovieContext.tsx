import React, { ReactNode, createContext, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  // detailMovie: DetailMovieProps | undefined;
  getMovies: () => Promise<MoviesProps[]>;
  getUpcoming: () => Promise<MoviesProps[]>;
  getDetails: (id: string) => Promise<DetailMovieProps>;
  getRecommendations: (id: string) => Promise<MoviesProps[]>;
}

interface ChildrenProps {
  children: ReactNode;
}

export interface MoviesProps {
  id: string;
  title?: string;
  name?: string;
  poster_path?: string;
  logo_path?: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
}

interface DetailMovieProps {
  id: number;
  title: string;
  overview?: string;
  backdrop_path?: string;
  genres?: [
    {
      id: number;
      name: string;
    }
  ];
  homepage?: string;
  production_companies?: [
    {
      id: number;
      logo_path: string | null;
      name: string;
      origin_country: string;
    }
  ];
  release_date?: string;
  vote_average: number;
}

interface getMovieProps {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MoviesProps[];
  total_pages: string;
  total_results: string;
}

export function MovieContextProvider({ children }: ChildrenProps) {
  const [detailMovie, setDetailMovie] = useState<
    DetailMovieProps | undefined
  >();

  async function getMovies() {
    const resposne = await api.get<getMovieProps>('movie/now_playing');

    const data = resposne.data.results;

    return data;
  }

  async function getUpcoming() {
    const response = await api.get<getMovieProps>('movie/upcoming');
    const data = response.data.results;

    return data;
    // for (let i = 0; i < 3; i++) {
    //   const randowMovie = [Math.floor(Math.random() * data.length)];
    //   return [...randowMovie, randowMovie];
    // }

    // return randowMovie;
  }

  async function getDetails(id: string) {
    const response = await api.get(`movie/${id}`);

    return response.data;
  }

  async function getRecommendations(id: string) {
    const response = await api.get<getMovieProps>(
      `movie/${id}/recommendations`
    );

    const data = response.data.results;
    return data;
  }

  return (
    <MovieContext.Provider
      value={{
        getUpcoming,
        getDetails,
        getMovies,
        getRecommendations,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
