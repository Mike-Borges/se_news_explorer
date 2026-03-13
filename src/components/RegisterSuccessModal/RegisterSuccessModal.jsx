import "../ModalWithForm/ModalWithForm.css";

export default function RegisterSuccessModal({ onClose, onSignInClick }) {
  return (
    <div className="modal">
      <div className="modal__content modal__content_success">
        <button className="modal__close-btn" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal__title-reg">
          Registration successfully completed!
        </h2>
        <button className="modal__signin-link-reg" onClick={onSignInClick}>
          Sign in
        </button>
      </div>
    </div>
  );
}
