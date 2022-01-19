import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

const Logo = () =>{
    return(
        <div className={styles.logo}>
            <Link to={'/home'}>
                <h1 className={styles.title}>Pokemon</h1>
            </Link>
        </div>
    )
}

export default Logo;