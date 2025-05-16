// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Check if user is already logged in
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const userData = await authService.getCurrentUser(token);
          setUser(userData);
        }
      } catch (err) {
        console.error('Authentication error:', err);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    
    checkAuthStatus();
  }, []);
  
  const login = async (credentials) => {
    try {
      setLoading(true);
      setError(null);
      const { token, user } = await authService.login(credentials);
      localStorage.setItem('token', token);
      setUser(user);
      return true;
    } catch (err) {
      setError(err.message || 'Login failed');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const signup = async (userData) => {
    try {
      setLoading(true);
      setError(null);
      const { token, user } = await authService.signup(userData);
      localStorage.setItem('token', token);
      setUser(user);
      return true;
    } catch (err) {
      setError(err.message || 'Signup failed');
      return false;
    } finally {
      setLoading(false);
    }
  };
  
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };
  
  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};