// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout'
import Home from './pages/Home'
import EmailAgent from './pages/EmailAgent'
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/email-agent" element={<EmailAgent />} />
          {/* add more routes here */}
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
