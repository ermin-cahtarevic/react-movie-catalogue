import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import fetchMovie from '../actions/fetchMovie';
import Navbar from '../components/Navbar';
import fetchTrailerId from '../actions/fetchTrailerId';
import '../styles/movie.css';

const imgBaseUrl = 'https://image.tmdb.org/t/p/w500';

const Movie = ({
  movies, match, fetchMovie, fetchTrailerId,
}) => {
  const { params: { id } } = match;
  const { movie } = movies;

  useEffect(() => {
    fetchMovie(id);
    fetchTrailerId(id);
  }, [fetchMovie, fetchTrailerId, id]);

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1, // 1 or 0 for autoplay on - off
    },
  };

  return (
    <div>
      <Navbar />
      <div className="movie-assets">
        <img src={imgBaseUrl + movie.poster_path} alt={movie.title} className="movie-poster" />
        <YouTube
          videoId={movies.trailerId}
          opts={opts}
          containerClassName="movie-trailer"
          className="trailer-video"
        />
      </div>
      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

Movie.propTypes = {
  movies: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  fetchMovie: PropTypes.func.isRequired,
  fetchTrailerId: PropTypes.func.isRequired,
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = dispatch => ({
  fetchMovie: id => dispatch(fetchMovie(id)),
  fetchTrailerId: id => dispatch(fetchTrailerId(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movie));
