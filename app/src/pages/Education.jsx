import React from 'react';
import BackButton from '../components/BackButton';

export default function Education() {
  return (
    <main className="page">
      <BackButton />
      <h2>Education</h2>
      <ul>
        <li><strong>University of Toronto</strong> — BEng, Computer Engineering (Fall 2025 - Expected 2029)</li>
        <li><strong>d’Youville Secondary School</strong> — High School Diploma, Honour Roll, STEM focus</li>
      </ul>
    </main>
  );
}
