import {
  LayoutDashboard,
  BookOpen,
  Users,
  Repeat2,
  History,
  Settings,
  Library,
  LibraryBig,
  Sparkles,
  X
} from "lucide-react";

const items = [
  ["Dashboard", LayoutDashboard],
  ["Books", BookOpen],
  ["Members", Users],
  ["Issue & Return", Repeat2],
  ["History", History],
  ["Settings", Settings]
];

export default function Sidebar({
  active,
  onChange,
  open,
  onClose,
  onLibraryTip
}) {
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>

      <div className="brand">
          <div className="brandIcon">
            <LibraryBig size={22} />
        </div>

        <div>
          <b>BookVerse</b>
          <span>SMART LIBRARY</span>
        </div>

        <button
          className="closeBtn"
          onClick={onClose}
        >
          <X size={20} />
        </button>
      </div>

      <div className="navLabel">
        MAIN MENU
      </div>

      <nav>
        {items.map(([label, Icon]) => (
          <button
            key={label}
            className={`nav ${active === label ? "active" : ""}`}
            onClick={() => onChange(label)}
          >
            <Icon size={19} />
            <span>{label}</span>

            {active === label && (
              <i className="activeDot" />
            )}
          </button>
        ))}
      </nav>

      {/* CLICKABLE LIBRARY TIP */}
      <button
        type="button"
        className="sidebarCard"
        onClick={onLibraryTip}
      >
        <Sparkles size={20} />

        <b>Library Tip</b>

        <p>
          Keep your books organized and your readers happy.
        </p>
      </button>

    </aside>
  );
}