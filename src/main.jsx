import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'; // SQL Editor
import LandingPage from './Landing/LandingPage.jsx'; // New landing page
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
