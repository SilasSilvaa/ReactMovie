import { useQuery } from 'react-query'
import { api } from "../api/axios"
import { ApiMovieProps } from "../Interfaces/IMoviesProps";

export function useTeste(saveData: string, movieSearch: string, page: number, totalpage?: number) {
    return useQuery(saveData, async () => {
        const { data } = await api.get<ApiMovieProps>(movieSearch, {
            params: {
                page: page
            }
        });

        if(totalpage){
            
            const dataMovies = data.results.slice(0, totalpage)

            return dataMovies
        }

        const dataMovies = data.results;

        return dataMovies;
    });
} 