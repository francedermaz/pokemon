import { Link } from "react-router-dom";
import styles from './Card.module.css';

const Card = ({id,image,name,types}) => {
    return(
        <div className={styles.card}>
            <Link to={`/pokemon/${id}`}>
                <img alt="poke" className={styles.img} src={image}/>
                <h1 className={styles.title}>{name[0].toUpperCase()+name.slice(1)}</h1>
            </Link>
                <p className={styles.types}>Types:</p>
                <ul className={styles.unl}>
                    {
                        types.length? types.map(type=><li className={styles.element}key={type}>{type[0].toUpperCase()+type.slice(1)}</li>):<></>
                    }
                </ul>
        </div>
    )
}

export default Card;