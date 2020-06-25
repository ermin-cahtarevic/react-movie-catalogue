import React, { useEffect } from "react";
import fetchMovies from "../actions/fetchMovies";
import { connect } from "react-redux";
import MovieItem from '../components/MovieItem';
import '../styles/movie-list.css';

const MovieList = ({ movies, fetchMovies }) => {
  useEffect(() => { fetchMovies(); }, [fetchMovies]);
  
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);