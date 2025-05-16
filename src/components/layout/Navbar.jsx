// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import Button from '../common/Button';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/images/logo.svg" alt="TCAPY-AI Logo" />
          <span>TCAPY-AI</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="navbar-links desktop-only">
          <Link to="/#features" className="navbar-link">Tính năng</Link>
          <Link to="/#pricing" className="navbar-link">Bảng giá</Link>
          <Link to="/#about" className="navbar-link">Về chúng tôi</Link>
          <Link to="/#contact" className="navbar-link">Liên hệ</Link>
        </div>
        
        <div className="navbar-actions desktop-only">
          {user ? (
            <>
              <Button as={Link} to="/dashboard" variant="text">Dashboard</Button>
              <Button onClick={logout} variant="outlined">Đăng xuất</Button>
            </>
          ) : (
            <>
              <Button as={Link} to="/login" variant="text">Đăng nhập</Button>
              <Button as={Link} to="/signup" variant="contained">Đăng ký</Button>
            </>
          )}
        </div>
        
        {/* Mobile menu toggle button */}
        <button 
          className="navbar-mobile-toggle mobile-only"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="navbar-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="navbar-links-mobile">
                <Link to="/#features" className="navbar-link">Tính năng</Link>
                <Link to="/#pricing" className="navbar-link">Bảng giá</Link>
                <Link to="/#about" className="navbar-link">Về chúng tôi</Link>
                <Link to="/#contact" className="navbar-link">Liên hệ</Link>
                
                <div className="navbar-mobile-actions">
                  {user ? (
                    <>
                      <Button as={Link} to="/dashboard" variant="text" fullWidth>Dashboard</Button>
                      <Button onClick={logout} variant="outlined" fullWidth>Đăng xuất</Button>
                    </>
                  ) : (
                    <>
                      <Button as={Link} to="/login" variant="text" fullWidth>Đăng nhập</Button>
                      <Button as={Link} to="/signup" variant="contained" fullWidth>Đăng ký</Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;