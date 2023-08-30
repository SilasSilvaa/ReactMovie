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

    const response = await api.get<apiMovieProps>(`${params}`)

    const data = response.data.results

    return data
} 