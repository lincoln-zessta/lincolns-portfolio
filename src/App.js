// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer'; // Import the Footer component

import HomePage from './components/Pages/HomePage';
import ProjectsPage from './components/Pages/ProjectsPage';
import ExperiencePage from './components/Pages/ExperiencePage';
import ContactPage from './components/Pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> {/* Added styles for sticky footer effect */}
        <Navbar />

        <main style={{ padding: '20px', flexGrow: 1 }}> {/* Added flexGrow: 1 */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer /> {/* Use the Footer component here */}
      </div>
    </Router>
  );
}

export default App;