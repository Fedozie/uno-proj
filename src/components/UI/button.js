import styles from './button.module.scss';

const Button = ({text, className, ...rest}) => {
    // const xClassName = className;

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