export default function StatCard({ icon, label, value, note, type }) {
  return (
    <article className={`stat ${type}`}>
      <div className="statIcon">{icon}</div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{note}</small>
      </div>
    </article>
  );
}