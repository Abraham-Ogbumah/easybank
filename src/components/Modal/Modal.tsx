interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ show, onClose, children }: ModalProps) => {
    if (!show) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                {children}
            </div>
        </div>
    )
}

export default Modal;