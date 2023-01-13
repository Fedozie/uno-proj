
import React, {useState} from 'react';

import Button from '../UI/button';
import TodoContainer from '../todos/todoContainer';

import styles from './main.module.scss';
import AddTodo from '../todos/addTodo';

const Main = () => {
    const [addTask, setAddTask] = useState(false);

    const openAddTask = () => {
        setAddTask(true);
    }

    const closeAddTask = () => {
        setAddTask(false);
    }

    return (
        <section className={styles.main}>
            {addTask && <AddTodo closeAddTodo = {closeAddTask}/>}
            <div>
                <Button 
                    text = {"Add Task"} 
                    onClick = {openAddTask}
                />
            </div>
            <TodoContainer/>
        </section>
    );
}
 
export default Main;