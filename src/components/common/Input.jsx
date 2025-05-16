// src/components/common/Input.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  required = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {const [focused, setFocused] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const inputType = type === 'password' && passwordVisible ? 'text' : type;
  
  return (
    <div 
      className={`
        input-container 
        ${focused ? 'focused' : ''} 
        ${error ? 'has-error' : ''} 
        ${disabled ? 'disabled' : ''} 
        ${className}
      `}
    >
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
          {required && <span className="required-mark">*</span>}
        </label>
      )}
      
      <div className="input-field-container">
        {icon && <div className="input-icon">{icon}</div>}
        
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`input-field ${icon ? 'with-icon' : ''}`}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {type === 'password' && (
          <button 
            type="button" 
            className="password-toggle" 
            onClick={togglePasswordVisibility}
            tabIndex="-1"
          >
            {passwordVisible ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.node,
  className: PropTypes.string
};

export default Input;