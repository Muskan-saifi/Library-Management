import { X, Sparkles, Check } from "lucide-react";

export default function LibraryTipModal({ onClose }) {
  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        className="modal tipModal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modalHead">
          <div>
            <div className="tipIcon">
              <Sparkles size={22} />
            </div>

            <h2>Library Tip</h2>

            <p>
              A little organization goes a long way.
            </p>
          </div>

          <button
            type="button"
            className="plainBtn"
            onClick={onClose}
            aria-label="Close library tip"
          >
            <X size={19} />
          </button>
        </div>

        <div className="tipContent">
          <h3>Keep your library organized 📚</h3>

          <p>
            Keep your books organized and your readers happy.
            Regularly update book records, track issued books,
            and make sure returned books are marked available.
          </p>

          <div className="tipHighlights">
            <div>
              <strong>
                <Check size={14} />
              </strong>
              Keep book availability updated
            </div>

            <div>
              <strong>
                <Check size={14} />
              </strong>
              Track issued and returned books
            </div>

            <div>
              <strong>
                <Check size={14} />
              </strong>
              Keep member information organized
            </div>
          </div>
        </div>

        <div className="modalActions">
          <button
            type="button"
            className="primary"
            onClick={onClose}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}