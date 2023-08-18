import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  movies: MoviesProps[];
  getMoviesNowPlaying: () => void;
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

  useEffect(() => {
    getMoviesNowPlaying();
  }, []);

  async function getMoviesNowPlaying() {
    const resposne = await api.get<getMovieProps>('movie/now_playing', {
      params: {},
    });

    const data = resposne.data.results;

    setMovies(data);
  }

  return (
    <MovieContext.Provider
      value={{
        movies,
        getMoviesNowPlaying,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
