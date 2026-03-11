export default function ModalWIthForm({
  title,
  buttonText,
  onCLose,
  children,
}) {
  return (
    <div className="modal">
      <div className="modal__content">
        <button className="modal__close-btn" onClick={onCLose}>
          x
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__body">
          {children}
          <button className="modal__submit-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
