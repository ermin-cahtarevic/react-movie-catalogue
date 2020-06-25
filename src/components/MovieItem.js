import React from 'react';
import PropTypes from 'prop-types';
import '../styles/movie-item.css';
import { withRouter } from 'react-router';
import genres from '../helpers/genres';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieItem = ({ movie, history }) => {
  const showMovie = id => history.push(`/movie/${id}`);

  return (
    <div
      className="movie-item"
      onClick={() => showMovie(movie.id)}
      onKeyDown={() => showMovie(movie.id)}
      role="button"
      tabIndex={0}
    >
      <img src={imgBaseUrl + movie.backdrop_path} alt={movie.title} className="movie-item-img" />
      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        {
          /* eslint-disable react/prop-types */
          movie.genre_ids.map(gId => (
            <span key={gId} className="movie-item-genre">{genres[gId]}</span>
          ))
          /* eslint-enable react/prop-types */
        }
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      genre_ids: PropTypes.instanceOf(Array),
    }),
  ).isRequired,
  history: PropTypes.objectOf(
    PropTypes.shape({
      push: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default withRouter(MovieItem);
