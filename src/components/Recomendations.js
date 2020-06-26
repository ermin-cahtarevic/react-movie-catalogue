import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchRecomendations from '../actions/fetchRecomendations';
import MovieItem from './MovieItem';
import '../styles/recomendations.css';

const Recomendations = ({ id, recomendations, fetchRecomendations }) => {
  useEffect(() => {
    fetchRecomendations(id);
  }, [fetchRecomendations, id]);

  return (
    <div className="recomendations-list">
      {
        recomendations.map(movie => (
          <MovieItem
            movie={movie}
            key={movie.id.toString()}
          />
        ))
      }
    </div>
  )
};

const mapStateToProps = ({ recomendations }) => ({
  recomendations,
});

const mapDispatchToProps = dispatch => ({
  fetchRecomendations: id => dispatch(fetchRecomendations(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recomendations);