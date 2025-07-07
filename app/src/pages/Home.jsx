import SectionCard from '../components/SectionCard';

export default function Home() {
  return (
    <main className="home">
      <section className="intro">
      
        <h1>Ali Khan</h1>
        <p>
          Full-stack developer and tech enthusiast passionate about accessibility, AI, and innovation.
        </p>
      </section>

      <SectionCard
        title="Education"
        summary="University of Toronto (2025–2029), Computer Science"
        to="/education"
      />
      <SectionCard
        title="Experiences"
        summary="LGT, STEM Club, Developers Club, eSports — community & leadership roles"
        to="/experiences"
      />

      <SectionCard
        title="Technical Skills"
        summary="Languages, libraries, tools — all I’ve worked with"
        to="/technical-skills"
      />

      <SectionCard
        title="Personal Projects"
        summary="8+ major projects from React to Arduino, Python, and C#"
        to="/projects"
      />
      <SectionCard
        title="Mini Blogs"
        summary="A few of my own blogs here and there in relation to tech"
        to="/blog"
      />

    
    </main>
    
  );
}
