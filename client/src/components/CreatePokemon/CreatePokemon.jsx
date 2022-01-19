import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTypes, postPokemon } from "../../redux/actions";
import Logo from '../Logo/Logo';
import styles from './CreatePokemon.module.css';

const CreatePokemon = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types)

    const [input,setInput] = useState({
        name: '',
        image: "https://e7.pngegg.com/pngimages/979/917/png-clipart-pokemon-pokemon.png",
        hp: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        types: [],
    })

    function handleChange(e){
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types,e.target.value],
        })
	}

    function handleDelete(e,t){
        e.preventDefault();
        setInput({
            ...input,
            types: input.types.filter(e=>e!==t),
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postPokemon(input));
        alert('Pokemon created');
        setInput({
			name: '',
            image: "",
            hp: '',
            attack: '',
            defense: '',
            speed: '',
            height: '',
            weight: '',
            types: [],
		});
    }

    useEffect(() => {
        dispatch(getTypes());
    }, [])

    return(
        <div>
            <Logo/>
            <div className={styles.back}>
                <Link to={'/home'}>
                    <h3 className={styles.backtt}>Back to home</h3>
                </Link>
            </div>
            <h1 className={styles.title}>Create a Pokemon!</h1>
            <form onSubmit={e=>handleSubmit(e)}>
                <input className={styles.input}
                value={input.name} type='text' name='name' placeholder="Name" onChange={e=>handleChange(e)}>
                </input>
                <input className={styles.input}
                value={input.image} type='text' name='image' placeholder="Url of image" onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.hp} type='number' name='hp' placeholder="HP" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.attack} type='number' name='attack' placeholder="Attack" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.defense} type='number' name='defense' placeholder="Defense" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.speed} type='number' name='speed' placeholder="Speed" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.height} type='number' name='height' placeholder="Height" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <input className={styles.input}
                value={input.weight} type='number' name='weight' placeholder="Weight" min='1' max='9999' onChange={e=>handleChange(e)} required>
                </input>
                <h3 className={styles.typestitle}>Types of pokemons</h3>
                <div className={styles.types}>
                    <label>Type: </label>
                    <select onChange={e=>handleSelect(e)}>
                        <optgroup label="Select Types">
                        </optgroup>
                        {
                            types.map(tp=>{
                                return <option key={tp.id} value={tp.name}>{tp.name[0].toUpperCase()+tp.name.slice(1)}</option>
                            })
                        }
                    </select>
                </div>
                {input.types?.map(t=>(
                    <div className={styles.opt}>
                        <div>
                            <p className={styles.titleopt}>{t[0].toUpperCase()+t.slice(1)}</p>
                        </div>
                        <div>
                            <button className={styles.bttx} onClick={e=>handleDelete(e,t)}>x</button>
                        </div>
                    </div>
                ))}
                <div className={styles.btn}>
                    {
                        input.name.trim()==='' || input.name.trim()<4 || input.types.length>2 || input.types.length===0?
                        <button disabled>Create</button>:<button type="submit">Create</button>
                    }
                </div>
                <div>
                    {
                        input.types.length>2?<p className={styles.error}>Error! You can only add up to 2 types</p>:<></>
                    }
                </div>
            </form>
        </div>
    )
}

export default CreatePokemon;