// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter } from 'react-router-dom';
// import ReactDOM from 'react-dom';



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
  
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);


