import React from 'react';
import '../styles/movie-item.css';
import { withRouter } from 'react-router';
import { genres } from '../helpers/genres';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieItem = props => {
  const { movie } = props;
  const showMovie = (id) => props.history.push(`/movie/${id}`)

  return (
    <div className="movie-item" onClick={() => showMovie(movie.id)}>
      <img src={imgBaseUrl + movie.backdrop_path} alt={movie.title} className="movie-item-img" />
      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        {
          movie.genre_ids.map(gId => (
            <span className="movie-item-genre">{genres[gId]}</span>
          ))
        }
      </div>
    </div>
  )
};

export default withRouter(MovieItem);