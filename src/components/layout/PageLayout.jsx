// src/components/layout/PageLayout.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children, hideFooter = false }) => {
  return (
    <div className="page-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default PageLayout;