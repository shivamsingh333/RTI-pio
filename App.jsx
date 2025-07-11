import React from 'react';
import Header from './component/header';
import TopBar from './component/topbar';
import './App.css';
import './component/header.css';
import MainOfficial from './component/mainofficial';
import Footer from './component/footer';
import Header1 from './component/head1';
import Navbar from './component/mainbar';
import Dashboard from './component/dashmain';
import RTIForm from './component/form';
import  './component/RTIForm.css';

function App() {
  return (
    <>
    <div>
  <TopBar />
    <Header />
     <MainOfficial/>

      <Footer />
    <hr />
    <hr />
   

    </div>
    <div>
       <TopBar />
    <Header1 />
    <Navbar/>
    <Dashboard/>
     <Footer />
     <hr />
     <hr />
    </div>
   <div>
     <TopBar />
     <Header1 />
     <Navbar/>
     <Dashboard/>
     <Footer />
<hr />
<hr />
   </div>
   <div>
     <TopBar />
     <Header1 />
     <Navbar/>
    <RTIForm/>
       <Footer />

   </div>

 </>
  );
};
export default App;
