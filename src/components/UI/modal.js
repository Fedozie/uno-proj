
import Button from './button';
import styles from './modal.module.scss';


const Backdrop = ({ onClose }) => {
    return (
        <div className={styles.backdrop} onClick={onClose}></div>
    )
}

const ModalOverlay = ({ children }) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

const Modal = ({ children, onClose }) => {
    const btnStyle = {
        position: "absolute",
        top: "22vh",
        left: "63.5%",
        zIndex: "40"
    }

return (
    <div className={styles.container}>
        <Backdrop onClose={onClose} />
        <Button
            text={"Close"}
            className={"dlt"}
            style={btnStyle}
            onClick = {onClose}
        />
        <ModalOverlay>{children}</ModalOverlay>
    </div>
);
}

export default Modal;