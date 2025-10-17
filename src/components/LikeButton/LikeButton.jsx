import { useState } from "react";
import "./LikeButton.css";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}
