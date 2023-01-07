import Button from '../UI/button';
import TodoConatiner from '../todos/todoContainer';

import styles from './main.module.scss';

const Main = () => {
    return (
        <section className={styles.main}>
            <div>
                <Button text = {"Add Task"}/>
            </div>
            <TodoConatiner/>
        </section>
    );
}
 
export default Main;