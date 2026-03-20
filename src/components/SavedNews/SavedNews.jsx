import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

export default function SavedNews({
  currentUser,
  savedArticles,
  onDeleteArticle,
}) {
  const keywords = [...new Set(savedArticles.map((a) => a.keyword))];
  const keywordDisplay =
    keywords.length <= 2
      ? keywords.join(", ")
      : `${keywords.slice(0, 2).join(", ")}, and ${keywords.length - 2} other`;

  return (
    <div className="saved-news">
      <section className="saved-news__banner">
        <p className="saved-news__label">Saved articles</p>
        <h2 className="saved-news__title">
          {currentUser.username}, you have {savedArticles.length} saved articles
        </h2>
        {keywords.length > 0 && (
          <p className="saved-news__keywords">
            <span>By keywords: </span>
            <strong>{keywordDisplay}</strong>
          </p>
        )}
      </section>
      {savedArticles.length > 0 && (
        <NewsCardList
          articles={savedArticles}
          currentUser={currentUser}
          onDeleteArticle={onDeleteArticle}
          isSavedNews={true}
        />
      )}
    </div>
  );
}
