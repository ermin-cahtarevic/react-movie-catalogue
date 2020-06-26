import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMovies from '../actions/fetchMovies';
import MovieItem from '../components/MovieItem';
import { clearMovie, clearTrailerId } from '../actions/index';
import '../styles/movie-list.css';
import Navbar from '../components/Navbar';

const MovieList = ({ movies, fetchMovies, clearMovie, clearTrailerId }) => {
  useEffect(() => {
    fetchMovies();
    clearMovie();
    clearTrailerId();
  }, [fetchMovies, clearMovie, clearTrailerId]);

  return (
    <div className="movie-list">
      <Navbar />
      <div className="movie-list-body">
        {
          /* eslint-disable react/prop-types */
          movies.movies.map(movie => (
            <MovieItem
              movie={movie}
              key={movie.id.toString()}
            />
          ))
          /* eslint-enable react/prop-types */
        }
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Object).isRequired,
  fetchMovies: PropTypes.func.isRequired,
  clearMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  clearMovie: () => dispatch(clearMovie()),
  clearTrailerId: () => dispatch(clearTrailerId()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
