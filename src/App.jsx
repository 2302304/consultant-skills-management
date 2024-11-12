// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css'; // Tuodaan App.css tyylitiedosto

const Home = () => <h2>Etusivu</h2>;
const Consultants = () => <h2>Konsultit</h2>;
const TeamCV = () => <h2>Tiimi-CV</h2>;

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
