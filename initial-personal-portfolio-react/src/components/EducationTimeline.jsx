import SectionHeader from './SectionHeader.jsx';

export default function EducationTimeline({ items }) {
  return (
    <section className="panel" id="education">
      <SectionHeader
        title="Education"
        subtitle="Business + engineering perspective"
      />
      <div className="timeline">
        {items.map(({ year, degree, school, details }) => (
          <article className="timeline-entry" key={year + degree}>
            <span className="timeline-year">{year}</span>
            <div className="timeline-card">
              <h3>{degree}</h3>
              <p className="meta">{school}</p>
              <p>{details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}