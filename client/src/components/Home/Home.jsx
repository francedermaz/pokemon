import React from 'react';
import { filterDBorAPI, filterTypes, getAllPokemons, getTypes, orderBy } from "../../redux/actions";
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from './Home.module.css';
import NavBar from "../NavBar/NavBar";
import Pagination from '../Pagination/Pagination';
import Cards from '../Cards/Cards';

const Home = () =>{
    const dispatch = useDispatch();
    const allPokemons = useSelector(state => state.pokemons);
    const allTypes = useSelector(state => state.types);
    const [currentPage,setcurrentPage] = useState(1);
    const pagination = pageNumber => setcurrentPage(pageNumber);

    let pokemonsperPage=12;
    let indexofLastPokemon=currentPage*pokemonsperPage;
    let indexofFirstPokemon=indexofLastPokemon-pokemonsperPage;

    let currentPokemons = [];
    if(allPokemons.length>0 && allPokemons!=="Not Found") currentPokemons = allPokemons.slice(indexofFirstPokemon,indexofLastPokemon);
    else if(allPokemons==="Not Found") currentPokemons=allPokemons;
    
    const handleOrderBy = e => {
        dispatch(orderBy(e.target.value));
        setcurrentPage(1);
    }
    const handleFilterTypes = e => {
        dispatch(filterTypes(e.target.value));
        setcurrentPage(1);
    }
    const handleFilterDBorAPI = e => {
        dispatch(filterDBorAPI(e.target.value));
        setcurrentPage(1);
    }

    useEffect(() => {
        dispatch(getAllPokemons())
        dispatch(getTypes());
    }, [dispatch])


    return(
        <div className={styles.home}>
            <NavBar
                allTypes={allTypes}
                handleOrderBy={handleOrderBy}
                handleFilterTypes={handleFilterTypes}
                handleFilterDBorAPI={handleFilterDBorAPI}
            />
            <Cards allPokemons={currentPokemons}/>
            <Pagination
                allPokemons={allPokemons.length}
                pokemonsperPage={pokemonsperPage}
                pagination={pagination}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Home;