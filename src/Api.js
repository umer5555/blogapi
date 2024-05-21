import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ecom from './Ecom';
import ecomapi from './ecomapi';
import { Link } from "react-router-dom";
import TestApi from './TestApi';
import Form from './Form';
 import Crud from './Crud';
 
function Api() {
  return (
    <Router>
      <div> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/ecomapi">API</Link></li>
            <li><Link to="/testapi">Test API</Link></li>
            <li><Link to="/form">Form</Link></li>
            <li><Link to="/crud">Crud</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Ecom />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/ecomapi" element={<ecomapi />} />
          <Route path="/testapi" element={<TestApi />} />
          <Route path="/crud" element={<Crud />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default Api;
