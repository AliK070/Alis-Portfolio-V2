import './ProjectCard.css';

export default function ProjectCard({ title, description, icon, link }) {
  return (
    <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
      <div className="project-icon">
        <img src={icon} alt={`${title} icon`} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
