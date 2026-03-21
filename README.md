# News Explorer

A React-based desktop web application that allows users to search for news articles, save their favorites, and manage their personal collection — all backed by a secure authentication system.

## Project Pitch

[![Watch the pitch](https://img.shields.io/badge/Watch%20on-Loom-625DF5?style=for-the-badge&logo=loom)](https://www.loom.com/share/c600047510bb46afa99cffa733a4ee93)

---

## Overview

News Explorer lets users search live news headlines via the NewsAPI, register and log in to a personal account, and bookmark articles to revisit later. The app is built with a clean, responsive interface and a component-driven architecture using React and Vite.

---

## Features

- **Live News Search** — Search current headlines by keyword using the NewsAPI
- **User Authentication** — Register and log in with JWT-based authentication
- **Save Articles** — Bookmark articles to your personal collection while logged in
- **Manage Saved Articles** — View and delete your saved articles on a dedicated page
- **Modal System** — Seamless login, register, and success modals with keyboard accessibility (`Escape` to close)
- **Form Validation** — Real-time client-side validation using controlled `useState` inputs

---

## Tech Stack

| Layer     | Technology                      |
| --------- | ------------------------------- |
| Frontend  | React 18, Vite                  |
| Routing   | React Router DOM                |
| Styling   | CSS Modules / BEM convention    |
| Auth      | JWT (stored in localStorage)    |
| News Data | [NewsAPI](https://newsapi.org/) |
| Fonts     | Custom via `src/vendor/`        |
| CSS Reset | normalize.css (vendored)        |

---

## Project Structure

```
news-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── App/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Footer/
│   │   ├── ModalWithForm/
│   │   ├── LoginModal/
│   │   ├── RegisterModal/
│   │   └── RegisterSuccessModal/
│   ├── vendor/
│   │   ├── fonts/
│   │   └── normalize.css
│   ├── utils/
│   └── main.jsx
├── .eslintrc.cjs
├── vite.config.js
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm v9+
- A free [NewsAPI](https://newsapi.org/) API key

### Installation

```bash
git clone https://github.com/<your-username>/news-explorer.git
cd news-explorer
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```
VITE_NEWS_API_KEY=your_newsapi_key_here
VITE_BASE_URL=https://your-backend-url.com
```

> **Note:** Never commit your `.env` file. It is listed in `.gitignore`.

### Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### Building for Production

```bash
npm run build
npm run preview
```

---

## Component Overview

| Component              | Description                                             |
| ---------------------- | ------------------------------------------------------- |
| `App`                  | Root component; manages auth state and modal visibility |
| `Header`               | Overlaid navigation with sign-in/sign-out controls      |
| `Home`                 | Landing page with search bar and results display        |
| `Footer`               | Site-wide footer                                        |
| `ModalWithForm`        | Base modal wrapper with overlay and close behavior      |
| `LoginModal`           | Login form modal; opens RegisterModal on link click     |
| `RegisterModal`        | Registration form modal; opens LoginModal on link click |
| `RegisterSuccessModal` | Confirmation modal shown after successful registration  |

---

## Design Decisions

- **Header positioning:** The header uses `position: absolute` to overlay the hero section, creating a full-bleed visual effect on the home page.
- **Modal close behavior:** Each modal attaches a `keydown` listener via `useEffect` to close on `Escape`, and cleans up the listener on unmount.
- **Vendor folder:** Third-party assets (fonts, normalize.css) are stored in `src/vendor/` to keep external dependencies explicit and self-contained.

---

## Backend

This frontend connects to a separate Express/Node.js backend that handles user registration, login, and saved article management.

- **Backend repo:** [link to backend repo]
- **Deployed API:** [link to deployed backend]

---

## Deployment

The frontend is deployed via [GitHub Pages / Vercel / Netlify — update as applicable].

**Live site:** [link to deployed frontend]

---

## Future Improvements

- Mobile-responsive layout
- Pagination or infinite scroll for search results
- Article keyword tagging on the saved articles page
- Dark mode support

---

## License

This project was built as a capstone for the [TripleTen Software Engineering Bootcamp](https://tripleten.com/).
