import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchRecommendations from '../actions/fetchRecommendations';
import MovieItem from './MovieItem';
import '../styles/recommendations.css';

const Recommendations = ({ id, recommendations, fetchRecommendations }) => {
  useEffect(() => {
    fetchRecommendations(id);
  }, [fetchRecommendations, id]);

  return (
    <div>
      <h3 className="recommendations-header">Recommendations</h3>
      <div className="recommendations-list">
      {
        recommendations === null ? (
          <div>Error loading recommendations.</div>
        ) : (
          recommendations.map(movie => (
            <MovieItem
              movie={movie}
              key={movie.id.toString()}
            />
          ))
        )
      }
    </div>
    </div>
  )
};

const mapStateToProps = ({ recommendations }) => ({
  recommendations,
});

const mapDispatchToProps = dispatch => ({
  fetchRecommendations: id => dispatch(fetchRecommendations(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);