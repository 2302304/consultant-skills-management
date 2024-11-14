// src/components/TeamCV.jsx
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { margin: 10, padding: 10, borderBottom: '1px solid #eee' },
  title: { fontSize: 20, marginBottom: 10 }
});

const TeamCV = ({ consultants }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Tiimi-CV</Text>
      {consultants.map((consultant, index) => (
        <View key={index} style={styles.section}>
          <Text>Nimi: {consultant.name}</Text>
          <Text>Koulutustaso: {consultant.educationLevel}</Text>
          <Text>Koulutusohjelma: {consultant.educationProgram}</Text>
          <Text>Valmistumisvuosi: {consultant.graduationYear}</Text>
          <Text>Sertifikaatit: {consultant.certificates.join(", ")}</Text>
          <Text>Käydyt kurssit: {consultant.courses.join(", ")}</Text>
          <Text>Projektikokemus: {consultant.projectExperience.join(", ")}</Text>
          <Text>Teknologiakokemus: {consultant.techExperience.join(", ")}</Text>
          <Text>Työkokemus (vuosina): {consultant.workExperienceYears}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default TeamCV;
