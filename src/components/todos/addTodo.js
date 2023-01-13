
import Modal from "../UI/modal";
import SelectInput from "../UI/selectInput";
import Button from "../UI/button";

import styles from "./addTodo.module.scss";


const AddTodo = ({closeAddTodo}) => {

    const options = [
        { value: 'incompelete', text: 'Incomplete' },
        { value: 'completed', text: 'Completed' }
    ]

    const cancelBtnStyle = {
        marginLeft: "1rem"
    }

    return (
        <Modal onClose={closeAddTodo}>
            <h2 className={styles.heading}>Add Todo</h2>
            <div className={styles["topics-section"]}>
                <label htmlFor="title" className={styles.topics}>Title</label>
                <input type="text" id="title" />
            </div>
            <div className={styles["topics-section"]}>
                <label className={styles.topics} htmlFor = "status">Status</label>
                <SelectInput wName={"status"} options = {options} id = {"status"}/>
            </div>
            <div className={styles.btns}>
                <Button 
                    text = {"Confirm"}
                />
                <Button
                    className={"dlt"}
                    text = {"Cancel"}
                    onClick = {closeAddTodo}
                    style = {cancelBtnStyle}
                />
            </div>
        </Modal>
    );
}

export default AddTodo;