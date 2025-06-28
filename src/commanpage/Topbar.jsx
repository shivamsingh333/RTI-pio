import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const TopBar = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="bg-dark text-white px-3 py-1 d-none d-lg-flex justify-content-between align-items-center fs-sm">
        <div>For any queries, contact us on #</div>
        <div>
          <a href="#NavBar" className="text-white me-3" aria-label="Skip to main content">
            Skip to main content
          </a>
          <Dropdown align="end" className="d-inline">
            <Dropdown.Toggle variant="dark" size="sm">
              <FontAwesomeIcon icon={faGlobe} className="me-1" /> English
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item active>English</Dropdown.Item>
              <Dropdown.Item>অসমীয়া</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Mobile View */}
      <div className="container-fluid d-lg-none bg-dark f-xsmall rounded-1 text-light py-2 px-3">
        <div className="d-flex justify-content-between w-100 align-items-center">
          {/* GOVT TEXT + FLAG */}
          <div className="fs-6 text-decoration-none my-auto fs-md d-flex align-items-center">
            <img
              src="https://www.bing.com/th/id/OIP.V0gbK7Jr6Nc-tK-hLWHTNQHaKp?w=160&h=211&c=8&rs=1&qlt=90&o=6&cb=ircwebp1&dpr=1.5&pid=3.1&rm=2"
              alt="India Flag"
              width="15px"
              height="auto"
              className="me-1"
            />
            GOVERNMENT OF TRIPURA
          </div>

          {/* LANGUAGE + LOGIN DROPDOWNS */}
          <div className="d-flex align-items-center">
            {/* Language Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                as="span"
                id="languageDropdownMobile"
                className="border-0 bg-transparent shadow-none p-0 fs-md text-white"
              >
                <i className="fa fa-globe me-1 text-white"></i>English
              </Dropdown.Toggle>
              <Dropdown.Menu className="p-0 f-small" style={{ minWidth: 'max-content' }}>
                <Dropdown.Item as="span" className="py-2 px-3 pe-5 language" data-language="E">
                  English
                </Dropdown.Item>
                <hr className="m-0" />
                <Dropdown.Item as="span" className="py-2 px-3 pe-5 language assamese fs-6" data-language="M">
                  অসমীয়া
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <div className="mx-2 fs-6" style={{ color: 'grey' }}>
              |
            </div>

            {/* Login Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle
                as="span" // Renders it as a <span> instead of <button>
                id="mobileLoginDropdown"
                className="border-0 bg-transparent shadow-none p-0 fs-md text-white"
              >
                <i className="fa fa-lock"></i>&nbsp;LOGIN
              </Dropdown.Toggle>
              <Dropdown.Menu className="p-0 f-small" style={{ minWidth: 'max-content' }}>
                <Dropdown.Item
                  as="span"
                  className="py-2 px-3"
                  onClick={() => (window.location.href = '#')}
                >
                  <i className="fa fa-user"></i>&nbsp; Citizen Login
                </Dropdown.Item>
                <hr className="m-0" />
                <Dropdown.Item
                  as="span"
                  className="py-2 px-3"
                  onClick={() => (window.location.href = '/nicpioportal12')}
                >
                  <i className="fa fa-bank"></i>&nbsp; Official Login
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
