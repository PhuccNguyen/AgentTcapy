// src/services/auth.js
import api from './api';

const authService = {
  // Login user
  login: async (credentials) => {
    try {
      // In a real app, this would make a call to your API
      // For now, we'll simulate it with a mock response
      
      // Uncomment this to use with a real API:
      // const response = await api.post('/auth/login', credentials);
      // return response;
      
      // Mock response for development
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            token: 'mock-jwt-token',
            user: {
              id: 1,
              fullName: 'Test User',
              email: credentials.email,
              avatarUrl: null,
              credits: 100
            }
          });
        }, 800);
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  
  // Register new user
  signup: async (userData) => {
    try {
      // In a real app, this would make a call to your API
      // For now, we'll simulate it with a mock response
      
      // Uncomment this to use with a real API:
      // const response = await api.post('/auth/signup', userData);
      // return response;
      
      // Mock response for development
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            token: 'mock-jwt-token',
            user: {
              id: 1,
              fullName: userData.fullName,
              email: userData.email,
              avatarUrl: null,
              credits: 100
            }
          });
        }, 800);
      });
    } catch (error) {
      throw new Error(error);
    }
  },
  
  // Get current user
  getCurrentUser: async () => {
    try {
      // In a real app, this would make a call to your API
      // For now, we'll simulate it with a mock response
      
      // Uncomment this to use with a real API:
      // const response = await api.get('/auth/me');
      // return response;
      
      // Mock response for development
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            fullName: 'Test User',
            email: 'user@example.com',
            avatarUrl: null,
            credits: 100
          });
        }, 400);
      });
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default authService;