import { useQuery } from 'react-query'
import { api } from "../api/axios";
import { DetailMovieProps } from "../Interfaces/IMoviesProps";


export function useGetDetails(saveData, movieSearch: string) {

    return useQuery(saveData, async () => {
        const { data } = await api.get<DetailMovieProps>(movieSearch);


        return data;
    });
}
