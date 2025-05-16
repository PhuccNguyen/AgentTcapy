// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';

import '../styles/LandingPage.css';

const LandingPage = () => {
  // Change document title when component mounts
  useEffect(() => {
    document.title = 'TCAPY-AI | Vietnamese AI Platform';
  }, []);

  return (
    <div className="landing-page">
      <Navbar />
      
      <main>
        <section className="hero-section">
          <div className="container">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>TCAPY-AI</h1>
              <h2>Nền tảng AI hàng đầu dành cho người Việt</h2>
              <p>Trải nghiệm sức mạnh của AI được tối ưu cho ngôn ngữ và văn hóa Việt Nam</p>
              <div className="cta-buttons">
                <Button as={Link} to="/signup" variant="primary" size="large">
                  Bắt đầu miễn phí
                </Button>
                <Button as={Link} to="#features" variant="secondary" size="large">
                  Tìm hiểu thêm
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img src="/assets/images/hero-illustration.svg" alt="TCAPY-AI Platform" />
            </motion.div>
          </div>
        </section>
        
        <section id="features" className="features-section">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Tính năng nổi bật
            </motion.h2>
            
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="cta-section">
          <div className="container">
            <motion.div
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Sẵn sàng nâng cao trải nghiệm với AI?</h2>
              <p>Đăng ký ngay hôm nay để khám phá sức mạnh của TCAPY-AI</p>
              <Button as={Link} to="/signup" variant="primary" size="large">
                Tạo tài khoản miễn phí
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Mock data for features
const features = [
  {
    icon: '💬',
    title: 'Chat AI',
    description: 'Trò chuyện thông minh với AI được tối ưu cho tiếng Việt'
  },
  {
    icon: '✍️',
    title: 'Viết nội dung',
    description: 'Tạo văn bản chuyên nghiệp với sự hỗ trợ của AI'
  },
  {
    icon: '🔍',
    title: 'Tìm kiếm nâng cao',
    description: 'Tìm kiếm thông tin chính xác với công nghệ AI tiên tiến'
  },
  {
    icon: '🔒',
    title: 'Bảo mật cao',
    description: 'Dữ liệu của bạn được bảo vệ với các tiêu chuẩn bảo mật hàng đầu'
  }
];

export default LandingPage;