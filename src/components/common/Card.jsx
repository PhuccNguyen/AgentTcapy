// src/components/common/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  title,
  subtitle,
  className = '',
  elevation = 'medium',
  padding = 'medium',
  onClick,
  ...props
}) => {
  return (
    <div 
      className={`
        card 
        card-elevation-${elevation} 
        card-padding-${padding} 
        ${onClick ? 'card-clickable' : ''} 
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  elevation: PropTypes.oneOf(['low', 'medium', 'high']),
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  onClick: PropTypes.func
};

export default Card;