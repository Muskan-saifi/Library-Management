import {
  BookOpen,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function IssueReturn({ books = [], onToggle }) {
  const issuedBooks = books.filter((book) => !book.available);

  return (
    <section className="pageSection">

      <div className="pageTop">
        <div>
          <div className="eyebrow">
            <BookOpen size={13} />
            ISSUE & RETURN
          </div>

          <h2>Manage Book Transactions 📚</h2>

          <p>
            Issue books to members and manage returned books.
          </p>
        </div>
      </div>

      <div className="panel">
        <div className="panelHead">
          <div>
            <h3>Currently Issued Books</h3>
            <p>
              {issuedBooks.length} book
              {issuedBooks.length !== 1 ? "s" : ""} currently issued
            </p>
          </div>
        </div>

        {issuedBooks.length > 0 ? (
          <div className="issueList">
            {issuedBooks.map((book) => (
              <div className="issueItem" key={book.id}>

                <img
                  src={book.cover}
                  alt={book.title}
                />

                <div className="issueInfo">
                  <b>{book.title}</b>
                  <span>{book.author}</span>

                  <small>
                    <span className="issuedDot"></span>
                    Currently Issued
                  </small>
                </div>

                <button
                  className="returnButton"
                  onClick={() => onToggle(book.id)}
                >
                  <RotateCcw size={15} />
                  Return Book
                </button>

              </div>
            ))}
          </div>
        ) : (
          <div className="noIssuedBooks">
            <div className="successIcon">
              <CheckCircle2 size={28} />
            </div>

            <h3>No books are currently issued</h3>

            <p>
              All books are available in the library.
            </p>
          </div>
        )}
      </div>

    </section>
  );
}