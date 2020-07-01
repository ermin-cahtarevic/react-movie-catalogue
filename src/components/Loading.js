import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Navbar from './Navbar';

const Loading = () => (
  <div className="loading-wrap">
    <Navbar />
    <div className="loading">
      <Loader
        type="TailSpin"
        color="#fff"
      />
    </div>
  </div>
);

export default Loading;
