import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogData';
import BackButton from '../components/BackButton';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) return <main className="page"><h2>Post Not Found</h2></main>;

  return (
    <main className="page">
      <BackButton />
      <h2>{post.title}</h2>
      <p className="blog-date">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </main>
  );
}
