// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Home = () => <h2>Etusivu</h2>;
const Consultants = () => <h2>Konsultit</h2>;
const TeamCV = () => <h2>Tiimi-CV</h2>;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flex: 1 }}>
          <Sidebar />
          <main style={{ flex: 1, padding: '20px' }}>
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