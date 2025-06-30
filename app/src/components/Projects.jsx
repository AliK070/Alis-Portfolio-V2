import ProjectCard from './ProjectCard';
import './Project.css';

export default function Project() {
  const projects = [
    {
      title: 'LGT Web Portal',
      description: 'React + Python system for donor tracking with QGIS mapping.',
      icon: '/icons/react.svg',
      link: 'https://github.com/yourusername/lgt-web-portal',
    },
    {
      title: 'Wordle Clone',
      description: 'Built in C# WinForms replicating the popular word game.',
      icon: '/icons/csharp.svg',
      link: 'https://github.com/yourusername/wordle-clone',
    },
    {
      title: '3D FPS Game',
      description: 'Multiplayer shooter with time travel mechanic in Ursina engine.',
      icon: '/icons/python.svg',
      link: 'https://github.com/yourusername/3d-fps-game',
    },
    {
      title: 'IoT BLE Motor Control',
      description: 'Arduino R4 project controlling motors via Bluetooth Low Energy.',
      icon: '/icons/arduino.svg',
      link: 'https://github.com/yourusername/iot-ble-motor-control',
    },
    {
      title: 'Portfolio Website',
      description: 'Built with React and Vite, showcasing projects and skills.',
      icon: '/icons/react.svg',
      link: 'https://github.com/yourusername/portfolio-website',
    },
    {
      title: 'Game Jam Entry',
      description: 'Fast-paced puzzle game developed in Unity C#.',
      icon: '/icons/csharp.svg',
      link: 'https://github.com/yourusername/game-jam-entry',
    },
    {
      title: 'Smart Home Controller',
      description: 'ESP32 Arduino project for IoT automation and BLE control.',
      icon: '/icons/arduino.svg',
      link: 'https://github.com/yourusername/smart-home-controller',
    },
    {
      title: 'Data Visualizer',
      description: 'Python app using matplotlib and pandas to analyze data.',
      icon: '/icons/python.svg',
      link: 'https://github.com/yourusername/data-visualizer',
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}
