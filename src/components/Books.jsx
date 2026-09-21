import { Plus, LibraryBig } from "lucide-react";
import BookCard from "./BookCard";

export default function Books({
  books,
  onAdd,
  onToggle,
  onDelete
}) {
  return (
    <section className="pageSection">

      {/* PAGE HEADER */}
      <div className="pageTop">

        <div className="booksHeading">

          <div className="eyebrow">
            <LibraryBig size={13} />
            BOOK COLLECTION
          </div>

          <h2>
            Explore your books <span>📚</span>
          </h2>

          <p>
            Manage your collection and track book availability.
          </p>

        </div>

        <button
          className="primary addBookButton"
          onClick={onAdd}
        >
          <Plus size={18} />
          Add New Book
        </button>

      </div>

      {/* BOOK GRID */}
      <div className="bookGrid">

        {books.map((book, index) => (
          <BookCard
            key={book.id}
            book={book}
            index={index}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}

      </div>

      {/* EMPTY RESULT */}
      {!books.length && (
        <div className="emptySearch">
          <div className="emptySearchIcon">
            📚
          </div>

          <h3>No books found</h3>

          <p>
            Try searching with another book title or author.
          </p>
        </div>
      )}

    </section>
  );
}