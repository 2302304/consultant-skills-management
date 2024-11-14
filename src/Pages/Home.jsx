// src/Pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer'; // PDF-latauslinkki
import './Home.css';
import consultantsData from "../data/consultantsData"; // Konsulttidata
import TeamCV from "../components/TeamCV"; // PDF-komponentti

const Home = () => {
  return (
    <div className="home-page">
      <h1>Tervetuloa Pinjan osaamisenhallinnan ohjelmistoon!</h1>
      <p>
        Tämä ohjelmisto tarjoaa kattavat työkalut konsulttien osaamisen hallintaan.
        Voit etsiä konsultteja taidoiltaan, tarkastella heidän osaamistaan ja ladata
        CV:n PDF-muodossa. Sovelluksen avulla voidaan parantaa työn tehokkuutta ja
        helpottaa oikean osaamisen löytämistä projektiin.
      </p>

      {/* Linkki kaikkien konsulttien tiimi-CV:n tulostukseen */}
      <PDFDownloadLink
        document={<TeamCV consultants={consultantsData} />}
        fileName="Tiimi-CV.pdf"
        className="cv-link"
      >
        {({ loading }) => (loading ? "Ladataan..." : "Tulosta tiimi-CV mainosmateriaalia varten")}
      </PDFDownloadLink>

      {/* Linkki Konsultit-sivulle yksittäisen konsultin tulostusta varten */}
      <Link to="/konsultit" className="cv-link">
        Hae ja tulosta yksittäisen konsultin CV
      </Link>
    </div>
  );
};

export default Home;
