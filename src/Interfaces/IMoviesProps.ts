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

export interface ProductCompaniesProps {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface GendersProps {
  id: number;
  name: string;
}

export interface DetailMovieProps {
  id: number;
  title: string;
  overview?: string;
  backdrop_path?: string;
  genres?: GendersProps[];
  homepage?: string;
  production_companies?: ProductCompaniesProps[];
  release_date?: string;
  vote_average: number;
}
