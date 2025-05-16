// src/components/dashboard/DashboardNavbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import { BellIcon, SearchIcon, MenuIcon } from '../icons';
import './DashboardNavbar.css';

const DashboardNavbar = ({ toggleSidebar }) => {
  const { user } = useAuth();
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  
  const toggleSearch = () => setIsSearchActive(!isSearchActive);
  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsUserMenuOpen(false);
  };
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationsOpen(false);
  };
  
  // Mock notifications
  const notifications = [
    {
      id: 1,
      type: 'info',
      message: 'Welcome to TCAPY-AI! Explore our AI tools.',
      time: '2 hours ago',
      isRead: false
    },
    {
      id: 2,
      type: 'success',
      message: 'Your account has been created successfully.',
      time: '1 day ago',
      isRead: true
    }
  ];
  
  return (
    <header className="dashboard-navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
        
        <div className={`search-container ${isSearchActive ? 'active' : ''}`}>
          <button className="search-toggle" onClick={toggleSearch}>
            <SearchIcon />
          </button>
          
          <motion.div 
            className="search-input-container"
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isSearchActive ? 300 : 0, 
              opacity: isSearchActive ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search..." 
            />
          </motion.div>
        </div>
      </div>
      
      <div className="navbar-right">
        <div className="navbar-actions">
          <div className="notification-container">
            <button 
              className={`notification-button ${isNotificationsOpen ? 'active' : ''}`}
              onClick={toggleNotifications}
            >
              <BellIcon />
              {notifications.some(n => !n.isRead) && (
                <span className="notification-badge"></span>
              )}
            </button>
            
            {isNotificationsOpen && (
              <div className="notification-dropdown">
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <button className="mark-all-read">Mark all as read</button>
                </div>
                
                <div className="notification-list">
                  {notifications.length > 0 ? (
                    notifications.map(notification => (
                      <div 
                        key={notification.id} 
                        className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
                      >
                        <div className={`notification-icon ${notification.type}`}></div>
                        <div className="notification-content">
                          <p className="notification-message">{notification.message}</p>
                          <p className="notification-time">{notification.time}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="no-notifications">No notifications</p>
                  )}
                </div>
                
                <div className="notification-footer">
                  <a href="/dashboard/notifications">View all notifications</a>
                </div>
              </div>
            )}
          </div>
          
          <div className="user-menu-container">
            <button 
              className={`user-menu-button ${isUserMenuOpen ? 'active' : ''}`}
              onClick={toggleUserMenu}
            >
              <img 
                src={user?.avatarUrl || "/assets/images/default-avatar.png"} 
                alt={user?.fullName} 
                className="user-avatar-small"
              />
            </button>
            
            {isUserMenuOpen && (
              <div className="user-dropdown">
                <div className="user-dropdown-header">
                  <div className="user-dropdown-avatar">
                    <img 
                      src={user?.avatarUrl || "/assets/images/default-avatar.png"} 
                      alt={user?.fullName} 
                    />
                  </div>
                  <div className="user-dropdown-info">
                    <h4>{user?.fullName}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>
                
                <div className="user-dropdown-menu">
                  <a href="/dashboard/profile" className="user-dropdown-item">
                    <span className="item-icon">👤</span>
                    Profile
                  </a>
                  <a href="/dashboard/settings" className="user-dropdown-item">
                    <span className="item-icon">⚙️</span>
                    Settings
                  </a>
                  <a href="/dashboard/billing" className="user-dropdown-item">
                    <span className="item-icon">💳</span>
                    Billing
                  </a>
                </div>
                
                <div className="user-dropdown-footer">
                  <button className="logout-button">
                    <span className="item-icon">🚪</span>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;