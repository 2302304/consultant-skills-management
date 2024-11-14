// src/Pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      {/* Tervetuloteksti */}
      <h1>Tervetuloa Pinjan osaamisenhallinnan ohjelmistoon!</h1>
      <p>
        Tämä ohjelmisto tarjoaa kattavat työkalut konsulttien osaamisen hallintaan.
        Voit etsiä konsultteja taidoiltaan, tarkastella heidän osaamistaan ja ladata
        CV:n PDF-muodossa. Sovelluksen avulla voidaan parantaa työn tehokkuutta ja
        helpottaa oikean osaamisen löytämistä projektiin.
      </p>

      {/* Linkit CV-tulostukseen */}
      <div className="cv-links">
        <Link to="/konsultit" className="cv-link">
          Hae ja tulosta yksittäisen konsultin CV
        </Link>
        <Link to="/tiimi-cv" className="cv-link">
          Tulosta tiimi-CV mainosmateriaalia varten
        </Link>
      </div>
    </div>
  );
};

export default Home;
