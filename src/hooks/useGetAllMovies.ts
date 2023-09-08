import { useQuery } from 'react-query'
import { api } from "../api/axios"
import { ApiMovieProps } from "../Interfaces/IMoviesProps";

export function useGetAllMovies(saveData: string, movieSearch: string) {
    return useQuery(saveData, async () => {
        const { data } = await api.get<ApiMovieProps>(movieSearch);

        const dataMovies = data.results;

        return dataMovies;
    });
} 