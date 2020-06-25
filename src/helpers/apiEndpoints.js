const apiKey = 'fa8db0e137149da641b63119953e0b8a'

export const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

export const movieDetailsUrl = id => `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;