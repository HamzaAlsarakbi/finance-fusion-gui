import React from 'react';
import { useNavigate } from 'react-router-dom';

const Portal: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div style={portalStyles}>
      <h1>Portal Page</h1>
      <p>Select a destination:</p>
      <ul style={linkListStyles}>
        <li style={linkItemStyles} onClick={() => handleNavigation('/dashboard')}>Go to Dashboard</li>
        <li style={linkItemStyles} onClick={() => handleNavigation('/profile')}>Go to Profile</li>
        <li style={linkItemStyles} onClick={() => handleNavigation('/settings')}>Go to Settings</li>
      </ul>
    </div>
  );
};

const portalStyles: React.CSSProperties = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  maxWidth: '400px',
  margin: '50px auto',
  textAlign: 'center',
};

const linkListStyles: React.CSSProperties = {
  listStyleType: 'none',
  padding: 0,
};

const linkItemStyles: React.CSSProperties = {
  margin: '10px 0',
  cursor: 'pointer',
  color: '#007bff',
  textDecoration: 'underline',
};

export default Portal;