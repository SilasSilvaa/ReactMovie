export interface MoviesProps {
    id: string;
    title?: string;
    name?: string;
    poster_path?: string;
    logo_path?: string;
    backdrop_path?: string;
    release_date?: string;
    vote_average?: number;
}

export interface ApiMovieProps {
    dates: {
        maximum: string;
        minimum: string;
    };
    page: number;
    results: MoviesProps[];
    total_pages: string;
    total_results: string;
}

export interface DetailMovieProps {
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

