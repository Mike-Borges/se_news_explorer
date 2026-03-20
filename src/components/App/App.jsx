import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";
import SavedNews from "../SavedNews/SavedNews";

import { getNews } from "../../utils/newsApi";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [registeredUser, setRegisteredUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [lastKeyword, setLastKeyword] = useState("");

  const handleLoginClick = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal("");
  const handleRegisterClick = () => setActiveModal("register");
  const handleRegisterSuccess = () => setActiveModal("registerSuccess");
  const handleLogout = () => setCurrentUser(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
    setActiveModal("");
  };

  const handleRegister = (user) => {
    setRegisteredUser(user);
    handleRegisterSuccess();
  };

  const handleSearch = (keyword) => {
    setLastKeyword(keyword);
    setIsLoading(true);
    setSearchError("");
    setArticles([]);
    setHasSearched(true);
    getNews(keyword)
      .then((data) => setArticles(data.articles))
      .catch(() =>
        setSearchError(
          "Sorry, something went wrong during the request. Please try again later.",
        ),
      )
      .finally(() => setIsLoading(false));
  };

  const handleSaveArticle = (article) => {
    setSavedArticles((prev) => [...prev, article]);
  };

  const handleDeleteArticle = (article) => {
    setSavedArticles((prev) => prev.filter((a) => a.url !== article.url));
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header
            onLoginClick={handleLoginClick}
            currentUser={currentUser}
            onLogout={handleLogout}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onSearch={handleSearch}
                  isLoading={isLoading}
                  articles={articles}
                  searchError={searchError}
                  currentUser={currentUser}
                  hasSearched={hasSearched}
                  savedArticles={savedArticles}
                  onSaveArticle={handleSaveArticle}
                  keyword={lastKeyword}
                />
              }
            />
            <Route
              path="/saved-news"
              element={
                currentUser ? (
                  <SavedNews
                    currentUser={currentUser}
                    savedArticles={savedArticles}
                    onDeleteArticle={handleDeleteArticle}
                  />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
      {activeModal === "login" && (
        <LoginModal
          onClose={handleCloseModal}
          onAltClick={handleRegisterClick}
          onLogin={handleLogin}
          registeredUser={registeredUser}
          isOpen={activeModal === "login"}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          onClose={handleCloseModal}
          onAltClick={handleLoginClick}
          onSuccess={handleRegister}
          isOpen={activeModal === "register"}
        />
      )}
      {activeModal === "registerSuccess" && (
        <RegisterSuccessModal
          onClose={handleCloseModal}
          onSignInClick={handleLoginClick}
        />
      )}
    </>
  );
}

export default App;
