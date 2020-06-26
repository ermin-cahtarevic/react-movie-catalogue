const filterMovies = data => {
  const result = [];
  data.map(movie => (
    result.push({
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      id: movie.id,
      genreIds: movie.genre_ids.slice(0, 3),
      title: movie.title,
      voteAverage: movie.vote_average,
      overview: movie.overview,
    })
  ));

  return result;
};

const filterMovie = data => ({
  backdropPath: data.backdrop_path,
  genres: data.genres,
  homepage: data.homepage,
  id: data.id,
  overview: data.overview,
  posterPath: data.poster_path,
  releaseDate: data.release_date,
  runtime: data.runtime,
  tagline: data.tagline,
  title: data.title,
  voteAverage: data.vote_average,
});

export { filterMovies, filterMovie };
