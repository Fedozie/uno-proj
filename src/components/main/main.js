import Button from '../UI/button';
import TodoContainer from '../todos/todoContainer';

import styles from './main.module.scss';

const Main = () => {
    return (
        <section className={styles.main}>
            <div>
                <Button text = {"Add Task"}/>
            </div>
            <TodoContainer/>
        </section>
    );
}
 
export default Main;