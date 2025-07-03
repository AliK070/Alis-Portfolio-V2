import React from 'react';
import BackButton from '../components/BackButton';
import Collapsible from '../components/Collapsible';

export default function Education() {
  return (
    <main className="page">
      <BackButton />
      <h2>Education</h2>

      <Collapsible title="University of Toronto - Honours Bachelor of Science (HBSc) | 2025–2029">
      <b>Study:</b>
        <ul>
          <li>Computer Science (Specalist)</li>
        </ul>
      <b>Faculty:</b>
        <ul>
          <li>Faculty of Arts and Science</li>
        </ul>
      </Collapsible>

      <Collapsible title="d’Youville Secondary School - Ontario Secondary School Diploma | 2021-2025">

      <b>Grade:</b>
        <ul>
          <li>GPA: 3.9</li>
          <li>Percentage: 95.2%</li>
        </ul>

        <b>Activites and Societies:</b>
        <ul>
          <li>CETA Robotics - Soccer Robot Silver Winners (May 2025)</li>
          <li>d'Y Badminton Team (Jan-May 2025)</li>
          <li>STEM Club Vice-President (Jan 2024-Jun 2025)</li>
          <li>Debate Club (May 2024-Jun 2025) </li>
          <li>DPCDSB and Sheridan Video Game Development Contest (Apr 2024-May 2024)</li>
          <li>Panthers eSports Team Financial Director (Feb 2024-Jun 2025) </li>
          <li>Music Club Trombonist (Apr 2022-Jun 2022)</li>
        </ul>

        <b>Honors and Awards</b>
        <ul>
          <li>Ontario Scholar (June 2025)</li>
          <li>Academic Excellence - Overall Average of +90% (2021-2025)</li>
          <li>Highest standing in International Buisness Fundamentals (2024- 2025)</li>
          <li>Highest standing in Intro to Computer Science (2023-2024)</li>
          <li>Highest standing in Computer Engineering Technology (2023-2024)</li>
          <li>Highest standing in Exploring Computer Technology (2022-2023)</li>
          <li>Highest standing in Career Studies (2022-2023)</li>
          <li>Highest standing in Mathemathics (2021-2022)</li>
        </ul>

      </Collapsible>
    </main>
  );
}
