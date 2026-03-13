import { useState } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import RegisterSuccessModal from "../RegisterSuccessModal/RegisterSuccessModal";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleLoginClick = () => setActiveModal("login");
  const handleCloseModal = () => setActiveModal("");
  const handleRegisterClick = () => setActiveModal("register");
  const handleRegisterSuccess = () => setActiveModal("registerSuccess");

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header onLoginClick={handleLoginClick} />
          <Home />
          <Footer />
        </div>
      </div>
      {activeModal === "login" && (
        <LoginModal
          onClose={handleCloseModal}
          onAltClick={handleRegisterClick}
        />
      )}
      {activeModal === "register" && (
        <RegisterModal
          onClose={handleCloseModal}
          onAltClick={handleLoginClick}
          onSuccess={handleRegisterSuccess}
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
