import { apiMovieProps } from "../Interfaces/IMoviesProps";
import { api } from "../api/axios"


export async function useGetAllMovies(params: string) {

    const { data } = await api.get<apiMovieProps>(`${params}`)

    const results = data.results

    return results
} 