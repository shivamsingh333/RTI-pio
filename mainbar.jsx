import React from 'react';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#2e6eb3', padding: '10px 0', display: 'flex', justifyContent: 'center' }}>
      <nav style={{ display: 'flex', gap: '30px', color: 'white', fontSize: '14px', fontWeight: '500' }}>
        <a href="#" style={linkStyle}>HOME</a>
        <a href="#" style={linkStyle}>SEARCH</a>
        <a href="#" style={linkStyle}>ASSIGNMENT</a>
        <a href="#" style={linkStyle}>UTILITY</a>
        <a href="#" style={linkStyle}>REPORTS</a>
        <a href="#" style={linkStyle}>LOGOUT</a>
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
