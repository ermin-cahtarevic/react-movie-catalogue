import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchRecommendations from '../actions/fetchRecommendations';
import MovieItem from './MovieItem';
import '../styles/recommendations.css';

const Recommendations = ({ id, recommendations, fetchRecommendations }) => {
  useEffect(() => {
    fetchRecommendations(id);
  }, [fetchRecommendations, id]);

  return (
    <div className="recommendations">
      <h3 className="recommendations-header">Recommendations</h3>
      <div className="recommendations-list">
        {
        recommendations.length < 1 ? (
          <div>No recommendations found.</div>
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
  );
};

Recommendations.propTypes = {
  id: PropTypes.number.isRequired,
  recommendations: PropTypes.instanceOf(Object).isRequired,
  fetchRecommendations: PropTypes.func.isRequired,
};

const mapStateToProps = ({ recommendations }) => ({
  recommendations,
});

const mapDispatchToProps = dispatch => ({
  fetchRecommendations: id => dispatch(fetchRecommendations(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);
