import { Search, Bell, Menu } from "lucide-react";

export default function Header({ title, query, setQuery, onMenu }) {
  return (
    <header>
      <div className="headerLeft">
        <button className="menuBtn" onClick={onMenu}><Menu size={23} /></button>
        <div>
          <h1>{title}</h1>
          <p>Welcome back! Here's what's happening today.</p>
        </div>
      </div>

      <div className="headerActions">
        <label className="search">
          <Search size={18} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books..."
          />
        </label>
        <button className="iconBtn"><Bell size={19} /><span /></button>
        <div className="profile">AD</div>
      </div>
    </header>
  );
}