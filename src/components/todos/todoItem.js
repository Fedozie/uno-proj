
import Button from '../UI/button';

import styles from './todoItem.module.scss';


const TodoItem = () => {
    const dltBtnStyle = {
        marginLeft: "1rem"
    }
    
    return (
        <div className={styles.item}>
            <div className={styles["item-todo"]}>
                <div className={styles["item-todo-checkbox"]}>
                    <input type="checkbox" name="" id="checkbox" />
                    <label htmlFor="checkbox"></label>
                </div>
                <div>
                    <p className={styles["item-todo-text"]}>Textttttsss</p>
                    <p className={styles["item-todo-date"]}>Date</p>
                </div>
            </div>
            <div className={styles["item-CTA"]}>
                <Button text = {"Edit"}/>
                <Button style = {dltBtnStyle} text = {"Delete"} className = {"dlt"} />
            </div>
        </div>
    );
}

export default TodoItem;