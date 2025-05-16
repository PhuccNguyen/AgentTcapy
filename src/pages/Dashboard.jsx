// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardNavbar from '../components/dashboard/DashboardNavbar';
import OverviewPanel from '../components/dashboard/OverviewPanel';
import ChatAIPanel from '../components/dashboard/ChatAIPanel';
import TextGenerationPanel from '../components/dashboard/TextGenerationPanel';
import SettingsPanel from '../components/dashboard/SettingsPanel';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  
  useEffect(() => {
    // Set document title based on current panel
    const path = location.pathname.split('/').pop();
    let title;
    switch (path) {
      case 'chat-ai':
        title = 'Chat AI | TCAPY-AI Dashboard';
        break;
      case 'text-generation':
        title = 'Text Generation | TCAPY-AI Dashboard';
        break;
      case 'settings':
        title = 'Settings | TCAPY-AI Dashboard';
        break;
      default:
        title = 'Dashboard | TCAPY-AI';
    }
    
    document.title = title;
  }, [location]);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={isSidebarOpen} />
      
      <main className="dashboard-main">
        <DashboardNavbar toggleSidebar={toggleSidebar} />
        
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<OverviewPanel />} />
            <Route path="chat-ai" element={<ChatAIPanel />} />
            <Route path="text-generation" element={<TextGenerationPanel />} />
            <Route path="settings" element={<SettingsPanel />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;