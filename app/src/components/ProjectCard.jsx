import './ProjectCard.css';

export default function ProjectCard({ title, description, icon, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-card">
      <div className="project-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}
