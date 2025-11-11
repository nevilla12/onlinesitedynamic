import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import EducationTimeline from './components/EducationTimeline.jsx';
import ExperienceGrid from './components/ExperienceGrid.jsx';
import ContactSection from './components/ContactSection.jsx';
import { hero, about, skills, education, experience, contact } from './data/profile.js';

export default function App() {
  return (
    <>
      <HeroSection {...hero} />
      <main>
        <AboutSection paragraphs={about} />
        <SkillsSection categories={skills} />
        <EducationTimeline items={education} />
        <ExperienceGrid entries={experience} />
        <ContactSection {...contact} />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Alec Neville. All rights reserved.</p>
      </footer>
    </>
  );
}