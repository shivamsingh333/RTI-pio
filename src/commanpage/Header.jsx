import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown, Image } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './header.css';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigateHome = () => {
    // window.location.href = 'https://rtionline.tripura.gov.in/';  // Home Url
    window.location.href = '#';
  };

  return (
    <Navbar expand="lg" className="sticky-top bg-white shadow pb-0 pb-lg-2 pt-1 pt-md-2 z-3" id="NavBar">
      {/* Desktop View */}
      <Container className="d-none d-lg-flex justify-content-between">
        {/* Left Logos */}
        <Navbar.Brand className="d-flex align-items-center gap-2">
          <Image
            src="https://th.bing.com/th/id/OIP.yjNWafT_5skmEb3xBT__BAHaMk?rs=1&pid=ImgDetMain"
          //  srcSet="./images/tripura_logo.png 1x, ./images/tripura_logo.png 2x"
            height="75"
            onClick={navigateHome}
            alt="Tripura Logo"
            style={{ cursor: 'pointer' }}
          />
          <div style={{ width: '1px', height: '60px', backgroundColor: '#000', opacity: 0.4 }}></div>
          <Image
            src="https://th.bing.com/th/id/OIP.99_QDVJaL7Z5GO4ilAba_gHaD_?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
           // srcSet="./images/rti_logo.webp 1x, ./images/ 2x"
            height="75"
            onClick={navigateHome}
            alt="RTI Logo"
            style={{ cursor: 'pointer' }}
          />
        </Navbar.Brand>

        {/* Center Text */}
        <div className="text-center">
          <div className="text-primary fw-bold fs-3" style={{ cursor: 'pointer' }} onClick={navigateHome}>
            Right to Information Online Portal
          </div>
          <div className="fw-medium text-secondary fs-6" style={{ cursor: 'pointer' }} onClick={navigateHome}>
            An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
          </div>
        </div>

        {/* Login Dropdown */} 
        <div className="position-relative">
  <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)} align="end">
    <Dropdown.Toggle className="btn btn-dark primary-bg rounded-pill border-0 px-3 py-2 d-inline-flex align-items-center gap-2 fw-bold bg-green">
      <i className="fa fa-lock fs-6"></i> 
   <span style={{ color: '#0d6efd' }}>LOGIN</span>
</Dropdown.Toggle>

    <Dropdown.Menu className="mt-2 p-0 rounded" style={{ backgroundColor: '#e6f4ff' }}>
      <Dropdown.Item onClick={() => (window.location.href = '#')} className="py-2 px-4 fw-medium">
        <i className="fa fa-user"></i> Citizen Login
      </Dropdown.Item>
      <Dropdown.Divider className="m-0" />
      <Dropdown.Item onClick={() => (window.location.href = '/nicpioportal')} className="py-2 px-4 fw-medium">
        <i className="fa fa-bank"></i> Official Login
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</div>

      </Container>

      {/* Mobile View */}
      <Container fluid className="d-lg-none row pe-0 pb-1 m-0">
        <div className="col-2 p-0">
          <Image
            src="https://th.bing.com/th/id/OIP.yjNWafT_5skmEb3xBT__BAHaMk?rs=1&pid=ImgDetMain"
            //srcSet="./images/tripura_logo.png 1x, ./images/tripura_logo.png 2x"
            height="45"
            width="45"
            onClick={navigateHome}
            alt="Tripura Logo"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="col-8 text-center overflow-hidden p-0">
          <div className="text-primary fw-bold f-small" onClick={navigateHome} style={{ cursor: 'pointer' }}>
            Right to Information Online Portal
          </div>
          <div className="text-wrap w-100" style={{ fontSize: '8px' }}>
            An initiative of Administrative Reforms, Training, Pension and Public Grievances Department, Government of Tripura
          </div>
        </div>
        <div className="col-2 text-end p-0">
          <Image
            src="https://th.bing.com/th/id/OIP.99_QDVJaL7Z5GO4ilAba_gHaD_?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
          //  srcSet="./images/rti_logo.webp 1x, ./images/rti_logo.webp 2x"
            height="40"
            width="60"
            onClick={navigateHome}
            alt="RTI Logo"
            style={{ cursor: 'pointer' }}
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
// import React, { useState } from 'react';
// import { Navbar, Container, Dropdown, Image } from 'react-bootstrap';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import './header.css';
// import { useTranslation } from 'react-i18next';

// const Header = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { t } = useTranslation();

//   const navigateHome = () => {
//     window.location.href = '#'; // Use real link in production
//   };

//   return (
//     <Navbar expand="lg" className="sticky-top bg-white shadow pb-0 pb-lg-2 pt-1 pt-md-2 z-3" id="NavBar">
//       {/* Desktop View */}
//       <Container className="d-none d-lg-flex justify-content-between">
//         {/* Left Logos */}
//         <Navbar.Brand className="d-flex align-items-center gap-2">
//           <Image
//             src="https://th.bing.com/th/id/OIP.yjNWafT_5skmEb3xBT__BAHaMk?rs=1&pid=ImgDetMain"
//             height="75"
//             onClick={navigateHome}
//             alt="Tripura Logo"
//             style={{ cursor: 'pointer' }}
//           />
//           <div style={{ width: '1px', height: '60px', backgroundColor: '#000', opacity: 0.4 }}></div>
//           <Image
//             src="https://th.bing.com/th/id/OIP.99_QDVJaL7Z5GO4ilAba_gHaD_?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
//             height="75"
//             onClick={navigateHome}
//             alt="RTI Logo"
//             style={{ cursor: 'pointer' }}
//           />
//         </Navbar.Brand>

//         {/* Center Text */}
//         <div className="text-center">
//           <div className="text-primary fw-bold fs-3" style={{ cursor: 'pointer' }} onClick={navigateHome}>
//             {t('portalTitle')}
//           </div>
//           <div className="fw-medium text-secondary fs-6" style={{ cursor: 'pointer' }} onClick={navigateHome}>
//             {t('departmentInfo')}
//           </div>
//         </div>

//         {/* Login Dropdown */}
//         <div className="position-relative">
//           <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)} align="end">
//             <Dropdown.Toggle className="btn btn-dark rounded-pill border-0 px-3 py-2 d-inline-flex align-items-center gap-2 fw-bold bg-green">
//               <i className="fa fa-lock fs-6"></i>
//               <span style={{ color: '#0d6efd' }}>{t('login')}</span>
//             </Dropdown.Toggle>

//             <Dropdown.Menu className="mt-2 p-0 rounded" style={{ backgroundColor: '#e6f4ff' }}>
//               <Dropdown.Item onClick={() => (window.location.href = '#')} className="py-2 px-4 fw-medium">
//                 <i className="fa fa-user"></i> {t('citizenLogin')}
//               </Dropdown.Item>
//               <Dropdown.Divider className="m-0" />
//               <Dropdown.Item onClick={() => (window.location.href = 'http://localhost:5173/')} className="py-2 px-4 fw-medium">
//                 <i className="fa fa-bank"></i> {t('officialLogin')}
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </div>
//       </Container>

//       {/* Mobile View */}
//       <Container fluid className="d-lg-none row pe-0 pb-1 m-0">
//         <div className="col-2 p-0">
//           <Image
//             src="https://th.bing.com/th/id/OIP.yjNWafT_5skmEb3xBT__BAHaMk?rs=1&pid=ImgDetMain"
//             height="45"
//             width="45"
//             onClick={navigateHome}
//             alt="Tripura Logo"
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//         <div className="col-8 text-center overflow-hidden p-0">
//           <div className="text-primary fw-bold f-small" onClick={navigateHome} style={{ cursor: 'pointer' }}>
//             {t('portalTitle')}
//           </div>
//           <div className="text-wrap w-100" style={{ fontSize: '8px' }}>
//             {t('departmentInfo')}
//           </div>
//         </div>
//         <div className="col-2 text-end p-0">
//           <Image
//             src="https://th.bing.com/th/id/OIP.99_QDVJaL7Z5GO4ilAba_gHaD_?w=269&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3"
//             height="40"
//             width="60"
//             onClick={navigateHome}
//             alt="RTI Logo"
//             style={{ cursor: 'pointer' }}
//           />
//         </div>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;
