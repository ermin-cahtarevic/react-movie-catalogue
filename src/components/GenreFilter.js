import React from 'react';
import PropTypes from 'prop-types';
import genres from '../helpers/genres';
import '../styles/genre-filter.css';

const genreList = ['All', ...Object.values(genres)];

const GenreFilter = ({ changeFilter }) => (
  <select className="genre-filter" onChange={e => changeFilter(e.target.value)}>
    {
      genreList.map(genre => (
        <option key={genre} value={genre}>{genre}</option>
      ))
    }
  </select>
);

GenreFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default GenreFilter;
