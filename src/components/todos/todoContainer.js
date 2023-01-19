import TodoItem from './todoItem';

import styles from './todoContainer.module.scss';

const TodoContainer = ({todos}) => {
    return (  
        <div className={styles.container}>
            {
                todos.map(todo => (
                    <TodoItem 
                        key = {todo.id}
                        todo = {todo}
                    />
                ))
            }
        </div>
    );
}
 
export default TodoContainer;