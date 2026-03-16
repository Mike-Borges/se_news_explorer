import "./NewsCard.css";

export default function NewsCard({
  article,
  currentUser,
  onSaveArticle,
  savedArticles,
  keyword,
  onDeleteArticle,
  isSavedNews,
}) {
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
      >
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
