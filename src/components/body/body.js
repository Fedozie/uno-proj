import Header from '../header/header';
import Main from '../main/main';

import styles from './body.module.scss';

const Body = () => {
    return (
        <div className={styles.body}>
            <Header/>
            <Main/>
        </div>
    );
}
 
export default Body;