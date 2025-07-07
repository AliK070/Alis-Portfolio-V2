import SkillCard from '../components/SkillCard';
import BackButton from '../components/BackButton';

export default function TechnicalSkills() {
  return (
    <main className="technical-skills">
    <BackButton/>
      <h1>Technical Skills</h1>
      <SkillCard
        title="Languages"
        description="Languages I've used in projects and coursework"
        skills={["c", "cplusplus", "csharp", "python", "java", "javascript", "html5", "css3", "kotlin", "sql"]}
      />
      <SkillCard
        title="Tools & Frameworks"
        description="Libraries, frameworks, and tools that help power my apps."
        skills={["react", "vite", "nodejs", "bootstrap", "mysql", "sqlite", "dotnetcore", "arduino", "electron", "salesforce"]}
      />
      <SkillCard
        title="Platforms"
        description="Systems and platforms I develop or deploy on."
        skills={["github", "linux", "windows11"]}
      />
    </main>
  );
}
