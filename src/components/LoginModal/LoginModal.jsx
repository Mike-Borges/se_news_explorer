export default function LoginModal({ onClose }) {
  return (
    <ModalWithForm title="Sign in" buttonText="Sign in" onClose={onClose}>
      <label className="modal__label">
        Email
        <input className="modal__input" type="email" placeholder="abcde" />
        <span className="modal__error">Invalid email address</span>
      </label>
      <label className="modal__label">
        Password
        <input className="modal__input" type="password" />
      </label>
    </ModalWithForm>
  );
}
