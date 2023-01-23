import TodoItem from './todoItem';

import styles from './todoContainer.module.scss';

const TodoContainer = ({todos, deleteTodo, toggleComplete}) => {
    return (  
        <div className={styles.container}>
            {
                todos.map(todo => (
                    <TodoItem 
                        key = {todo.id}
                        todo = {todos}
                        deleteTodo = {deleteTodo}
                        toggleComplete = {toggleComplete}
                    />
                ))
            }
        </div>
    );
}
 
export default TodoContainer;