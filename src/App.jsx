// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';
import Consultants from './Pages/Consultants';
import TeamCV from './Pages/TeamCV';
import './App.css'; // Tuodaan App.css tyylitiedosto

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-wrapper">
          <Sidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/konsultit" element={<Consultants />} />
              <Route path="/tiimi-cv" element={<TeamCV />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
