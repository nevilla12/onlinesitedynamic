import SectionHeader from './SectionHeader.jsx';

export default function ExperienceGrid({ entries }) {
  return (
    <section className="panel" id="accomplishments">
      <SectionHeader
        title="Experience Highlights"
        subtitle="Impact across internships & projects"
      />
      <div className="accomplishments-grid">
        {entries.map(({ title, role, period, summary }) => (
          <article className="card" key={title + role + period}>
            <h3>{title}</h3>
            <p className="meta">
              {role} · {period}
            </p>
            <p>{summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}