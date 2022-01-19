const { Router, response } = require('express');
const { Pokemon, Type } = require('../../src/db');
const axios = require('axios');

const router = Router();

router.get('/',async(req,res)=>{
    try{
        axios.get('https://pokeapi.co/api/v2/type')
        .then(res=>{
            const types = res.data.results.map(type=>type.name);
            types.forEach(info=>{
                Type.findOrCreate({
                    where:{name:info},
                })
            })
            return Type.findAll();
        })
        .then(resp=>res.status(200).json(resp));
    }
    catch(e){
        next(e);
    }
})

module.exports = router;