import { api } from "../api/axios"
import { MoviesProps } from "../context/MovieContext";


interface apiMovieProps {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: MoviesProps[];
    total_pages: string;
    total_results: string;
}


export async function useGetAllMovies(params: string) {

    const { data } = await api.get<apiMovieProps>(`${params}`)

    const results = data.results

    return results
} 