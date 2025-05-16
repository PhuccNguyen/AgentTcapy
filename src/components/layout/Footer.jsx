// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/assets/images/logo.svg" alt="TCAPY-AI Logo" />
              <span>TCAPY-AI</span>
            </div>
            <p className="footer-description">
              Nền tảng AI đa năng hàng đầu dành cho người Việt, tối ưu hóa cho ngôn ngữ và văn hóa Việt Nam.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Sản phẩm</h3>
            <ul className="footer-links">
              <li><Link to="/features">Tính năng</Link></li>
              <li><Link to="/pricing">Bảng giá</Link></li>
              <li><Link to="/api-docs">API Documentation</Link></li>
              <li><Link to="/updates">Cập nhật mới</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Công ty</h3>
            <ul className="footer-links">
              <li><Link to="/about">Về chúng tôi</Link></li>
              <li><Link to="/careers">Tuyển dụng</Link></li>
              <li><Link to="/press">Báo chí</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Tài nguyên</h3>
            <ul className="footer-links">
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/help-center">Trung tâm hỗ trợ</Link></li>
              <li><Link to="/community">Cộng đồng</Link></li>
              <li><Link to="/partners">Đối tác</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">Pháp lý</h3>
            <ul className="footer-links">
              <li><Link to="/terms">Điều khoản dịch vụ</Link></li>
              <li><Link to="/privacy">Chính sách bảo mật</Link></li>
              <li><Link to="/security">Bảo mật</Link></li>
              <li><Link to="/cookies">Chính sách cookie</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} TCAPY-AI. Tất cả các quyền được bảo lưu.
          </p>
          <div className="footer-language-selector">
            <select defaultValue="vi">
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;