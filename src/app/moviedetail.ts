export interface MovieDetail {
    adult: boolean;
    backdrop_path: string;
    budget: number;
    genres: Array<string>;
    homepage: string;
    id: number;
    original_title: string;
    overview: string;
    original_language: string;
    poster_path: string;
    production_companies: Array<string>;
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Array<string>;
    tagline: string;
    vote_average: number;
}