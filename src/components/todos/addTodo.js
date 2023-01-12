
import Modal from "../UI/modal";
import SelectInput from "../UI/selectInput";

import styles from "./addTodo.module.scss";


const AddTodo = () => {

    const options = [
        { value: 'incompelete', text: 'Incomplete' },
        { value: 'completed', text: 'Completed' }
    ]

    return (
        <Modal>
            <h2 className={styles.heading}>Add Todo</h2>
            <div className={styles["topics-section"]}>
                <label htmlFor="title" className={styles.topics}>Title</label>
                <input type="text" id="title" />
            </div>
            <div className={styles["topics-section"]}>
                <label className={styles.topics} htmlFor = "status">Status</label>
                <SelectInput wName={"status"} options = {options} id = {"status"}/>
            </div>
        </Modal>
    );
}

export default AddTodo;