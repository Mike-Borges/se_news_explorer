import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function RegisterModal({
  onClose,
  onAltClick,
  onSuccess,
  isOpen,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

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

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!e.target.validity.valid) {
      setUsernameError(e.target.validationMessage);
    } else {
      setUsernameError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess({ username, email });
  };

  const isFormValid =
    email &&
    password &&
    username &&
    !emailError &&
    !passwordError &&
    !usernameError;

  return (
    <ModalWithForm
      title="Sign up"
      buttonText="Sign up"
      onClose={onClose}
      altText="Sign in"
      onAltClick={onAltClick}
      isFormValid={isFormValid}
      onSubmit={handleSubmit}
      isOpen={isOpen}
    >
      {(firstInputRef) => (
        <>
          <label className="modal__label">
            Email
            <input
              ref={firstInputRef}
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
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <span className="modal__error">{passwordError}</span>
          </label>
          <label className="modal__label">
            Username
            <input
              className="modal__input"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <span className="modal__error">{usernameError}</span>
          </label>
        </>
      )}
    </ModalWithForm>
  );
}
