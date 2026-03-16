const newsApiBaseUrl =
  import.meta.env.MODE === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const getNews = (keyword) => {
  const today = new Date();
  const weekAgo = new Date();
  weekAgo.setDate(today.getDate() - 7);

  const from = weekAgo.toISOString().split("T")[0];
  const to = today.toISOString().split("T")[0];

  return fetch(
    `${newsApiBaseUrl}?q=${keyword}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}&from=${from}&to=${to}&pageSize=100`,
  ).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
};

export { getNews };
