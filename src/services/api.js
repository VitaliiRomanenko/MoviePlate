// This file provides functions to interact with The Movie Database (TMDb) API,
// including fetching popular movies, searching for movies, and getting top-rated movies.

const API_KEY = "2629912c18f14309a5817d6eec6755a9";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjI5OTEyYzE4ZjE0MzA5YTU4MTdkNmVlYzY3NTVhOSIsIm5iZiI6MTc1MDY5ODA1NS42NDEsInN1YiI6IjY4NTk4ODQ3NmE3Y2M3ZjMzNDZiYTc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jcPE-biF-Pg_k23uXXLzEFM7MsBEL-9XpNcBGUO3A7Y";
const BASE_URL = "https://api.themoviedb.org/3"

// Fetches a list of popular movies from TMDb
export const getPopularMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_TOKEN
        }
    }
    const response = await fetch(url, options);
    const data = await response.json()
    return data.results
}

// Searches for movies by a given query string
export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
}

// Fetches a list of top-rated movies from TMDb
export const getTopRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_TOKEN
        }
    }
    const response = await fetch(url, options);
    const data = await response.json()
    return data.results
};

export const getMowPlaying = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + API_TOKEN
        }
    }
    const response = await fetch(url, options);
    const data = await response.json()
    return data.results
};