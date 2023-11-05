interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
  if (!show) return null;

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Check if the modal content itself (not its children) was clicked
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default Modal;
