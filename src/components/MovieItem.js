import React from 'react';
import '../styles/movie-item.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500'

const MovieItem = ({ movie }) => (
  <div className="movie-item">
    <img src={imgBaseUrl + movie.backdrop_path} alt={movie.original_title} className="movie-item-img" />
    <div className="movie-item-body">
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
    </div>
  </div>
);

export default MovieItem;