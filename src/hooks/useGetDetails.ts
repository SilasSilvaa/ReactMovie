import { api } from "../api/axios";


interface DetailMovieProps {
    id: number;
    title: string;
    overview?: string;
    backdrop_path?: string;
    genres?: [
        {
            id: number;
            name: string;
        }
    ];
    homepage?: string;
    production_companies?: [
        {
            id: number;
            logo_path: string | null;
            name: string;
            origin_country: string;
        }
    ];
    release_date?: string;
    vote_average: number;
}



export async function useGetDetails(id: string) {
    const response = await api.get<DetailMovieProps>(`movie/${id}`);

    const data = response.data

    return data
}
