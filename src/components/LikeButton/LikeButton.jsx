import "./LikeButton.css";
import "../CandidateCardSelect/CandidateCardSelect.css";

export default function LikeButton({ liked, onClick }) {
  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={onClick}   // déclenche l’action dans le parent
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
