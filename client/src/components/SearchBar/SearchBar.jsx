import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonName } from '../../redux/actions';
import styles from './SearchBar.module.css';

const SearchBar = () =>{
    const dispatch = useDispatch();
    const [name,setName] = useState('');

    function handleChange (e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(getPokemonName(name));
        setName('');
    }

    return(
        <div className={styles.searchbar}>
            <input type='text' placeholder='Search Pokemon' onChange={e=>handleChange(e)}/>
            {
                name.trim()==='' || name.trim().length<3?<button className={styles.btt}disabled>Search</button>:<button type='submit' className={styles.btt} onClick={e=>handleSubmit(e)}>Search
                </button>
            }
        </div>
    )
}

export default SearchBar;