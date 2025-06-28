
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div style={{ backgroundColor: '#2e6eb3', padding: '10px 30px', display: 'flex', justifyContent: 'flex-start' }}>
      <nav style={{ display: 'flex', gap: '20px', color: 'white', fontSize: '11px', fontWeight: '500' }}>
        <a href="#" style={linkStyle}>HOME</a>
        <a href="#" style={linkStyle}>SEARCH</a>
        <a href="/nicpioportal12/details" style={linkStyle}>ASSIGNMENT</a>
        <a href="#" style={linkStyle}>UTILITY</a>
        <a href="/nicpioportal12/requests" style={linkStyle}>REPORTS</a>
        <a href="/nicpioportal12" style={linkStyle} onClick={handleLogout}>LOGOUT</a>
      </nav>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Arial, sans-serif',
  cursor: 'pointer',
};

export default Navbar;
