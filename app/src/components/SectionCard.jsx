import './SectionCard.css';
import { Link } from 'react-router-dom';

export default function SectionCard({ title, summary, to }) {
  return (
    <Link className="section-card" to={to}>
      <h3>{title}</h3>
      <p>{summary}</p>
    </Link>
  );
}
