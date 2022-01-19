import { Link } from "react-router-dom";
import styles from './Landing.module.css';

const Landing = () =>{
    return(
        <div className={styles.page}>
            <h1 className={styles.title}>Pokemon</h1>
            <Link to='/home' className={styles.navlink}>
                <a><span className={styles.image}></span></a>
            </Link>
            <a><span className={styles.click}></span></a>
            <a><span className={styles.walk}></span></a>
        </div>
    )
}

export default Landing;