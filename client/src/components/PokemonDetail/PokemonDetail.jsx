import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getPokemonID } from '../../redux/actions';
import { useEffect, useState } from 'react';
import styles from './PokemonDetail.module.css';
import Logo from '../Logo/Logo';
import Loader from '../Loader/Loader';

const PokemonDetail = () => {
    const dispatch = useDispatch();
    let pokemon = useSelector(state => state.detail)
    let {id} = useParams();
    useEffect(() => {
        dispatch(getPokemonID(id))
    }, [dispatch])
    
    return(
        <div>
            <Logo/>
            <div className={styles.back}>
                <Link to={'/home'}>
                    <h3 className={styles.backtt}>Back to home</h3>
                </Link>
            </div>
            <div className={styles.pokeinfo}>
                <img className={styles.img} src={pokemon.image} alt="detail"/>
                <h1 className={styles.titlepoke}>{pokemon.name}</h1>
                <p>HP: {pokemon.hp}</p>
                <p>Attack: {pokemon.attack}</p>
                <p>Defense: {pokemon.defense}</p>
                <p>Speed: {pokemon.speed}</p>
                <p>Height: {pokemon.height}</p>
                <p className={styles.last}>Weight: {pokemon.weight}</p>
            </div>
        </div>
    )
}

export default PokemonDetail;
