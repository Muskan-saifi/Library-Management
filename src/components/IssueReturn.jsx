import {
  BookOpen,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function IssueReturn({
  books = [],
  onIssueReturn
}) {
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

      <div className="panel issuePanel">

        <div className="panelHead">
          <div>
            <h3>Currently Issued Books</h3>

            <p>
              {issuedBooks.length} book
              {issuedBooks.length !== 1 ? "s" : ""}
              {" "}currently issued
            </p>
          </div>
        </div>

        {issuedBooks.length > 0 ? (
          <div className="issueList">

            {issuedBooks.map((book, index) => (
              <div
                className="issueItem"
                key={book.id}
                style={{
                  animationDelay: `${index * 80}ms`
                }}
              >

                <div className="issueCover">
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                  />
                </div>

                <div className="issueInfo">

                  <h3>{book.title}</h3>

                  <p>By {book.author}</p>

                  <div className="issueStatus">
                    <span className="issuedDot"></span>
                    Currently Issued
                  </div>

                </div>

                <button
                  className="returnButton"
                  onClick={() => onIssueReturn(book.id)}
                >
                  <RotateCcw size={15} />
                  <span>Return Book</span>
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