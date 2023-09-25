import { useQuery } from 'react-query';
import { api } from '../api/axios';
import { ApiMovieProps } from '../Interfaces/IMoviesProps';

export function useGetAllMovies(saveData: string, movieSearch: string) {
  return useQuery(saveData, async () => {
    const { data } = await api.get<ApiMovieProps>(movieSearch, {
      params: {
        language: 'en-US',
      },
    });
    const dataMovies = data.results;

    sessionStorage.setItem(saveData, JSON.stringify(dataMovies));

    return dataMovies;
  });
}
