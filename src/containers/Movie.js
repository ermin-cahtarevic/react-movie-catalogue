import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetchMovie from '../actions/fetchMovie';
import Navbar from '../components/Navbar';
import Recommendations from '../components/Recommendations';
import fetchTrailerId from '../actions/fetchTrailerId';
import FourOFour from '../components/404';
import '../styles/movie.css';
import Loading from '../components/Loading';

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

  let date = 'Loading...';

  const getDate = () => {
    if (movie.releaseDate) {
      const dateSplit = movie.releaseDate.split('-');
      date = `${dateSplit[2]} / ${dateSplit[1]} / ${dateSplit[0]}`;
    }
    return date;
  };

  if (movies.movieLoading) {
    return <Loading />;
  }

  const view = movie ? (
    <div className="movie-page">
      <Navbar />
      <div className="movie-assets">
        {
          movie.posterPath ? (
            <img src={imgBaseUrl + movie.posterPath} alt={movie.title} className="movie-poster" />
          ) : (
            <div className="fake-img">No image found</div>
          )
        }
        {
          movies.trailerId ? (
            <YouTube
              videoId={movies.trailerId}
              opts={opts}
              containerClassName="movie-trailer"
              className="trailer-video"
            />
          ) : (
            <div className="fake-video">No video trailer found</div>
          )
        }
      </div>
      <div className="movie-details-body">
        <div className="movie-details-first-line">
          <h3 className="movie-details-title">{movie.title}</h3>
          <div className="movie-details-rating">
            <FontAwesomeIcon
              icon={faStar}
              className="star-icon"
            />
            {
              movie.voteAverage > 0 ? (
                movie.voteAverage
              ) : (
                'Upcoming'
              )
            }
          </div>
        </div>
        {
          movie.tagline ? (
            <p className="movie-details-tagline">
              &quot;
              {movie.tagline}
              &quot;
            </p>
          ) : null
        }
        <p className="movie-details-overview">{movie.overview}</p>
        <div className="movie-genre-list">
          {
            movie.genres ? (
              movie.genres.map(genre => (
                <span key={genre.id} className="movie-details-genre">{genre.name}</span>
              ))) : (
                <div>Loading...</div>
            )
          }
        </div>
        <a href={movie.homepage} className="movie-details-homepage">Movie homepage</a>
        <div className="movie-details-release-date">
          Release date -
          {getDate()}
        </div>
      </div>
      <Recommendations id={movie.id} />
    </div>
  ) : (
    <FourOFour />
  );

  return view;
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
