import axios from 'axios';

export const GET_ALL_POKEMONS = 'GET ALL POKEMONS';
export const GET_TYPES = 'GET TYPES';
export const GET_POKEMON_ID = 'GET POKEMON ID';
export const GET_POKEMON_NAME = 'GET POKEMON NAME';
export const POST_POKEMON = 'POST POKEMON';
export const ORDER_BY = 'ORDER BY';
export const FILTER_TYPES = 'FILTER TYPES';
export const FILTER_DBORAPI = 'FILTER DBORAPI';

export const getAllPokemons = () => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/pokemons/")
        return dispatch({
            type: GET_ALL_POKEMONS,
            payload: aux.data
        })
    }
}

export const getTypes = () => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/types/")
        return dispatch({
            type: GET_TYPES,
            payload: aux.data
        })
    }
}

export const getPokemonID = (payload) => {
    return async function (dispatch){
        let aux = await axios.get("http://localhost:3001/pokemons/"+payload)
        return dispatch({
            type: GET_POKEMON_ID,
            payload: aux.data
        })
    }
}

export const getPokemonName = (payload) => {
    return async function (dispatch){
        try{
            let aux = await axios.get("http://localhost:3001/pokemons?name="+payload)
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: aux.data
            })
        }
        catch(e){
            return dispatch({
                type: GET_POKEMON_NAME,
                payload: "Not Found"
            })
        }
    }
}

export const postPokemon = (payload) => {
    return async function (dispatch){
        let aux = await axios.post("http://localhost:3001/pokemons/",payload)
        return dispatch({
            type: POST_POKEMON,
            payload: aux
        })
    }
}

export const orderBy = (payload) => {
    return async function (dispatch) {
        dispatch({type:ORDER_BY,payload})
    }
}

export const filterTypes = (payload) => {
    return async function (dispatch){
        dispatch({type:FILTER_TYPES,payload})
    }
}

export const filterDBorAPI = (payload) => {
    return async function (dispatch){
        dispatch({type:FILTER_DBORAPI,payload})
    }
}