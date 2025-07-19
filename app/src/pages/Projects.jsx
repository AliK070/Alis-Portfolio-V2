import ProjectCard from '../components/ProjectCard';
import './Projects.css';
import React from 'react';
import BackButton from '../components/BackButton';

export default function Projects() {
  const projects = [

    {
      title: 'Personal Portfolio',
      description:
        'Modern personal portfolio built with React and Vite, featuring a document-style layout with expandable sections for About Me, Education, Experiences, and Projects. Designed with a clean, minimal aesthetic and responsive card-based navigation.',
      languages: ['react', 'vitejs', 'javascript', 'html5', 'css3'],
      link: 'https://github.com/AliK070/Alis-Portfolio-V2',
    },

    {

      title: 'ESP32 WiFI Controlled Car',
      description:
        'Used ESP32 to build a WiFi-controlled car, applying my Arduino and motor knowledge. Although ESP32 has a steeper learning curve than Arduino, it’s a far superior MCU to the ATmega328.',
      languages: ['arduino', 'cplusplus', 'html5'],
      link: 'https://github.com/AliK070/ESP32-WiFI-Controlled-Car',
    },
    {
      title: 'Motor Control with OpenCV',
      description: 'Controlled motor speed (PWM) using hand tracking with OpenCV, measuring the distance between thumb and pinky tips. Used Python with PyFirmata2 to send PWM signals to an Arduino, adjusting motor power proportionally to hand movement.',
      languages: ['arduino','python', 'opencv'],
      link: 'https://github.com/AliK070/Motor-Control-With-OpenCV',
    },
    {
      title: 'Flat Notes',
      description: 'Minimal sticky note app for to-dos, reminders, and quick notes. Built with Electron, HTML, CSS, and JS. Inspired by my portfolio design, it helped kickstart my journey into JavaScript.',
      icon: 'python',
      languages: ['javascript', 'html5', 'css3', 'electron'],
      link: 'https://github.com/AliK070/Flat-Notes',
    },
    {
      title: 'WinForm Projects',
      description: 'Personal and academic WinForms projects built in C#, ranging from simple app clones to more complex applications and games. A hands-on way to explore core programming concepts and UI design.',
      icon: 'arduino',
      languages: ['csharp', 'dotnetcore'],
      link: 'https://github.com/AliK070/WinForm-Projects',
    },
    {
      title: 'Nano Pong',
      description: 'OLED Pong demo with Arduino Nano using the U8g2 graphics library. Two-button input controls a paddle while a bouncing ball follows basic physics and collision logic. The project challenged me to understand object motion and screen boundaries. A fun test of small displays—though I’d opt for a slightly larger screen next time.',
      icon: 'react',
      languages: ['arduino', 'cplusplus'],
      link: 'https://github.com/yourusername/portfolio-site',
    },
    {
      title: 'Discriminant Calculator',
      description: 'Simple discriminant calculator using the quadratic formula variables (a, b, c). Easily run the script or use the downloadable executable from the releases. Made in .NET Core and WinForms.',
      icon: 'csharp',
      languages: ['csharp', 'dotnetcore'],
      link: 'https://github.com/AliK070/Discriminant-Calculator',
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
