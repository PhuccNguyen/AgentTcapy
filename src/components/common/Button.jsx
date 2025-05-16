// src/components/common/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  as: Component = 'button',
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`
        button 
        button-${variant} 
        button-${size} 
        ${fullWidth ? 'button-full-width' : ''}
        ${disabled ? 'button-disabled' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'text', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  as: PropTypes.elementType,
  className: PropTypes.string
};

export default Button;