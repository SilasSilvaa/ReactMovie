import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjBhOWFmZGM2YjFjZDNiZWY1OGY1OWNmNmZkYmJjZiIsInN1YiI6IjY0ZGMwZGRhZjQ5NWVlMDI5MjUxMTVkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukNdix_J_GcuBkNqiwzdFmsDMMoKo4Uff7O79Ls9Pwc'
    },
    params: {
        language: 'pt-BR',
    }
})

