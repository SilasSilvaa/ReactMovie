import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  movies: MoviesProps[];
  bannerMovies: any;
  getMoviesNowPlaying: () => void;
  getUpcoming: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export interface MoviesProps {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_count: number;
  adult?: boolean;
  genre_ids?: number[];
  original_language?: string;
  popularity?: number;
  video?: boolean;
  vote_average?: number;
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
  const [movies, setMovies] = useState<MoviesProps[]>([]);
  const [bannerMovies, setBannerMovies] = useState<MoviesProps[]>([]);

  async function getMoviesNowPlaying() {
    const resposne = await api.get<getMovieProps>('movie/now_playing', {
      params: {
        language: 'pt-BR',
      },
    });

    const data = resposne.data.results;

    setMovies(data);
  }

  async function getUpcoming() {
    const response = await api.get<getMovieProps>('movie/upcoming', {
      params: {
        language: 'pt-BR',
      },
    });
    const data = response.data.results;

    const randomMovies = [...data].sort(() => Math.random() - 0.5);
    const currentMovies = randomMovies.slice(0, 3);

    setBannerMovies(currentMovies);
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        bannerMovies,
        getUpcoming,
        getMoviesNowPlaying,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
