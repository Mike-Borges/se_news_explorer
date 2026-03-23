import { useEffect, useRef } from "react";
import "./ModalWithForm.css";
import close from "../../assets/close.svg";

export default function ModalWithForm({
  title,
  buttonText,
  onClose,
  onAltClick,
  altText,
  isFormValid,
  onSubmit,
  isOpen,
  children,
}) {
  const firstInputRef = useRef(null);

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

  useEffect(() => {
    const isMobileOrTablet = window.innerWidth < 1024;
    if (isMobileOrTablet && firstInputRef.current) {
      const timer = setTimeout(() => {
        firstInputRef.current.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close-btn" onClick={onClose}>
          <img src={close} alt="Close" className="modal__close-btn-img" />
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__body" onSubmit={onSubmit}>
          {children(firstInputRef)}
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
