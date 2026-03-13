import { useEffect } from "react";
import "./ModalWithForm.css";

export default function ModalWithForm({
  title,
  buttonText,
  onClose,
  onAltClick,
  altText,
  isFormValid,
  onSubmit,
  children,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-btn" onClick={onClose}>
          X
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__body" onSubmit={onSubmit}>
          {children}
          <button
            className="modal__submit-btn"
            type="submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
          <div className="modal__separator">
            <span className="modal__signup-txt">or</span>
            <button
              className="modal__signup-btn"
              type="button"
              onClick={onAltClick}
            >
              {altText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
