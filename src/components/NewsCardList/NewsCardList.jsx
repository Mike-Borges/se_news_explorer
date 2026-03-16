import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

export default function NewsCardList({
  articles,
  currentUser,
  onSaveArticle,
  savedArticles,
  keyword,
  onDeleteArticle,
  isSavedNews,
}) {
  return (
    <section className="news-card-list">
      {articles.map((article) => (
        <NewsCard
          key={article.url}
          article={article}
          currentUser={currentUser}
          onSaveArticle={onSaveArticle}
          savedArticles={savedArticles}
          keyword={keyword}
          onDeleteArticle={onDeleteArticle}
          isSavedNews={isSavedNews}
        />
      ))}
    </section>
  );
}
