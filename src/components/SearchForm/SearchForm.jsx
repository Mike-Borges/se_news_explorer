import { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ onSearch }) {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!keyword) {
      setError("Please enter a keyword");
      return;
    }
    setError("");
    onSearch(keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      {error && <span className="search-form__error">{error} </span>}
      <button className="search-form__btn">Search</button>
    </form>
  );
}
