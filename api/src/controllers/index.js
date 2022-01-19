const axios = require('axios');
const {getAllAPI,getByIdAPI,getAllDB,getByIdDB,filterbyname} = require('../helpers');
const {Pokemon, Type} = require('../db');

async function getAllPokemons(name){
    try{
        const api=await getAllAPI();
        const db=await getAllDB();
        const all=api.concat(db);
        if(name){
            let pk = filterbyname(all,name);
            return pk;
        }
        return all;
    }
    catch(e){
        return e;
    }
}

async function getPokemonDetail(id){
    let poke = null;
    if(id.length<10) poke=await getByIdAPI(id);
    else poke=await getByIdDB(id);
    return poke;
}

async function createPokemon(name,image,hp,attack,defense,speed,height,weight,types){
    let newPokemon = await Pokemon.create({
        name,
        image,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
    });
    let typefound = await Type.findAll({
        where: {name: types},
    });
    newPokemon.addType(typefound);
    return newPokemon;
}

module.exports = {
    getAllPokemons, getPokemonDetail, createPokemon
}