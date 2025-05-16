// src/components/auth/SignupForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import Input from '../common/Input';
import './AuthForms.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const { signup, loading, error } = useAuth();
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
    
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
      isValid = false;
    }
    
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
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
      isValid = false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const success = await signup({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      
      if (success) {
        navigate('/dashboard');
      }
    }
  };
  
  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate>
      <Input
        type="text"
        name="fullName"
        label="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="John Doe"
        error={formErrors.fullName}
        required
      />
      
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
        placeholder="Create a strong password"
        error={formErrors.password}
        required
      />
      
      <Input
        type="password"
        name="confirmPassword"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Re-enter your password"
        error={formErrors.confirmPassword}
        required
      />
      
      <div className="auth-form-options">
        <label className="checkbox-label">
          <input type="checkbox" name="termsAgreed" required />
          <span className="checkbox-text">
            I agree to the{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
          </span>
        </label>
      </div>
      
      {error && <div className="auth-error">{error}</div>}
      
      <Button 
        type="submit" 
        variant="primary" 
        fullWidth 
        disabled={loading}
      >
        {loading ? 'Creating account...' : 'Create Account'}
      </Button>
      
      <div className="auth-divider">
        <span>OR</span>
      </div>
      
      <div className="social-login-buttons">
        <Button type="button" variant="outlined" className="google-button">
          <img src="/assets/images/google-icon.svg" alt="Google" />
          Sign up with Google
        </Button>
        
        <Button type="button" variant="outlined" className="facebook-button">
          <img src="/assets/images/facebook-icon.svg" alt="Facebook" />
          Sign up with Facebook
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;