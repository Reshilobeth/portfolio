import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


// --------------FONT--------------
import "./fonts/Sk-Modernist-Regular.ttf"
import "./fonts/Sk-Modernist-Bold.ttf"
// --------------FONT--------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
