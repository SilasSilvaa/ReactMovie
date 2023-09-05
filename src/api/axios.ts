import axios from "axios";

const apikey = import.meta.env.VITE_API_KEY

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: apikey
    },
    params: {
        language: 'pt-BR',
    }
})

