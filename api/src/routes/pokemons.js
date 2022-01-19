const { Router, response } = require('express');
const { Pokemon, Type } = require('../../src/db');
const axios = require('axios');
const { getAllPokemons, getPokemonDetail, createPokemon } = require('../controllers');
const { filterbyname } = require('../helpers');

const router = Router();

router.get('/',async(req,res)=>{
    const {name} = req.query;
    let pk=null;
    if(name) pk = await getAllPokemons(name);
    else pk = await getAllPokemons();
    if(pk){
        res.status(200).send(pk);
    }
    else{
        res.status(404).send('Error');
    }
})

router.get('/:id',async(req,res)=>{
    const {id} = req.params;
    const pk = await getPokemonDetail(id);
    if(pk) res.status(200).json(pk);
    else res.status(404).send({error:'Not found'});
})

router.post('/',async(req,res,next)=>{
    try{
        let {name,image,hp,attack,defense,speed,height,weight,types} = req.body;
        let pk = await createPokemon(name,image,hp,attack,defense,speed,height,weight,types);
        pk==='error'
            ? res.status(400).send({error:'404'})
	        : res.status(200).send({success:'Pokemon created'});
    }
    catch(e){
        next(e);
    }
})

module.exports = router;