import SectionHeader from './SectionHeader.jsx';

export default function SkillsSection({ categories }) {
  return (
    <section className="panel" id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Tools & capabilities in daily use"
      />
      <div className="skills-grid">
        {categories.map(({ title, items }) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}