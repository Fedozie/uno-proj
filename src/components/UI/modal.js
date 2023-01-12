
import styles from './modal.module.scss';


const Backdrop = ({onClose}) => {
    return(
        <div className={styles.backdrop} onClick = {onClose}></div>
    )
}

const ModalOverlay = ({children}) => {
    return(
        <div className={styles.modal}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}

const Modal = ({children, onClose}) => {
    return (
        <div className = {styles.container}>
            <Backdrop onClose={onClose}/>
            <button className={styles.button}>Mna</button>
            <ModalOverlay>{children}</ModalOverlay>
        </div>
    );
}
 
export default Modal;