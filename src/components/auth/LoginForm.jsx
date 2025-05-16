// src/components/auth/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import Input from '../common/Input';
import './AuthForms.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    let errors = {};
    let isValid = true;
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }
    
    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const success = await login(formData);
      if (success) {
        navigate('/dashboard');
      }
    }
  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <Input
        type="email"
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        placeholder="your.email@example.com"
        error={formErrors.email}
        required
      />
      
      <Input
        type="password"
        name="password"
        label="Password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        error={formErrors.password}
        required
      />
      
      <div className="auth-form-options">
        <label className="checkbox-label">
          <input type="checkbox" name="remember" />
          <span className="checkbox-text">Remember me</span>
        </label>
        
        <a href="/forgot-password" className="forgot-password-link">
          Forgot password?
        </a>
      </div>
      
      {error && <div className="auth-error">{error}</div>}
      
      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      
      <div className="auth-divider">
        <span>OR</span>
      </div>
      
      <div className="social-login-buttons">
        <Button type="button" variant="outlined" className="google-button">
          <img src="/assets/images/google-icon.svg" alt="Google" />
          Login with Google
        </Button>
        
        <Button type="button" variant="outlined" className="facebook-button">
          <img src="/assets/images/facebook-icon.svg" alt="Facebook" />
          Login with Facebook
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;