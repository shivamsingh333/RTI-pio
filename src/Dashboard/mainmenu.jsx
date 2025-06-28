// import React from 'react';

// const Navbar = () => {
//   return (
//     <div style={{ backgroundColor: '#2e6eb3', padding: '10px 30px', display: 'flex', justifyContent: 'flex-start' }}>
//       <nav style={{ display: 'flex', gap: '20px', color: 'white', fontSize: '11px', fontWeight: '500' }}>
//         <a href="#" style={linkStyle}>HOME</a>
//         <a href="#" style={linkStyle}>SEARCH</a>
//         <a href="#" style={linkStyle}>ASSIGNMENT</a>
//         <a href="#" style={linkStyle}>UTILITY</a>
//         <a href="#" style={linkStyle}>REPORTS</a>
//         <a href="#" style={linkStyle}>LOGOUT</a>
//       </nav>
//     </div>
//   );
// };

// const linkStyle = {
//   color: 'white',
//   textDecoration: 'none',
//   fontFamily: 'Arial, sans-serif',
// };

// export default Navbar;
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
        <a href="http://localhost:5173/details" style={linkStyle}>ASSIGNMENT</a>
        <a href="#" style={linkStyle}>UTILITY</a>
        <a href="#" style={linkStyle}>REPORTS</a>
        <a href="http://localhost:5173/" style={linkStyle} onClick={handleLogout}>LOGOUT</a>
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
