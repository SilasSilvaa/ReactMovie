import { DetailMovieProps } from "../Interfaces/IMoviesProps";
import { api } from "../api/axios";




export async function useGetDetails(id: string) {
    const { data } = await api.get<DetailMovieProps>(`movie/${id}`);

    return data
}
