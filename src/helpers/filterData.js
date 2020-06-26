const filterMovies = data => {
  let result = []
  data.map(movie => (
    result.push({
      backdropPath: movie.backdrop_path,
      id: movie.id,
      genreIds: movie.genre_ids.slice(0, 3),
      title: movie.title,
      voteAverage: movie.vote_average,
      overview: movie.overview,
    })
  ));

  return result; 
}

export { filterMovies };