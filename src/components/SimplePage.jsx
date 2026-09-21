import { Repeat2, History, Settings } from "lucide-react";

const icons = { "Issue & Return": Repeat2, History, Settings };

export default function SimplePage({ title, onBack }) {
  const Icon = icons[title];
  return (
    <section className="emptyPage">
      <div className="emptyIcon"><Icon /></div>
      <h2>{title}</h2>
      <p>This section is ready for the next feature. The navigation and animated UI are already connected.</p>
      <button className="primary" onClick={onBack}>Back to Dashboard</button>
    </section>
  );
}