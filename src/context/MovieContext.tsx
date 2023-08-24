import React, { ReactNode, createContext, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {
  nowPlayingMovies: MoviesProps[];
  bannerMovies: MoviesProps[];
  detailMovie: any;
  getMovies: () => void;
  getDetails: (id: string) => void;
  getUpcoming: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

export interface MoviesProps {
  id: string;
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
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MoviesProps[]>([]);
  const [bannerMovies, setBannerMovies] = useState<MoviesProps[]>([]);
  const [detailMovie, setDetailMovie] = useState();

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
    // const data = response.data.results;

    setDetailMovie(response.data);
  }

  return (
    <MovieContext.Provider
      value={{
        nowPlayingMovies,
        bannerMovies,
        detailMovie,
        getUpcoming,
        getDetails,
        getMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
