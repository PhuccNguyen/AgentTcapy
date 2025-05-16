// src/components/common/Loader.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Loader.css';

const Loader = ({ size = 'medium', color = 'primary', fullScreen = false, text = 'Loading...' }) => {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className={`loader-spinner loader-${size} loader-${color}`}></div>
        {text && <p className="loader-text">{text}</p>}
      </div>
    );
  }
  
  return (
    <div className="loader-container">
      <div className={`loader-spinner loader-${size} loader-${color}`}></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['primary', 'secondary', 'white']),
  fullScreen: PropTypes.bool,
  text: PropTypes.string
};

export default Loader;