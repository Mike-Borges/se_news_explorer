import { useState } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
