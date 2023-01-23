
import React, {useState} from 'react';

import Button from '../UI/button';
import TodoContainer from '../todos/todoContainer';

import styles from './main.module.scss';
import AddTodo from '../todos/addTodo';

const Main = () => {
    const [todos, setTodos] = useState([]);

    const listTodo = (todo) => {
        setTodos([todo, ...todos])
    }

   


    const [addTask, setAddTask] = useState(false);

    const openAddTask = () => {
        setAddTask(true);
    }

    const closeAddTask = () => {
        setAddTask(false);
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo, 
                        completed: !todo.completed
                    }
                }
            })
        )
    }

    return (
        <section className={styles.main}>
            {addTask && <AddTodo 
                closeAddTodo = {closeAddTask}
                addTodo = {listTodo}
                />
            }
            <div>
                <Button 
                    text = {"Add Task"} 
                    onClick = {openAddTask}
                />
            </div>
            <TodoContainer 
                todos = {todos}
                deleteTodo = {deleteTodo}
                toggleComplete = {toggleComplete}
            />
        </section>
    );
}
 
export default Main;