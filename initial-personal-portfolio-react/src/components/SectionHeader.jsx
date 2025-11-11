export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="panel-header">
      <h2>{title}</h2>
      {subtitle && <span className="subtitle">{subtitle}</span>}
    </div>
  );
}