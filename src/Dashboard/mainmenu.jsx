
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/nic-pioportal12');
  };

  return (
    <div style={{
      backgroundColor: '#2e6eb3',
      padding: '10px 30px',
      display: 'flex',
      justifyContent: 'flex-start'
    }}>
      <nav style={{
        display: 'flex',
        gap: '20px',
        color: 'white',
        fontSize: '11px',
        fontWeight: '500'
      }}>
        <Link to="#" style={linkStyle}>HOME</Link>
        <Link to="#" style={linkStyle}>SEARCH</Link>
        <Link to="/nic-pioportal12/details" style={linkStyle}>ASSIGNMENT</Link>
        <Link to="#" style={linkStyle}>UTILITY</Link>
        <Link to="/nic-pioportal12/requests" style={linkStyle}>REPORTS</Link>
        <span onClick={handleLogout} style={{ ...linkStyle, cursor: 'pointer' }}>LOGOUT</span>
      </nav>
    </div>
  );
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Arial, sans-serif',
};

export default Navbar;