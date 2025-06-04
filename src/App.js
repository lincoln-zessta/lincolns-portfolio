// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Ensure this is imported

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import HomePage from './components/Pages/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ExperiencePage from './components/Pages/ExperiencePage';
import ContactPage from './components/Pages/ContactPage';
import SkillsPage from './components/Pages/SkillsPage';
import CertificationsPage from './components/Pages/CertificationsPage';

function App() {
  return (
    <Router>
      <div className="App"> {/* Inline styles removed */}
        <Navbar />
        <main className="app-content"> {/* Inline styles removed, added className */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;