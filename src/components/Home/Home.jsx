import { useState, useEffect } from "react";
import "./Home.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import notFound from "../../assets/not-found.svg";

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
        <h1 className="home__hero-title">What's going on in the world?</h1>
        <p className="home__hero-description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm onSearch={onSearch} />
      </section>
      <section className="home__results">
        {isLoading && <Preloader />}
        {searchError && <p className="home__error">{searchError}</p>}
        {!isLoading && !searchError && articles.length > 0 && (
          <>
            <h2 className="home__results-title">Search results</h2>
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
          <div className="home__not-found">
            <img
              className="home__not-found-icon"
              src={notFound}
              alt="Nothing found"
            />
            <h2 className="home__not-found-title">Nothing found</h2>
            <p className="home__not-found-subtitle">
              Sorry, but nothing matched your search terms.
            </p>
          </div>
        )}
      </section>
      <About />
    </div>
  );
}
