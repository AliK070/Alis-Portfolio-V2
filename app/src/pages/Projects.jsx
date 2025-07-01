import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import React from 'react';
import BackButton from '../components/BackButton';

export default function Projects() {
  const projects = [
    {
      title: 'LGT Web Portal',
      description: 'Full-stack system with donor tracking, QGIS mapping, and PostgreSQL database.',
      icon: '/icons/react.svg',
      link: 'https://github.com/yourusername/lgt-web-portal',
    },
    {
      title: 'Wordle Clone',
      description: 'C# WinForms clone of the popular Wordle game with logic and scoring.',
      icon: '/icons/csharp.svg',
      link: 'https://github.com/yourusername/wordle-clone',
    },
    {
      title: '3D FPS Game',
      description: 'Multiplayer shooter with time travel mechanics built using Ursina (Python).',
      icon: '/icons/python.svg',
      link: 'https://github.com/yourusername/3d-fps-game',
    },
    {
      title: 'IoT BLE Motor Control',
      description: 'Arduino R4 project to control motors via Bluetooth Low Energy.',
      icon: '/icons/arduino.svg',
      link: 'https://github.com/yourusername/iot-ble-motor-control',
    },
    {
      title: 'Portfolio Website',
      description: 'Minimal React portfolio with document-style layout and dark mode.',
      icon: '/icons/react.svg',
      link: 'https://github.com/yourusername/portfolio-site',
    },
    {
      title: 'Game Jam Puzzle',
      description: 'Unity-based puzzle platformer created in 72 hours for a student jam.',
      icon: '/icons/csharp.svg',
      link: 'https://github.com/yourusername/game-jam',
    },
    {
      title: 'Smart Home BLE App',
      description: 'Arduino + mobile BLE dashboard for controlling LED and servo systems.',
      icon: '/icons/arduino.svg',
      link: 'https://github.com/yourusername/smart-home-ble',
    },
    {
      title: 'Data Visualizer',
      description: 'Python data visualizer with pandas/matplotlib for CSV analysis.',
      icon: '/icons/python.svg',
      link: 'https://github.com/yourusername/data-visualizer',
    },
  ];

  return (
    <main className="page">
      <BackButton />
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </main>
  );
}
