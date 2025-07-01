import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Education from './pages/Education';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import './styles/global.css';
import './styles/variables.css';

export default function App() {

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
