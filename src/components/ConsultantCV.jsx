// src/components/ConsultantCV.jsx
import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import styles from './ConsultantCVStyles';

const ConsultantCV = ({ consultant }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text>{consultant.name}</Text>
        <Text>Koulutustaso: {consultant.educationLevel}</Text>
        <Text>Koulutusohjelma: {consultant.educationProgram}</Text>
        <Text>Valmistumisvuosi: {consultant.graduationYear}</Text>
        <Text>Sertifikaatit: {consultant.certificates.join(", ")}</Text>
        <Text>Käydyt kurssit: {consultant.courses.join(", ")}</Text>
        <Text>Projektikokemus: {consultant.projectExperience.join(", ")}</Text>
        <Text>Teknologiakokemus: {consultant.techExperience.join(", ")}</Text>
        <Text>Työkokemus (vuosina): {consultant.workExperienceYears}</Text>
      </View>
    </Page>
  </Document>
);

export default ConsultantCV;
