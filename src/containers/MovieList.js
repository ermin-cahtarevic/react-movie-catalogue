import React, { useEffect } from "react";
import fetchMovies from "../actions/fetchMovies";
import { connect } from "react-redux";
import MovieItem from '../components/MovieItem';
import { clearMovie } from '../actions/index';
import '../styles/movie-list.css';

const MovieList = ({ movies, fetchMovies, clearMovie }) => {
  useEffect(() => { 
    fetchMovies();
    clearMovie();
  }, [fetchMovies, clearMovie]);
  
  return (
    <div className="movie-list">
      <h1>Movie List</h1>
      <div className="movie-list-body">
        {
          movies.movies.map(movie => (
            <MovieItem
              movie={movie}
              key={movie.id.toString()}
            />
          ))
        }
      </div>
    </div>
  )
};

const mapStateToProps = ({ movies }) => ({
  movies
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(fetchMovies()),
  clearMovie: () => dispatch(clearMovie()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);