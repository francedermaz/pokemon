const axios = require('axios');
const {Pokemon,Type} = require('./db');

// F R O M   A P I

let getAllAPI = async() => {
    const requests=[];
    for(let i=1;i<41;++i){
        let poke=axios.get('https://pokeapi.co/api/v2/pokemon/'+i);
        requests.push(poke);
    }

    return Promise.all(requests)
        .then(res=>{
            const pokemons = res.map(rs=>{
                return({
                    id:rs.data.id,
                    name:rs.data.name,
                    image:rs.data.sprites.other.dream_world.front_default,
                    hp:rs.data.stats[0].base_stat,
                    attack:rs.data.stats[1].base_stat,
                    defense:rs.data.stats[2].base_stat,
                    speed:rs.data.stats[5].base_stat,
                    height:rs.data.height,
                    weight:rs.data.weight,
                    types:rs.data.types.map(aux=>aux.type.name),
                });
            })
            return pokemons;
        })
}

let getByIdAPI = async(id) => {
    try{
        let rs = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return(poke={
            id:rs.data.id,
            name:rs.data.name[0].toUpperCase()+rs.data.name.slice(1),
            image:rs.data.sprites.other.dream_world.front_default,
            hp:rs.data.stats[0].base_stat,
            attack:rs.data.stats[1].base_stat,
            defense:rs.data.stats[2].base_stat,
            speed:rs.data.stats[5].base_stat,
            height:rs.data.height,
            weight:rs.data.weight,
            types:rs.data.types.map(aux=>aux.type.name),
        })
    }
    catch(e){
        return e;
    }
}

let getByNameAPI = async(name) => {
    try{
        let rs = await axios.get('https://pokeapi.co/api/v2/pokemon/'+name);
        return(poke=[{
            name:rs.data.name,
            id:rs.data.id,
            image:rs.data.sprites.other.dream_world.front_default,
            hp:rs.data.stats[0].base_stat,
            attack:rs.data.stats[1].base_stat,
            defense:rs.data.stats[2].base_stat,
            speed:rs.data.stats[5].base_stat,
            height:rs.data.height,
            weight:rs.data.weight,
            types:rs.data.types.map(aux=>aux.type.name),
        }])
    }
    catch(e){
        return e;
    }
}

// F R O M   D A T A B A S E

let getAllDB = async() => {
    let poke = Pokemon.findAll({
		attributes: ['name', 'id', 'image', 'attack'],
		include: {
			model: Type,
		},
	})
	.then((r) => r)
	.then((poke) =>
		poke.map((pk) => {
			return {
				id: pk.id,
				name: pk.name,
				image: pk.image,
				types: pk.types.map((t) => t.name),
				attack: pk.attack,
				};
			})
		);
	return poke;
}

let getByIdDB = async(id) => {
    try{
        let info = await Pokemon.findAll({
            attributes:['name','id','image','hp','attack','defense','speed','height','weight'],
            include:{
                model:Type,
            }
        })
        let found=info.find(pk=>pk.id===id);
        if(found){
            return(pk={
                name:found.name,
                id:found.id,
                image:found.image,
                hp:found.hp,
                attack:found.hp,
                defense:found.defense,
                speed:found.speed,
                height:found.height,
                weight:found.weight,
            })
        }
    }
    catch(e){
        return e;
    }
}

// F I L T E R

let filterbyname = async(all,name) => {
    let pk = all.filter((aux=>{
        return aux.name.toLowerCase() === name.toLowerCase();
    }))
    if(!pk.length){
        return getByNameAPI(name);
    }
    return pk;
}

module.exports = {
    getAllAPI,getByIdAPI,getAllDB,getByIdDB,filterbyname
}