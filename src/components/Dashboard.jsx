import {
  BookOpen, 
  CheckCircle2, 
  Clock3, 
  AlertTriangle, 
  Sparkles, 
  ArrowUpRight,
  LibraryBig
} from "lucide-react";
import StatCard from "./StatCard";

export default function Dashboard({ books, available, issued, onAddBook, onViewBooks }) {
  return (
    <>
      <section className="hero">
  <div>
    <div className="libraryManagementHeader">
      <div className="libraryManagementIcon">
        <LibraryBig size={28} />
      </div>

      <div>
        <div className="eyebrow">
          LIBRARY OVERVIEW <Sparkles size={13} />
        </div>

        <h2>Library Management</h2>

        <p>
          Manage books, members and borrowing activity from one colorful dashboard.
        </p>
      </div>
    </div>
  </div>

  <button
    className="primary addButton"
    onClick={onAddBook}
  >
    ＋ Add New Book
  </button>
</section>

      <section className="stats">
        <StatCard icon={<BookOpen />} label="Total Books" value={books.length} note="+12 this month" type="purple" />
        <StatCard icon={<CheckCircle2 />} label="Available" value={available} note="Ready to borrow" type="green" />
        <StatCard icon={<Clock3 />} label="Issued" value={issued} note="Currently borrowed" type="orange" />
        <StatCard icon={<AlertTriangle />} label="Overdue" value="3" note="Needs attention" type="pink" />
      </section>

      <section className="contentGrid">
        <div className="panel recentPanel">
          <div className="panelHead">
            <div><h3>Recently Added Books</h3><p>Fresh arrivals in your library</p></div>
            <button className="textButton" onClick={onViewBooks}>View all <ArrowUpRight size={15} /></button>
          </div>

          <div className="bookRows">
            {books.slice(0, 5).map((book, index) => (
              <div className="bookRow" style={{ animationDelay: `${index * 80}ms` }} key={book.id}>
                <img src={book.cover} alt={`${book.title} cover`} />
                <div className="bookInfo">
                  <b>{book.title}</b>
                  <span>{book.author} · {book.category}</span>
                </div>
                <span className={`status ${book.available ? "available" : "issued"}`}>
                  <i /> {book.available ? "Available" : "Issued"}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel activityPanel">
          <div className="panelHead">
            <div><h3>Library Activity</h3><p>This week</p></div>
          </div>
          <div className="donut"><div><b>82%</b><span>Activity</span></div></div>
          <div className="legend">
            <p><i className="purpleDot" /> Books borrowed <b>42</b></p>
            <p><i className="greenDot" /> Books returned <b>37</b></p>
            <p><i className="orangeDot" /> New members <b>12</b></p>
          </div>
        </div>
      </section>
    </>
  );
}