
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

  // For HashRouter, use location.pathname directly
  const hideNavbarPaths = ['/nic-pioportal12'];
  const hideNavbar = hideNavbarPaths.some(path => location.pathname === path);

  return (
    <>
      <TopBar />
      <Header />
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/nic-pioportal12" element={<MainOfficial />} />
        <Route path="/nic-pioportal12/requests" element={<RequestList />} />
        <Route path="/nic-pioportal12/details" element={<RTIRequestDetails />} />
        <Route path="*" element={<Navigate to="/nic-pioportal12" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;