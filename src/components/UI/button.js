import styles from './button.module.scss';

const Button = ({text, className, ...rest}) => {

    return (  
        <button 
            className={`${styles.button} ${className === "dlt" ? styles.error : null}`}
            {...rest}
            >
            {text}
        </button>
    );
}
 
export default Button;