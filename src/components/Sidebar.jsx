// src/components/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlineUser, AiOutlineFileText } from 'react-icons/ai';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <h2>Konsulttien osaamisenhallinta</h2>
      <nav>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">
              <AiOutlineHome className="icon" /> Etusivu
            </Link>
          </li>
          <li className={location.pathname === '/konsultit' ? 'active' : ''}>
            <Link to="/konsultit">
              <AiOutlineUser className="icon" /> Konsultit
            </Link>
          </li>
          <li className={location.pathname === '/tiimi-cv' ? 'active' : ''}>
            <Link to="/tiimi-cv">
              <AiOutlineFileText className="icon" /> Tiimi-CV
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
