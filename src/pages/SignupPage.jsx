// src/pages/SignupPage.jsx
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import SignupForm from '../components/auth/SignupForm';
import PageLayout from '../components/layout/PageLayout';
import '../styles/AuthPages.css';

const SignupPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = 'Đăng ký | TCAPY-AI';
    
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
            <h1>Tạo tài khoản</h1>
            <p>Bắt đầu hành trình với TCAPY-AI ngay hôm nay!</p>
          </div>
          
          <SignupForm />
          
          <div className="auth-footer">
            <p>
              Đã có tài khoản?{' '}
              <Link to="/login" className="auth-link">
                Đăng nhập
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SignupPage;