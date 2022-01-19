import Card from "../Card/Card";
import styles from '../Cards/Cards.module.css';
import Loader from '../Loader/Loader';
import NotFoundPokemon from "../NotFoundPokemon/NotFoundPokemon";

// const Cards = ({allPokemons}) => {
//     return(
//         <div className={styles.cards}>
//             {allPokemons.length?
//             allPokemons.map(pk=>{
//                 let {id,name,image,types} = pk;
//                 return <Card key={id} id={id} image={image} name={name} types={types}/>
//             }):<Loader/>}
//         </div>
//     )
// }

const Cards = ({allPokemons}) => {
        return(
            <div className={styles.cards}>
                {allPokemons.length?
                allPokemons === "Not Found"?<NotFoundPokemon/>
                :allPokemons.map(pk=>{
                    let {id,name,image,types} = pk;
                    return <Card key={id} id={id} image={image} name={name} types={types}/>
                }):<Loader/>}
            </div>
        )
    }
    

export default Cards;