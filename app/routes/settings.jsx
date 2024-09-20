import React, { useState } from 'react';
import Layout from '../components/Layout';
import ColourSettings from '../components/ColourSettings';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('colour');

  return (
    <Layout>
      <h1>Settings</h1>
      <div style={styles.tabsContainer}>
        <button
          style={activeTab === 'colour' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('colour')}
        >
          Colour
        </button>
        <button
          style={activeTab === 'design' ? styles.activeTab : styles.tab}
          onClick={() => setActiveTab('design')}
        >
          Design
        </button>
      </div>
      <div style={styles.content}>
        {activeTab === 'colour' ? (
          <ColourSettings />
        ) : (
          <div>
            <h2>Design Settings</h2>
            <p>Design settings here.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

const styles = {
  tabsContainer: {
    display: 'flex',
    borderBottom: '2px solid #ddd',
    marginBottom: '1rem'
  },
  tab: {
    flex: 1,
    padding: '1rem',
    backgroundColor: '#f4f4f4',
    border: 'none',
    borderRadius: '4px 4px 0 0',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  activeTab: {
    flex: 1,
    padding: '1rem',
    backgroundColor: 'rgb(26 26 26)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px 4px 0 0',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  content: {
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '0 0 4px 4px',
    border: '1px solid #ddd'
  }
};

export default Settings;
