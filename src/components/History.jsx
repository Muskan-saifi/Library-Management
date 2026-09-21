import { History as HistoryIcon, BookOpen, RotateCcw } from "lucide-react";

export default function History() {
  return (
    <section className="pageSection">

      <div className="pageTop">
        <div>
          <div className="eyebrow">
            <HistoryIcon size={13} />
            LIBRARY HISTORY
          </div>

          <h2>Borrowing History 📚</h2>

          <p>
            Track recently issued and returned books.
          </p>
        </div>
      </div>

      <div className="panel historyPanel">

        <div className="panelHead">
          <div>
            <h3>Recent Activity</h3>
            <p>Latest library transactions</p>
          </div>
        </div>

        <div className="historyList">

          <div className="historyItem">
            <div className="historyIcon issue">
              <BookOpen size={17} />
            </div>

            <div className="historyInfo">
              <b>Atomic Habits</b>
              <span>Issued to James Clear</span>
            </div>

            <div className="historyDate">
              Today
            </div>
          </div>

          <div className="historyItem">
            <div className="historyIcon return">
              <RotateCcw size={17} />
            </div>

            <div className="historyInfo">
              <b>The Alchemist</b>
              <span>Book returned successfully</span>
            </div>

            <div className="historyDate">
              Yesterday
            </div>
          </div>

          <div className="historyItem">
    <div className="historyIcon issue">
      <BookOpen size={17} />
    </div>

    <div className="historyInfo">
      <b>Rich Dad Poor Dad</b>
      <span>Issued to Rahul</span>
    </div>

    <div className="historyDate">
      2 days ago
    </div>
  </div>
        </div>

      </div>

    </section>
  );
}