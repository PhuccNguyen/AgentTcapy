// src/components/dashboard/SettingsPanel.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import Input from '../common/Input';
import Card from '../common/Card';
import './SettingsPanel.css'; 

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [profileForm, setProfileForm] = useState({
    fullName: 'Test User',
    email: 'user@example.com',
    bio: '',
    jobTitle: ''
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailUpdates: true,
    newFeatures: true,
    tipsAndTricks: false,
    serviceUpdates: true
  });
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    language: 'vi'
  });
  
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNotificationChange = (e) => {
    const { name, checked } = e.target;
    setNotificationSettings(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleAppearanceChange = (e) => {
    const { name, value } = e.target;
    setAppearanceSettings(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSaveProfile = (e) => {
    e.preventDefault();
    // In a real app, save profile data to backend
    alert('Profile updated successfully!');
  };
  
  const handleSavePassword = (e) => {
    e.preventDefault();
    // In a real app, validate and save password to backend
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('New passwords do not match!');
      return;
    }
    
    // Reset form
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
    alert('Password updated successfully!');
  };
  
  const tabContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const tabItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <div className="settings-panel">
      <div className="panel-header">
        <h1>Settings</h1>
        <p className="panel-description">
          Manage your account settings and preferences
        </p>
      </div>
      
      <div className="settings-container">
        <div className="settings-tabs">
          <button 
            className={`settings-tab ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => setActiveTab('account')}
          >
            Account
          </button>
          <button 
            className={`settings-tab ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            Security
          </button>
          <button 
            className={`settings-tab ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            Notifications
          </button>
          <button 
            className={`settings-tab ${activeTab === 'appearance' ? 'active' : ''}`}
            onClick={() => setActiveTab('appearance')}
          >
            Appearance
          </button>
          <button 
            className={`settings-tab ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            Billing
          </button>
        </div>
        
        <div className="settings-content">
          {activeTab === 'account' && (
            <motion.div 
              className="settings-section"
              initial="hidden"
              animate="visible"
              variants={tabContainerVariants}
            >
              <Card title="Profile Information" elevation="low" className="settings-card">
                <form onSubmit={handleSaveProfile}>
                  <div className="form-grid">
                    <motion.div variants={tabItemVariants}>
                      <Input
                        label="Full Name"
                        name="fullName"
                        value={profileForm.fullName}
                        onChange={handleProfileChange}
                        placeholder="Your full name"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={tabItemVariants}>
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                        placeholder="your.email@example.com"
                        required
                        disabled
                      />
                    </motion.div>
                    
                    <motion.div variants={tabItemVariants} className="full-width">
                      <label className="form-label">Bio</label>
                      <textarea
                        name="bio"
                        value={profileForm.bio}
                        onChange={handleProfileChange}
                        placeholder="Tell us a bit about yourself"
                        rows={4}
                        className="form-textarea"
                      ></textarea>
                    </motion.div>
                    
                    <motion.div variants={tabItemVariants}>
                      <Input
                        label="Job Title"
                        name="jobTitle"
                        value={profileForm.jobTitle}
                        onChange={handleProfileChange}
                        placeholder="Your job title"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={tabItemVariants} className="form-actions">
                    <Button type="submit" variant="primary">
                      Save Changes
                    </Button>
                    <Button type="button" variant="text">
                      Cancel
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          )}
          
          {activeTab === 'security' && (
            <motion.div 
              className="settings-section"
              initial="hidden"
              animate="visible"
              variants={tabContainerVariants}
            >
              <Card title="Change Password" elevation="low" className="settings-card">
                <form onSubmit={handleSavePassword}>
                  <div className="form-grid">
                    <motion.div variants={tabItemVariants} className="full-width">
                      <Input
                        label="Current Password"
                        name="currentPassword"
                        type="password"
                        value={passwordForm.currentPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter your current password"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={tabItemVariants}>
                      <Input
                        label="New Password"
                        name="newPassword"
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={handlePasswordChange}
                        placeholder="Enter new password"
                        required
                      />
                    </motion.div>
                    
                    <motion.div variants={tabItemVariants}>
                      <Input
                        label="Confirm New Password"
                        name="confirmPassword"
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordChange}
                        placeholder="Confirm new password"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div variants={tabItemVariants} className="form-actions">
                    <Button type="submit" variant="primary">
                      Update Password
                    </Button>
                    <Button type="button" variant="text">
                      Cancel
                    </Button>
                  </motion.div>
                </form>
              </Card>
              
              <Card title="Two-Factor Authentication" elevation="low" className="settings-card">
                <div className="settings-description">
                  <p>
                    Two-factor authentication adds an extra layer of security to your account. 
                    In addition to your password, you'll need to enter a code from your phone.
                  </p>
                </div>
                
                <Button variant="outlined">
                  Enable Two-Factor Authentication
                </Button>
              </Card>
            </motion.div>
          )}
          
          {activeTab === 'notifications' && (
            <motion.div 
              className="settings-section"
              initial="hidden"
              animate="visible"
              variants={tabContainerVariants}
            >
              <Card title="Email Notifications" elevation="low" className="settings-card">
                <motion.div variants={tabItemVariants} className="settings-options">
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="emailUpdates"
                        checked={notificationSettings.emailUpdates}
                        onChange={handleNotificationChange}
                      />
                      <span>Email updates about your account</span>
                    </label>
                  </div>
                  
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="newFeatures"
                        checked={notificationSettings.newFeatures}
                        onChange={handleNotificationChange}
                      />
                      <span>News about new features and improvements</span>
                    </label>
                  </div>
                  
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="tipsAndTricks"
                        checked={notificationSettings.tipsAndTricks}
                        onChange={handleNotificationChange}
                      />
                      <span>Tips and tricks to get more out of TCAPY-AI</span>
                    </label>
                  </div>
                  
                  <div className="checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="serviceUpdates"
                        checked={notificationSettings.serviceUpdates}
                        onChange={handleNotificationChange}
                      />
                      <span>Service updates and downtime notifications</span>
                    </label>
                  </div>
                </motion.div>
                
                <motion.div variants={tabItemVariants} className="form-actions">
                  <Button variant="primary">
                    Save Preferences
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          )}
          
          {activeTab === 'appearance' && (
            <motion.div 
              className="settings-section"
              initial="hidden"
              animate="visible"
              variants={tabContainerVariants}
            >
              <Card title="Theme Settings" elevation="low" className="settings-card">
                <div className="settings-options">
                  <motion.div variants={tabItemVariants} className="form-group">
                    <label className="form-label">Theme</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="theme"
                          value="light"
                          checked={appearanceSettings.theme === 'light'}
                          onChange={handleAppearanceChange}
                        />
                        <span>Light</span>
                      </label>
                      
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="theme"
                          value="dark"
                          checked={appearanceSettings.theme === 'dark'}
                          onChange={handleAppearanceChange}
                        />
                        <span>Dark</span>
                      </label>
                      
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="theme"
                          value="system"
                          checked={appearanceSettings.theme === 'system'}
                          onChange={handleAppearanceChange}
                        />
                        <span>System Default</span>
                      </label>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={tabItemVariants} className="form-group">
                    <label className="form-label">Font Size</label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="fontSize"
                          value="small"
                          checked={appearanceSettings.fontSize === 'small'}
                          onChange={handleAppearanceChange}
                        />
                        <span>Small</span>
                      </label>
                      
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="fontSize"
                          value="medium"
                          checked={appearanceSettings.fontSize === 'medium'}
                          onChange={handleAppearanceChange}
                        />
                        <span>Medium</span>
                      </label>
                      
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="fontSize"
                          value="large"
                          checked={appearanceSettings.fontSize === 'large'}
                          onChange={handleAppearanceChange}
                        />
                        <span>Large</span>
                      </label>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={tabItemVariants} className="form-group">
                    <label className="form-label">Language</label>
                    <select
                      name="language"
                      value={appearanceSettings.language}
                      onChange={handleAppearanceChange}
                      className="form-select"
                    >
                      <option value="vi">Tiếng Việt</option>
                      <option value="en">English</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                      <option value="ja">日本語</option>
                      <option value="zh">中文</option>
                    </select>
                  </motion.div>
                </div>
                
                <motion.div variants={tabItemVariants} className="form-actions">
                  <Button variant="primary">
                    Save Preferences
                  </Button>
                </motion.div>
              </Card>
            </motion.div>
          )}
          
          {activeTab === 'billing' && (
            <motion.div 
              className="settings-section"
              initial="hidden"
              animate="visible"
              variants={tabContainerVariants}
            >
              <Card title="Current Plan" elevation="low" className="settings-card">
                <motion.div variants={tabItemVariants} className="plan-info">
                  <div className="plan-badge free">Free Plan</div>
                  <p className="plan-description">
                    You are currently on the free plan with limited features.
                    Upgrade to access more AI capabilities.
                  </p>
                  <div className="credit-info">
                    <div className="credit-item">
                      <span>Credits Remaining</span>
                      <strong>122</strong>
                    </div>
                    <div className="credit-item">
                      <span>Credits Used</span>
                      <strong>78</strong>
                    </div>
                  </div>
                  <Button variant="primary">Upgrade Plan</Button>
                </motion.div>
              </Card>
              
              <Card title="Purchase Credits" elevation="low" className="settings-card">
                <motion.div variants={tabItemVariants} className="credit-packages">
                  <div className="credit-package">
                    <div className="package-header">
                      <h3>100 Credits</h3>
                      <span className="package-price">$5.99</span>
                    </div>
                    <p>Best for occasional users</p>
                    <Button variant="outlined" fullWidth>Purchase</Button>
                  </div>
                  
                  <div className="credit-package popular">
                    <div className="popular-badge">Most Popular</div>
                    <div className="package-header">
                      <h3>500 Credits</h3>
                      <span className="package-price">$24.99</span>
                      <span className="package-savings">Save 17%</span>
                    </div>
                    <p>Perfect for regular users</p>
                    <Button variant="primary" fullWidth>Purchase</Button>
                  </div>
                  
                  <div className="credit-package">
                    <div className="package-header">
                      <h3>1000 Credits</h3>
                      <span className="package-price">$39.99</span>
                      <span className="package-savings">Save 33%</span>
                    </div>
                    <p>Ideal for power users</p>
                    <Button variant="outlined" fullWidth>Purchase</Button>
                  </div>
                </motion.div>
              </Card>
              
              <Card title="Payment Methods" elevation="low" className="settings-card">
                <motion.div variants={tabItemVariants} className="settings-description">
                  <p>No payment methods added yet.</p>
                  <Button variant="outlined">Add Payment Method</Button>
                </motion.div>
              </Card>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;