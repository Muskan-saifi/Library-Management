import {
  RotateCcw,
  Trash2,
  BookOpen,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function BookCard({
  book,
  index,
  onToggle,
  onDelete
}) {
  const isAvailable = book.available;

  return (
    <article
      className="bookCard"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {/* Book Cover */}
      <div className="coverWrap">
        <img
          src={book.cover}
          alt={`${book.title} cover`}
        />

        <div
          className={`statusBadge ${
            isAvailable ? "available" : "issued"
          }`}
        >
          {isAvailable ? (
            <>
              <CheckCircle2 size={12} />
              Available
            </>
          ) : (
            <>
              <BookOpen size={12} />
              Issued
            </>
          )}
        </div>
      </div>

      {/* Book Details */}
      <div className="bookCardBody">
        <h3>{book.title}</h3>

        <p>By {book.author}</p>

        <span className="category">
          {book.category}
        </span>
      </div>

      {/* Actions */}
      <div className="bookCardActions">

        <button
          className={`bookAction ${
            isAvailable
              ? "issueAction"
              : "returnAction"
          }`}
          onClick={() => onToggle(book.id)}
        >
          <span className="actionIcon">
            {isAvailable ? (
              <BookOpen size={16} />
            ) : (
              <RotateCcw size={16} />
            )}
          </span>

          <span className="actionText">
            {isAvailable ? "Issue Book" : "Return Book"}
          </span>

          <ArrowRight
            size={15}
            className="actionArrow"
          />
        </button>

        <button
          className="deleteBtn"
          onClick={() => onDelete(book.id)}
          title="Delete book"
        >
          <Trash2 size={17} />
        </button>

      </div>
    </article>
  );
}