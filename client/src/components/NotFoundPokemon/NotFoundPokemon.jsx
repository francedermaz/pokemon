import { Link } from 'react-router-dom';
import notfound from './images/notfound.gif';
import { useDispatch } from 'react-redux'
import styles from './NotFoundPokemon.module.css';

const NotFoundPokemon = () =>{
    const dispatch = useDispatch();

    return(
        <div className={styles.notfound}>
            <h2 className={styles.title}>Pokemon not found!</h2>
            <img className={styles.imagepk} src={notfound} alt="image not found"/>
        </div>
    )
}

export default NotFoundPokemon;