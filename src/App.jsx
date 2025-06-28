
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import TopBar from './commanpage/Topbar';
import Header from './commanpage/Header';
import Footer from './commanpage/Footer';
import MainOfficial from './commanpage/Officer_login';
import RequestList from './RTI/RTI';
import Navbar from './Dashboard/mainmenu';
import RTIRequestDetails from './form/Form';
import { useLocation, Outlet } from "react-router-dom";
import './App.css';

function App() {
  const location = useLocation();
  const hideNavbarOnHome = location.pathname === "/";

  return (
    <>
      <TopBar />
      <Header />
      {!hideNavbarOnHome && <Navbar />}

      <Routes>
        <Route path="/pedro-portfolio" element={<MainOfficial />} />
        <Route path="/pedro-portfolio/requests" element={<RequestList />} />
        <Route path="/pedro-portfolio/details" element={<RTIRequestDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

