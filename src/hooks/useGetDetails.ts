import { useQuery } from 'react-query';
import { api } from '../api/axios';
import { DetailMovieProps } from '../Interfaces/IMoviesProps';

export function useGetDetails(saveData: string, movieSearch: string) {
  return useQuery(saveData, async () => {
    const { data } = await api.get<DetailMovieProps>(movieSearch, {
      params: {
        language: 'en-US',
      },
    });

    return data;
  });
}
