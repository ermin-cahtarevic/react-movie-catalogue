import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchMovies from '../actions/fetchMovies';
import MovieItem from '../components/MovieItem';
import { clearMovie, clearTrailerId, changeFilter } from '../actions/index';
import Navbar from '../components/Navbar';
import GenreFilter from '../components/GenreFilter';
import '../styles/movie-list.css';
import genres from '../helpers/genres';

const MovieList = ({ movies, filter, fetchMovies, clearMovie, clearTrailerId, changeFilter }) => {
  useEffect(() => {
    fetchMovies();
    clearMovie();
    clearTrailerId();
  }, [fetchMovies, clearMovie, clearTrailerId]);

  const handleFilterChange = filter => changeFilter(filter);

  const filterId = Object.keys(genres).filter(key => genres[key] === filter)[0];

  const filtered = filter === 'All' ? movies.movies : movies.movies.filter(movie =>
    movie.genreIds.includes(parseInt(filterId))
  );


  return (
    <div className="movie-list">
      <Navbar />
      <div className="movie-list-body">
        <div className="movie-list-body-header">
          <h2>Popular movies</h2>
          <GenreFilter changeFilter={handleFilterChange} />
        </div>
        <div className="movie-list-movies">
          {
            /* eslint-disable react/prop-types */
            filtered.map(movie => (
              <MovieItem
                movie={movie}
                key={movie.id.toString()}
              />
            ))
            /* eslint-enable react/prop-types */
          }
        </div>
      </div>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.instanceOf(Object).isRequired,
  fetchMovies: PropTypes.func.isRequired,
  clearMovie: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies, filter }) => ({
  movies,
  filter,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  clearMovie: () => dispatch(clearMovie()),
  clearTrailerId: () => dispatch(clearTrailerId()),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
