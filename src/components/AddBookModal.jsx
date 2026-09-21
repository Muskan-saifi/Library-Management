import { X } from "lucide-react";

export default function AddBookModal({ onClose, onSubmit }) {
  return (
    <div className="modalBackdrop">
      <form className="modal" onSubmit={onSubmit}>
        <div className="modalHead">
          <div>
            <h2>Add New Book</h2>
            <p>Add a book to your collection.</p>
          </div>
          <button type="button" className="plainBtn" onClick={onClose}>
            <X />
          </button>
        </div>

        <label>
          Book Title
          <input name="title" required placeholder="Enter book title" />
        </label>

        <label>
          Author
          <input name="author" required placeholder="Enter author name" />
        </label>

        <label>
          Category
          <select name="category">
            <option>General</option>
            <option>Fiction</option>
            <option>Finance</option>
            <option>Self Growth</option>
            <option>Technology</option>
          </select>
        </label>

        <div className="modalActions">
          <button type="button" className="secondary" onClick={onClose}>Cancel</button>
          <button className="primary">Add Book</button>
        </div>
      </form>
    </div>
  );
}