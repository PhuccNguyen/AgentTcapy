// src/pages/LoginPage.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import LoginForm from '../components/auth/LoginForm';
import PageLayout from '../components/layout/PageLayout';
import '../styles/AuthPages.css';

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Đăng nhập | TCAPY-AI';
    
    // Redirect if user is already logged in
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);
  
  return (
    <PageLayout>
      <div className="auth-page">
        <motion.div 
          className="auth-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="auth-header">
            <h1>Đăng nhập</h1>
            <p>Chào mừng quay trở lại với TCAPY-AI!</p>
          </div>
          
          <LoginForm />
          
          <div className="auth-footer">
            <p>
              Chưa có tài khoản?{' '}
              <Link to="/signup" className="auth-link">
                Đăng ký ngay
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default LoginPage;