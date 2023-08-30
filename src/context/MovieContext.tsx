import React, { ReactNode, createContext, useState } from 'react';
import { api } from '../api/axios';

export const MovieContext = createContext({} as MovieContextProps);

interface MovieContextProps {}

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

export function MovieContextProvider({ children }: ChildrenProps) {
  {
  }

  return <MovieContext.Provider value={{}}>{children}</MovieContext.Provider>;
}
