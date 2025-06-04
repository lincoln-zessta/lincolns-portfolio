// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import HomePage from './components/Pages/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ExperiencePage from './components/Pages/ExperiencePage';
import ContactPage from './components/Pages/ContactPage';
import SkillsPage from './components/Pages/SkillsPage'; // <--- 1. IMPORT SkillsPage HERE

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />

        <main style={{ padding: '20px', flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/skills" element={<SkillsPage />} /> {/* <--- 2. ADD THE ROUTE FOR SKILLS HERE */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;