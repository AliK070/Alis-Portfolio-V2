import { Link } from 'react-router-dom';
import './BlogCard.css';

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.id}`} className="blog-card">
      <h3>{post.title}</h3>
      <p className="blog-date">{post.date}</p>
      <p className="blog-summary">{post.summary}</p>
    </Link>
  );
}
