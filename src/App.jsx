import React, { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";

import { books as startingBooks, members } from "./data/libraryData";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Books from "./components/Books";
import Members from "./components/Members";
import IssueReturn from "./components/IssueReturn";
import History from "./components/History";
import Settings from "./components/Settings";
import AddBookModal from "./components/AddBookModal";
import LibraryTipModal from "./components/LibraryTipModal";

import "./styles.css";

export default function App() {
  const [active, setActive] = useState("Dashboard");

  const [books, setBooks] = useState(startingBooks);

  const [query, setQuery] = useState("");

  const [menuOpen, setMenuOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [libraryTipOpen, setLibraryTipOpen] = useState(false);

  const [toast, setToast] = useState("");

  // Library transaction history
  const [history, setHistory] = useState([]);

  const filteredBooks = useMemo(() => {
    const text = query.trim().toLowerCase();

    if (!text) return books;

    return books.filter((book) =>
      `${book.title} ${book.author} ${book.category}`
        .toLowerCase()
        .includes(text)
    );
  }, [books, query]);

  const available = books.filter((book) => book.available).length;
  const issued = books.length - available;

  function notify(message) {
    setToast(message);

    window.clearTimeout(window.toastTimer);

    window.toastTimer = window.setTimeout(() => {
      setToast("");
    }, 2600);
  }

  function addBook(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const newBook = {
      id: Date.now(),
      title: form.get("title"),
      author: form.get("author"),
      category: form.get("category"),
      available: true,
      cover: "/src/assets/atomic-habits.svg",
    };

    setBooks((current) => [newBook, ...current]);

    setModalOpen(false);

    notify("New book added successfully!");
  }

  function toggleBook(id) {
    setBooks((current) =>
      current.map((book) =>
        book.id === id
          ? { ...book, available: !book.available }
          : book
      )
    );

    notify("Book status updated!");
  }

  function deleteBook(id) {
    setBooks((current) =>
      current.filter((book) => book.id !== id)
    );

    notify("Book removed from library.");
  }

  // ================================
  // ISSUE / RETURN BOOK
  // ================================
  function handleIssueReturn(bookId, memberId) {
    const book = books.find((item) => item.id === bookId);

    if (!book) return;

    const member = members.find(
      (item) => item.id === memberId
    );

    const memberName =
      member?.name ||
      member?.fullName ||
      member?.email ||
      "Library Member";

    const today = new Date();

    const date = today.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

    if (book.available) {
      // ISSUE BOOK
      setBooks((current) =>
        current.map((item) =>
          item.id === bookId
            ? { ...item, available: false }
            : item
        )
      );

      setHistory((current) => [
        {
          id: Date.now(),
          bookId: book.id,
          bookTitle: book.title,
          memberId,
          memberName,
          type: "Issued",
          date,
        },
        ...current,
      ]);

      notify(`"${book.title}" issued to ${memberName}.`);
    } else {
      // RETURN BOOK
      setBooks((current) =>
        current.map((item) =>
          item.id === bookId
            ? { ...item, available: true }
            : item
        )
      );

      setHistory((current) => [
        {
          id: Date.now(),
          bookId: book.id,
          bookTitle: book.title,
          memberId,
          memberName,
          type: "Returned",
          date,
        },
        ...current,
      ]);

      notify(`"${book.title}" returned successfully.`);
    }
  }

  function selectPage(page) {
    setActive(page);
    setMenuOpen(false);
  }

  return (
    <div className="app">

      <Sidebar
        active={active}
        onChange={selectPage}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLibraryTip={() => setLibraryTipOpen(true)}
      />

      <main className="main">

        <Header
          title={active}
          query={query}
          setQuery={setQuery}
          onMenu={() => setMenuOpen(true)}
        />

        {/* ================= DASHBOARD ================= */}

        {active === "Dashboard" && (
          <Dashboard
            books={books}
            available={available}
            issued={issued}
            onAddBook={() => setModalOpen(true)}
            onViewBooks={() => setActive("Books")}
          />
        )}

        {/* ================= BOOKS ================= */}

        {active === "Books" && (
          <Books
            books={filteredBooks}
            onAdd={() => setModalOpen(true)}
            onToggle={toggleBook}
            onDelete={deleteBook}
          />
        )}

        {/* ================= MEMBERS ================= */}

        {active === "Members" && (
          <Members
            members={members}
            notify={notify}
          />
        )}

        {/* ================= ISSUE & RETURN ================= */}

        {active === "Issue & Return" && (
          <IssueReturn
            books={books}
            members={members}
            onIssueReturn={handleIssueReturn}
          />
        )}

        {/* ================= HISTORY ================= */}

        {active === "History" && (
          <History
            history={history}
          />
        )}

        {/* ================= SETTINGS ================= */}

        {active === "Settings" && (
          <Settings
            notify={notify}
          />
        )}

      </main>

      {/* MOBILE OVERLAY */}

      {menuOpen && (
        <div
          className="overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ADD BOOK MODAL */}

      {modalOpen && (
        <AddBookModal
          onClose={() => setModalOpen(false)}
          onSubmit={addBook}
        />
      )}

      {/* LIBRARY TIP MODAL */}

{libraryTipOpen && (
  <LibraryTipModal
    onClose={() => setLibraryTipOpen(false)}
  />
)}

      {/* TOAST */}

      {toast && (
        <div className="toast">
          <CheckCircle2 size={19} />
          {toast}
        </div>
      )}

    </div>
  );
}