import { useState } from "react";
import "./NewsCard.css";
import bookmarkDefault from "../../assets/bookmark.svg";
import bookmarkHover from "../../assets/bookmarkhover.svg";
import bookmarkSaved from "../../assets/marked.svg";
import trashDefault from "../../assets/trash-light.svg";
import trashHover from "../../assets/trash-dark.svg";

export default function NewsCard({
  article,
  currentUser,
  onSaveArticle,
  savedArticles,
  keyword,
  onDeleteArticle,
  isSavedNews,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const { source, title, publishedAt, description, urlToImage, url } = article;

  const isSaved = savedArticles?.some((a) => a.url === url);

  const formattedDate = new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleSaveClick = () => {
    if (isSavedNews) {
      onDeleteArticle(article);
    } else {
      if (!currentUser) return;
      onSaveArticle({ ...article, keyword });
    }
  };

  return (
    <div className="news-card">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={urlToImage} alt={title} className="news-card__image" />
      </a>
      {article.keyword && (
        <span className="news-card__keyword">{article.keyword}</span>
      )}
      <button
        className={`news-card__save-btn ${isSaved ? "news-card__save-btn_active" : ""}`}
        type="button"
        onClick={handleSaveClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={
            isSavedNews
              ? isHovered
                ? trashHover
                : trashDefault
              : isSaved
                ? bookmarkSaved
                : isHovered
                  ? bookmarkHover
                  : bookmarkDefault
          }
          alt="save"
          className="news-card__save-icon"
        />
        <span className="news-card__save-tooltip">
          {isSavedNews
            ? "Remove from saved"
            : !currentUser
              ? "Sign in to save articles"
              : isSaved
                ? "Remove from saved"
                : "Save article"}
        </span>
      </button>
      <div className="news-card__info">
        <p className="news-card__date">{formattedDate}</p>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__description">{description}</p>
        <p className="news-card__source">{source.name}</p>
      </div>
    </div>
  );
}
