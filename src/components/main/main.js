
import React, {useState} from 'react';

import Button from '../UI/button';
import TodoContainer from '../todos/todoContainer';

import styles from './main.module.scss';
import AddTodo from '../todos/addTodo';

const Main = () => {
    const [addTask, setAddTask] = useState(true);

    const addTaskHandler = () => {
        setAddTask(true)
    }

    return (
        <section className={styles.main}>
            {addTask && <AddTodo/>}
            <div>
                <Button text = {"Add Task"} onClick = {addTaskHandler}/>
            </div>
            <TodoContainer/>
        </section>
    );
}
 
export default Main;