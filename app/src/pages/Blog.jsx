import blogPosts from '../data/blogData';
import BlogCard from '../components/BlogCard';
import BackButton from '../components/BackButton';

export default function Blog() {
  return (
    <main className="page">
      <BackButton />
      <h2>Blog</h2>
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </main>
  );
}
