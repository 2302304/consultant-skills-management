// src/Pages/Consultants.jsx
import React, { useState } from "react";
import consultantsData from "../data/consultantsData";
import './Consultants.css';
import { PDFDownloadLink } from "@react-pdf/renderer"; // Tuodaan PDF-latauslinkki

import ConsultantCV from "../components/ConsultantCV"; // PDF-komponentti

const Consultants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConsultants, setFilteredConsultants] = useState(consultantsData);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filtered = consultantsData.filter((consultant) => {
      return (
        consultant.name.toLowerCase().includes(value.toLowerCase()) ||
        consultant.educationLevel.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredConsultants(filtered);
  };

  return (
    <div className="consultants-page">
      <h2>Konsultit</h2>
      <input
        type="text"
        placeholder="Hae konsulttia nimellä tai koulutustasolla"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <ul className="consultants-list">
        {filteredConsultants.map((consultant) => (
          <li key={consultant.id} className="consultant-item">
            <h3>{consultant.name}</h3>
            <p>Koulutustaso: {consultant.educationLevel}</p>
            <p>Koulutusohjelma: {consultant.educationProgram}</p>
            <p>Valmistumisvuosi: {consultant.graduationYear}</p>
            <p>Sertifikaatit: {consultant.certificates.join(", ")}</p>
            <p>Käydyt kurssit: {consultant.courses.join(", ")}</p>
            <p>Projektikokemus: {consultant.projectExperience.join(", ")}</p>
            <p>Teknologiakokemus: {consultant.techExperience.join(", ")}</p>
            <p>Työkokemus (vuosina): {consultant.workExperienceYears}</p>
            
            {/* Lataa PDF-painike */}
            <PDFDownloadLink
              document={<ConsultantCV consultant={consultant} />}
              fileName={`${consultant.name}-CV.pdf`}
              className="pdf-button"
            >
              {({ loading }) => (loading ? "Ladataan..." : "Lataa CV PDF:nä")}
            </PDFDownloadLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Consultants;
