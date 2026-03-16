import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  onClose,
  onAltClick,
  onLogin,
  registeredUser,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.validity.valid) {
      setEmailError(e.target.validationMessage);
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (!e.target.validity.valid) {
      setPasswordError(e.target.validationMessage);
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(registeredUser || { username: "testuser", email });
  };

  const isFormValid = email && password && !emailError && !passwordError;

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      onClose={onClose}
      altText="Sign up"
      onAltClick={onAltClick}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <span className="modal__error">{emailError}</span>
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <span className="modal__error">{passwordError}</span>
      </label>
    </ModalWithForm>
  );
}
