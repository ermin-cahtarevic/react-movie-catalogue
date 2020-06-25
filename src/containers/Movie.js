import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import fetchMovie from '../actions/fetchMovie';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const Movie = ({ movies, match, fetchMovie }) => {
  const { params: { id } } = match;
  const { movie } = movies;
  useEffect(() => {
    fetchMovie(id);
  }, [fetchMovie, id]);

  const div = (
    <div>Loading</div>
  );

  const element = (
    <div>
      <img src={imgBaseUrl + movie.poster_path} alt={movie.title} />
      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );

  return movie ? element : div;
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
