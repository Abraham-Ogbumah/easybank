import Button from "../Button/Button";

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

      {/* <Button
         onClick={() => console.log('clicked')}
         type="button"
         className="btn"
         children="Request Invite"
      /> */}
     
    </div>
  );
};

export default Modal;
