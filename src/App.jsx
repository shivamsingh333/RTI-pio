
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import TopBar from './commanpage/Topbar';
import Header from './commanpage/Header';
import Footer from './commanpage/Footer';
import MainOfficial from './commanpage/Officer_login';
import RequestList from './RTI/RTI';
import Navbar from './Dashboard/mainmenu';
import RTIRequestDetails from './form/Form';
import './App.css';

function App() {
  const location = useLocation();

 
  const hideNavbarPaths = ['/nicpioportal'];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <TopBar />
      <Header />
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/nicpioportal" element={<MainOfficial />} />
        <Route path="/nicpioportal/requests" element={<RequestList />} />
        <Route path="/nicpioportal/details" element={<RTIRequestDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;


