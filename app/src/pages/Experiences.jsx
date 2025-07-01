import React from 'react';
import BackButton from '../components/BackButton';

export default function Experiences() {
  return (
    <main className="page">
      <BackButton />
      <h2>Experiences</h2>

      <section>
        <h3>Let's Get Together – Software Development & Video Production</h3>
        <p><strong>Mississauga, ON · Jun 2024 – Nov 2024 · Permanent Part-Time</strong></p>
        <ul>
          <li>Co-developed the LGT Web Portal to track donors and integrate QGIS mapping systems.</li>
          <li>Built scalable system architecture with React.js frontend and Python/SQLite → PostgreSQL backend.</li>
          <li>Tracked and managed over 1,400+ donated items using custom dashboards.</li>
          <li>Produced 20+ videos for the Tech4All YouTube channel focused on accessibility, AI, and tech education.</li>
        </ul>
      </section>

      <section>
        <h3>Let's Get Together – Technology Repair & Refurbishment</h3>
        <p><strong>Mississauga, ON · Jun 2023 – Sep 2023 · Permanent Part-Time</strong></p>
        <ul>
          <li>Part of the R³ Team (Refurbish, Re-image, Recycle) focused on e-waste reduction and digital equity.</li>
          <li>Repaired and restored 60+ computers for community donation (both Intel and AMD systems).</li>
          <li>Created a 65+ page refurbishment manual covering hardware cleaning, DBAN erasure, and process training.</li>
          <li>Led 2 public workshops, including one for local MPs on digital access and secure data destruction.</li>
        </ul>
      </section>

      <section>
        <h3>Needipedia – Web Design and Developer</h3>
        <p><strong>May 2023 – Jul 2023 · On-call </strong></p>
        <ul>
          <li> Created new designs and user interfaces for the given task of designing and capturing the original feel of the website. </li>
          <li> Worked on other tasks such as writing reports and creating inquires about using tools to better plan the teams meetings and general schedule for productivity. </li>
        </ul>
      </section>
    </main>
  );
}
