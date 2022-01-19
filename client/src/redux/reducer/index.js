import * as actions from '../actions/index';

const initialState = {
    allpokemons: [],
    pokemons: [],
    detail: [],
    types: [],
}

const rootReducer = (state = initialState,action)=>{
    switch(action.type){
        case actions.GET_ALL_POKEMONS: return{
            ...state,
            allpokemons:action.payload,
            pokemons:action.payload,
        }
        case actions.GET_POKEMON_NAME: return{
            ...state,
            pokemons:action.payload,
        }
        case actions.GET_POKEMON_ID: return{
            ...state,
            detail:action.payload,
        }
        case actions.POST_POKEMON: return{
            ...state,
        }
        case actions.GET_TYPES: return{
            ...state,
            types:action.payload,
        }
        case actions.ORDER_BY:{
            let pokecopy = [...state.pokemons];
            let aux;
            switch(action.payload){
                case "alph-asc": aux = pokecopy.sort(function(a,b){
                    if(a.name>b.name) return 1;
                    if(a.name<b.name) return -1;
                    return 0;
                })
                break;
                case "alph-des": aux = pokecopy.sort(function(a,b){
                    if(a.name>b.name) return -1;
                    if(a.name<b.name) return 1;
                    return 0;
                })
                break;
                case "att-asc": aux = pokecopy.sort(function(a,b){
                    if(a.attack>b.attack) return 1;
                    if(a.attack<b.attack) return -1;
                    return 0;
                })
                break;
                case "att-des": aux = pokecopy.sort(function(a,b){
                    if(a.attack>b.attack) return -1;
                    if(a.attack<b.attack) return 1;
                    return 0;
                })
                break;
                default: return{
                    ...state, pokemons:state.allpokemons
                }
            }
        return {...state,pokemons:aux}
        }
        case actions.FILTER_TYPES:{
            let all = state.allpokemons;
            let filtered = [];
            if(action.payload==='all'){
                filtered = all;
            }
            else{
                filtered = all.filter(e=>e.types.includes(action.payload));
            }
            if(filtered.length>0) return {...state,pokemons:filtered};
            else return {...state,pokemons:"Not Found"};
        }
        case actions.FILTER_DBORAPI:{
            let all = state.allpokemons;
            let filtered = all;
            if(action.payload==='api'){
                filtered = all.filter(e=>typeof e.id==='number');
            }
            else if(action.payload==='db'){
                filtered = all.filter(e=>typeof e.id!='number');
            }
            return{...state,pokemons:filtered};
        }
        default: return state;
    }
}

export default rootReducer;