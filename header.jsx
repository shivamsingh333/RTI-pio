import React from 'react';
import './header.css';

function Header() {
  return (
    <header>
      <div className="heading">
        <img
          src="https://th.bing.com/th/id/OIP.yjNWafT_5skmEb3xBT__BAHaMk?rs=1&pid=ImgDetMain"
          alt="Government Logo 1"
        />
        <img
          src="https://th.bing.com/th/id/OIP.99_QDVJaL7Z5GO4ilAba_gHaD_?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          alt="Government Logo 2"
        />
        <div className="title">
          <h1>Right to Information Online Portal</h1>
          <p>
            An initiative of Administrative Reforms, Training and Pension Grievances
            Department, Government of Tripura
          </p>
   
        <div className="login-container">
    <select id="login" className="login-select">
      <option value="">Login</option>
      <option value="citizen">Citizen Login</option>
      <option value="official">Official Login</option>
    </select>
  </div>

 
</div>

      </div>
    </header>
  );
}

export default Header;

