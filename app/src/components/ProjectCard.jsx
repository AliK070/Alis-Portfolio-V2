import './ProjectCard.css';

export default function ProjectCard({ title, description, languages = [], link }) {
  return (
    
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-languages">
  {languages.map((lang) => (
    <span key={lang} className="lang-icon-wrapper">
      <i className={`devicon-${lang}-plain`} aria-hidden="true"></i>
      <i className={`devicon-${lang}-original`} aria-hidden="true"></i>
    </span>
  ))}
</div>
    </a>
  );
}

