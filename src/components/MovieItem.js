import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movie-item.css';
import { withRouter } from 'react-router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import genres from '../helpers/genres';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';
/* eslint-disable no-nested-ternary */

const MovieItem = ({ movie, history }) => {
  const showMovie = id => history.push(`/movie/${id}`);

  const genreList = movie.genreIds.map(gId => genres[gId]);

  return (
    <div
      className="movie-item"
      onClick={() => showMovie(movie.id)}
      onKeyDown={() => showMovie(movie.id)}
      role="button"
      tabIndex={0}
    >
      {
        movie.backdropPath ? (
          <img src={imgBaseUrl + movie.backdropPath} alt={movie.title} className="movie-item-img" />
        ) : (
          movie.posterPath ? (
            <img src={imgBaseUrl + movie.posterPath} alt={movie.title} className="movie-item-img" />
          ) : (
            <img src="/logo512.png" alt={movie.title} className="movie-item-img" />
          )

        )
      }

      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
      <div className="genre-list">
        {
          /* eslint-disable react/prop-types */
          genreList.map(genreType => (
            <span key={genreType} className="movie-item-genre">{genreType}</span>
          ))
          /* eslint-enable react/prop-types */
        }
      </div>
      {
        movie.voteAverage > 0 ? (
          <p className="rating">
            <FontAwesomeIcon
              icon={faStar}
              className="star-icon"
            />
            {movie.voteAverage}
          </p>
        ) : (
          <p className="rating">Upcoming</p>
        )
      }
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.instanceOf(Object).isRequired,
  history: PropTypes.instanceOf(Object).isRequired,
};

export default withRouter(MovieItem);
