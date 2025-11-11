import SectionHeader from './SectionHeader.jsx';

export default function AboutSection({ paragraphs }) {
  return (
    <section className="panel" id="about">
      <SectionHeader
        title="About Me"
        subtitle="Manufacturing & supply chain innovator"
      />
      <div className="panel-body">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}