import { useState, useEffect } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";

export default function Home({
  onSearch,
  isLoading,
  articles,
  searchError,
  currentUser,
  hasSearched,
  savedArticles,
  onSaveArticle,
  keyword,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    setVisibleCount(3);
  }, [articles]);

  const handleShowMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__hero-title">Welcome to the Home Page!</h1>
        <p className="home__hero-description">
          This is the main landing page of our application.
        </p>
        <SearchForm onSearch={onSearch} />
      </section>
      <section className="home__results">
        {isLoading && <Preloader />}
        {searchError && <p className="home__error">{searchError}</p>}
        {!isLoading && !searchError && articles.length > 0 && (
          <>
            <NewsCardList
              articles={articles.slice(0, visibleCount)}
              currentUser={currentUser}
              onSaveArticle={onSaveArticle}
              savedArticles={savedArticles}
              keyword={keyword}
            />
            {visibleCount < articles.length && (
              <button className="home__show-more" onClick={handleShowMore}>
                Show more
              </button>
            )}
          </>
        )}
        {!isLoading && !searchError && hasSearched && articles.length === 0 && (
          <p className="home__no-results">Nothing found.</p>
        )}
      </section>
      <About />
    </div>
  );
}
