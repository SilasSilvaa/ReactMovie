import React, { ReactNode, createContext, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  nowPlayingMovies: MoviesProps[];
  bannerMovies: MoviesProps[];
  detailMovie: DetailMovieProps | undefined;
  similarMovies: MoviesProps[];
  getMovies: () => void;
  getUpcoming: () => void;
  getDetails: (id: string) => void;
  getSimilarMovies: (id: string) => void;
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
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MoviesProps[]>([]);
  const [bannerMovies, setBannerMovies] = useState<MoviesProps[]>([]);
  const [similarMovies, setSimilarMovies] = useState<MoviesProps[]>([]);
  const [detailMovie, setDetailMovie] = useState<
    DetailMovieProps | undefined
  >();

  async function getMovies() {
    const resposne = await api.get<getMovieProps>('movie/now_playing');

    const data = resposne.data.results;

    setNowPlayingMovies(data);
  }

  async function getUpcoming() {
    const response = await api.get<getMovieProps>('movie/upcoming');
    const data = response.data.results;

    for (let i = 0; i < 3; i++) {
      const randowMovie = data[Math.floor(Math.random() * data.length)];
      setBannerMovies((state) => [...state, randowMovie]);
    }
  }

  async function getDetails(id: string) {
    const response = await api.get(`movie/${id}`);

    setDetailMovie(response.data);
  }

  async function getSimilarMovies(id: string) {
    const response = await api.get<getMovieProps>(`movie/${id}/similar`);

    const data = response.data.results;
    setSimilarMovies(data);
  }

  return (
    <MovieContext.Provider
      value={{
        nowPlayingMovies,
        bannerMovies,
        detailMovie,
        similarMovies,
        getUpcoming,
        getDetails,
        getMovies,
        getSimilarMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
