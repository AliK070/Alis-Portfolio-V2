import './SkillCard.css';

export default function SkillCard({ title, description, skills = [] }) {
    const sortedSkills = [...skills].sort();
    const formattedSkillList = sortedSkills.join(', ');
  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p className="skill-description">
        {description} <br />
        <strong>Skills:</strong> {formattedSkillList}.
      </p>
      <div className="project-languages">
        {skills.map((skill) => (
          <span key={skill} className="lang-icon-wrapper">
            <i className={`devicon-${skill}-plain`} aria-hidden="true"></i>
            <i className={`devicon-${skill}-original`} aria-hidden="true"></i>
          </span>
        ))}
      </div>
    </div>
  );
}