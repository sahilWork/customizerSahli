import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <main style={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
  },
  mainContent: {
    flex: 1,
    padding: '1rem',
    backgroundColor: '#fff',
    minHeight: '100vh',
    boxSizing: 'border-box'
  }
};

export default Layout;
