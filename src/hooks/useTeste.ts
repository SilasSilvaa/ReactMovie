import { useQuery } from 'react-query'
import { api } from "../api/axios"
import { ApiMovieProps } from "../Interfaces/IMoviesProps";

export function useTeste(saveData: string, movieSearch: string, page: number) {
    return useQuery(saveData, async () => {
        const { data } = await api.get<ApiMovieProps>(movieSearch, {
            params: {
                page: page
            }
        });

        const dataMovies = data.results;

        return dataMovies;
    });
} 