import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import './OverviewPanel.css';

// Mock service imports
import dashboardService from '../../services/dashboard';

const OverviewPanel = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    aiChats: 0,
    textGenerated: 0,
    creditsUsed: 0,
    creditsRemaining: 0
  });
  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // In a real app, these would be API calls
        const statsData = await dashboardService.getStats();
        const activityData = await dashboardService.getRecentActivity();
        
        setStats(statsData);
        setRecentActivity(activityData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    // Simulate delay for mock data
    setTimeout(fetchDashboardData, 800);
  }, []);
  
  // Animation variants for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }
  
  return (
    <div className="overview-panel">
      <div className="panel-header">
        <h1>Welcome back, {user?.fullName?.split(' ')[0] || 'User'}</h1>
        <p className="welcome-message">
          Here's what's happening with your TCAPY-AI account
        </p>
      </div>
      
      <motion.div 
        className="stats-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon chat-icon">💬</div>
          <div className="stat-info">
            <h3>AI Chats</h3>
            <p className="stat-value">{stats.aiChats}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon text-icon">📝</div>
          <div className="stat-info">
            <h3>Text Generated</h3>
            <p className="stat-value">{stats.textGenerated} words</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon credit-used-icon">📉</div>
          <div className="stat-info">
            <h3>Credits Used</h3>
            <p className="stat-value">{stats.creditsUsed}</p>
          </div>
        </motion.div>
        
        <motion.div className="stat-card" variants={itemVariants}>
          <div className="stat-icon credit-remaining-icon">📈</div>
          <div className="stat-info">
            <h3>Credits Remaining</h3>
            <p className="stat-value">{stats.creditsRemaining}</p>
            <Link to="/dashboard/billing" className="add-credits-link">
              Add more
            </Link>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="features-section">
        <h2>AI Tools</h2>
        
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">💬</div>
            <div className="feature-content">
              <h3>Chat AI</h3>
              <p>Interact with our AI assistant for instant answers and help</p>
              <Link to="/dashboard/chat-ai" className="feature-button">
                Start chatting
              </Link>
            </div>
          </motion.div>
          
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">✍️</div>
            <div className="feature-content">
              <h3>Text Generation</h3>
              <p>Generate high-quality text content for various purposes</p>
              <Link to="/dashboard/text-generation" className="feature-button">
                Generate text
              </Link>
            </div>
          </motion.div>
          
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">🖼️</div>
            <div className="feature-content">
              <h3>Image Generation</h3>
              <p>Create custom images with AI-powered generation</p>
              <div className="coming-soon-badge">Coming soon</div>
            </div>
          </motion.div>
          
          <motion.div className="feature-card" variants={itemVariants}>
            <div className="feature-icon">💻</div>
            <div className="feature-content">
              <h3>Code Generation</h3>
              <p>Generate code snippets and solve programming problems</p>
              <div className="coming-soon-badge">Coming soon</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="recent-activity-section">
        <h2>Recent Activity</h2>
        
        {recentActivity.length > 0 ? (
          <motion.div 
            className="activity-list"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {recentActivity.map((activity, index) => (
              <motion.div 
                key={activity.id} 
                className="activity-item"
                variants={itemVariants}
              >
                <div className={`activity-icon ${activity.type}-icon`}></div>
                <div className="activity-content">
                  <p className="activity-description">{activity.description}</p>
                  <p className="activity-time">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="no-activity">
            <p>No recent activity yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OverviewPanel;