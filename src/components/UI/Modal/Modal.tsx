import styles from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
};

const CrossIcon = () => <>&times;</>;

const Modal = ({ isOpen, onClose, children }: ModalProps) =>
  !!isOpen && (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
    </div>
  );

export default Modal;
