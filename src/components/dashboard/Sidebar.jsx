// src/components/dashboard/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';
import './Sidebar.css';

// Import Icons
import { 
  HomeIcon, ChatIcon, EditIcon, 
  ImageIcon, CodeIcon, SettingsIcon, 
  LogoutIcon, CreditIcon
} from '../icons';

const Sidebar = ({ isOpen }) => {
  const { user, logout } = useAuth();
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  
  const toggleSubmenu = (menuId) => {
    if (activeSubmenu === menuId) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuId);
    }
  };
  
  const menuItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <HomeIcon />,
      path: '/dashboard',
      exact: true
    },
    {
      id: 'ai-tools',
      label: 'AI Tools',
      icon: <ChatIcon />,
      submenu: [
        { id: 'chat-ai', label: 'Chat AI', path: '/dashboard/chat-ai' },
        { id: 'text-generation', label: 'Text Generation', path: '/dashboard/text-generation' },
        { id: 'image-generation', label: 'Image Generation', path: '/dashboard/image-generation' }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      path: '/dashboard/settings'
    }
  ];
  
  const sidebarVariants = {
    open: {
      width: '240px',
      transition: { duration: 0.3 }
    },
    closed: {
      width: '64px',
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <motion.aside 
      className="sidebar"
      initial={isOpen ? 'open' : 'closed'}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
    >
      <div className="sidebar-header">
        <motion.div 
          className="sidebar-logo"
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/assets/images/logo.svg" alt="TCAPY-AI Logo" />
          {isOpen && <span className="logo-text">TCAPY-AI</span>}
        </motion.div>
      </div>
      
      <div className="sidebar-content">
        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map(item => (
              <li key={item.id} className="sidebar-menu-item">
                {item.submenu ? (
                  <>
                    <button 
                      className={`sidebar-menu-button ${activeSubmenu === item.id ? 'active' : ''}`}
                      onClick={() => toggleSubmenu(item.id)}
                    >
                      <span className="menu-icon">{item.icon}</span>
                      {isOpen && (
                        <motion.span 
                          className="menu-label"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.label}
                        </motion.span>
                      )}
                      {isOpen && (
                        <span className={`submenu-arrow ${activeSubmenu === item.id ? 'open' : ''}`}>
                          ▼
                        </span>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && activeSubmenu === item.id && (
                        <motion.ul
                          className="sidebar-submenu"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.submenu.map(subitem => (
                            <li key={subitem.id} className="sidebar-submenu-item">
                              <NavLink 
                                to={subitem.path} 
                                className={({ isActive }) => 
                                  isActive ? 'sidebar-submenu-link active' : 'sidebar-submenu-link'
                                }
                              >
                                <span className="submenu-dot"></span>
                                <span className="submenu-label">{subitem.label}</span>
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    end={item.exact}
                    className={({ isActive }) => 
                      isActive ? 'sidebar-menu-link active' : 'sidebar-menu-link'
                    }
                  >
                    <span className="menu-icon">{item.icon}</span>
                    {isOpen && (
                      <motion.span 
                        className="menu-label"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="sidebar-footer">
        {isOpen && (
          <motion.div 
            className="user-credits"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CreditIcon />
            <span>{user?.credits || 0} Credits</span>
          </motion.div>
        )}
        
        <button className="logout-button" onClick={logout}>
          <span className="menu-icon"><LogoutIcon /></span>
          {isOpen && (
            <motion.span 
              className="menu-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Logout
            </motion.span>
          )}
        </button>
        
        {isOpen && (
          <motion.div 
            className="user-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="user-avatar">
              <img 
                src={user?.avatarUrl || "/assets/images/default-avatar.png"} 
                alt={user?.fullName} 
              />
            </div>
            <div className="user-details">
              <p className="user-name">{user?.fullName}</p>
              <p className="user-email">{user?.email}</p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.aside>
  );
};

export default Sidebar;