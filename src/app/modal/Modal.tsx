import "./styles.css";

type ModalProps = {
  show: boolean;
  onClose: Function;
  title: string;
  children: React.ReactNode;
};

const Modal = ({ show, onClose, title, children }: ModalProps) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={() => onClose()}></div>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <code className="modal-title">{title}</code>
            <span className="modal-close" onClick={() => onClose()}>
              x
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default Modal;
